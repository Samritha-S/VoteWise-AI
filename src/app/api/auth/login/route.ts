import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";
import { successResponse, errorResponse, unauthorizedResponse, badRequestResponse } from "@/lib/api-utils";
import { loginSchema } from "@/lib/validations";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = loginSchema.safeParse(body);

    if (!result.success) {
      return badRequestResponse(result.error.errors[0].message);
    }

    const { email, password } = result.data;

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return unauthorizedResponse("Invalid email or password");
    }

    // Securely compare the provided password with the hashed version in the DB
    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      return unauthorizedResponse("Invalid email or password");
    }

    const { password: _, ...userWithoutPassword } = user;

    return successResponse({ user: userWithoutPassword });
  } catch (error) {
    console.error("Login error:", error);
    return errorResponse("Something went wrong during login");
  }
}
