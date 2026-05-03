import { prisma } from "@/lib/prisma";
import { feedbackSchema } from "@/lib/validations";
import { successResponse, errorResponse, badRequestResponse } from "@/lib/api-utils";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = feedbackSchema.safeParse(body);
    
    if (!parsed.success) {
      return badRequestResponse(parsed.error.errors[0].message);
    }

    const feedback = await prisma.candidateFeedback.create({
      data: {
        candidateId: parsed.data.candidateId,
        isAccurate: parsed.data.isAccurate,
        inaccurateFields: parsed.data.inaccurateFields || "",
        comments: parsed.data.comments || ""
      }
    });
    return successResponse(feedback);
  } catch (error: unknown) {
    return errorResponse(error instanceof Error ? error.message : String(error));
  }
}

export async function GET() {
  try {
    const feedback = await prisma.candidateFeedback.findMany({
      orderBy: { createdAt: 'desc' }
    });
    return successResponse(feedback);
  } catch (error: unknown) {
    return errorResponse(error instanceof Error ? error.message : String(error));
  }
}
