import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { email, phone, name, password } = data;

    if (!password || (!email && (!phone || !name))) {
      return NextResponse.json(
        { error: "Password and (Email or Phone+Name) are required" },
        { status: 400 }
      );
    }

    let user;
    if (email) {
      user = await prisma.user.findUnique({
        where: { email },
      });
    } else if (phone && name) {
      user = await prisma.user.findFirst({
        where: { 
          phone: phone,
          name: { equals: name, mode: 'insensitive' }
        },
      });
    }

    if (!user) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    // Securely compare the provided password with the hashed version in the DB
    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    const { password: _, ...userWithoutPassword } = user;

    return NextResponse.json({ user: userWithoutPassword }, { status: 200 });
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { error: "Something went wrong during login" },
      { status: 500 }
    );
  }
}
