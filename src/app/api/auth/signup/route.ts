import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";
import { successResponse, errorResponse, badRequestResponse } from "@/lib/api-utils";
import { signupSchema } from "@/lib/validations";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = signupSchema.safeParse(body);

    if (!result.success) {
      return badRequestResponse(result.error.errors[0].message);
    }

    const { name, phone, email, password, address, state, pincode, age, voterStatus } = result.data;

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return badRequestResponse("User with this email already exists");
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
        age,
        voterStatus: voterStatus || "Not Registered",
      },
    });

    // Don't send password back to the client
    const { password: _, ...userWithoutPassword } = user;

    return successResponse({ user: userWithoutPassword }, 201);
  } catch (error: any) {
    console.error("Signup error details:", {
      message: error.message,
      stack: error.stack,
      name: error.name
    });
    return errorResponse(`Signup failed: ${error.message || "Internal Server Error"}`);
  }
}
