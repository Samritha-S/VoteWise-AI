import { prisma } from "@/lib/prisma";
import { successResponse, errorResponse } from "@/lib/api-utils";

export async function GET() {
  try {
    const [candidateCount, userCount, mythCount] = await Promise.all([
      prisma.candidate.count(),
      prisma.user.count(),
      prisma.myth.count({ where: { status: 'PUBLISHED' } })
    ]);

    return successResponse({
      candidates: candidateCount,
      users: userCount,
      myths: mythCount,
      load: "24%", // Mock for now
    });
  } catch (error) {
    console.error("Failed to fetch admin stats:", error);
    return errorResponse("Failed to fetch stats");
  }
}
