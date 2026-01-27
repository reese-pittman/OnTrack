import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";
import { error } from "console";

//npx prisma studio -- this is to view the DB

export async function POST(request: Request) {
  try {

    const { email, password, name } = await request.json();

    if (!email || !password || !name) {
        return NextResponse.json(
        {error: "Missing required fields"},
        {status: 400}
        );
    }

    const existingUser = await prisma.user.findUnique({
        where: { email }
    });

    if (existingUser) {
        return NextResponse.json(
        {error: "Email already in use"},
        {status: 409}
        );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
        data: {
            email,
            passwordHash: hashedPassword,
            name,
        },
    });

    await prisma.membership.create({
        data: {
            userId: user.id,
            organizationId: 1,
            role: 'user',
        },
    });
    
    return Response.json({
        message: "User registered successfully",
        user: {
            id: user.id, 
            email: user.email, 
            name: user.name
        },
    },
     {status: 201}
    );
    } catch (error) {
        console.log("Registration error", error);
        NextResponse.json(
        {error: "Internal Server Error"},
        {status: 500}
        );  
    }
};