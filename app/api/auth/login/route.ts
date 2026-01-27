import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcryct from "bcrypt";
import { error } from "console";

export async function POST(resquest: Request) {
    try {
        const { email, password, name} = await resquest.json();

        if (!email || !password) {
            return NextResponse.json(
                {error: "Missing required fields"},
                {status: 400}
            );
        }

        const user = await prisma.user.findUnique({
            where: { email },
            include: {
                memberships: {
                    include: {
                        organization: true,
                    }
                }
            }
        });

        if (!user) {
            return NextResponse.json(
                {error: "Incorrect email or password"},
                {status: 401}
            );
        }

        const passwordMatch = await bcryct.compare(password, user.passwordHash);

        if (!passwordMatch) {
            return NextResponse.json(
                {error: "Incorrect email or password"},
                {status: 401}
            );
        }

        const membership = user.memberships[0];
        const role = membership?.role || "user";

        return NextResponse.json(
            {
                message: 'Login successful',
                user: {
                    id: user.id,
                    email: user.email,
                    name: user.name,
                    role: role,
                    organizationId: membership?.organizationId,
                    },
            },
            { status: 200 }
        );

    } catch (error) {
        console.log("Login error", error);
        return NextResponse.json(
            {error: "Interanl server error"},
            {status: 500}
        );
    };
} 