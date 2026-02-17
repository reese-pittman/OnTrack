import { cookies  } from "next/headers";
import { prisma } from '@/lib/prisma'; // ✅ Named import

const SESSION_COOKIE_NAME = "session_id";
const SESSION_DURATION = 1000 * 60 * 5; // 5 minutes 

export async function createSession(userId: number) {
    const expiresAt = new Date(Date.now() + SESSION_DURATION);

    const session = await prisma.session.create({
        data: {
            userId,
            expiresAt,
        },
    }); 
    
    // Set HTTP-only cookie
  (await cookies()).set(SESSION_COOKIE_NAME, session.id, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    expires: expiresAt,
    path: '/',
  });

  return session;
}

export async function getSession() {

    const cookieStore = await cookies();
    const sessionId = cookieStore.get(SESSION_COOKIE_NAME)?.value;

    if (!sessionId) {
        return null;
    }

    const session = await prisma.session.findUnique({
        where: { id: sessionId },
        include: { user: true },
    });

    if (!session || session.expiresAt < new Date()){
        if (session) {
            await prisma.session.delete({ where: { id: sessionId } });
        }

        return null;
    }

    return session;
}

export async function deleteSession() {
    const cookieStore = await cookies();
    const sessionId = cookieStore.get(SESSION_COOKIE_NAME)?.value;

    if (sessionId) {
        await prisma.session.delete({ where: { id: sessionId } }).catch(() => {});
    }

    cookieStore.delete(SESSION_COOKIE_NAME);
}
