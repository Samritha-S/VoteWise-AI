import { prisma } from "@/lib/prisma";
import { successResponse, errorResponse, badRequestResponse } from "@/lib/api-utils";

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const myths = await prisma.myth.findMany({
      orderBy: { createdAt: "desc" },
    });
    return successResponse(myths);
  } catch (error) {
    console.error("Failed to fetch myths:", error);
    return errorResponse("Failed to fetch myths");
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { claim, userId } = data;

    if (!claim) {
      return badRequestResponse("Claim is required");
    }

    const myth = await prisma.myth.create({
      data: {
        claim,
        userId: userId || null,
        status: "PENDING",
      },
    });

    return successResponse(myth, 201);
  } catch (error) {
    console.error("Failed to submit myth:", error);
    return errorResponse("Failed to submit myth");
  }
}
