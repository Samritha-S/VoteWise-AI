import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, phone, email, password, address, state, pincode, age, voterStatus } = data;

    if (!name || !email || !password) {
      return NextResponse.json(
        { error: "Name, email, and password are required" },
        { status: 400 }
      );
    }

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: "User with this email already exists" },
        { status: 400 }
      );
    }

    // Securely hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        name,
        phone: phone || null,
        email,
        password: hashedPassword,
        address: address || null,
        state: state || null,
        pincode: pincode || null,
        age: age ? parseInt(age.toString()) : null,
        voterStatus: voterStatus || "Not Registered",
      },
    });

    // Don't send password back to the client
    const { password: _, ...userWithoutPassword } = user;

    return NextResponse.json({ user: userWithoutPassword }, { status: 201 });
  } catch (error: any) {
    console.error("Signup error details:", {
      message: error.message,
      stack: error.stack,
      name: error.name
    });
    return NextResponse.json(
      { error: `Signup failed: ${error.message || "Internal Server Error"}` },
      { status: 500 }
    );
  }
}
