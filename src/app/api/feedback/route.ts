import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { feedbackSchema } from "@/lib/validations";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = feedbackSchema.safeParse(body);
    
    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid data format", details: parsed.error.issues }, { status: 400 });
    }

    const feedback = await prisma.candidateFeedback.create({
      data: {
        candidateId: parsed.data.candidateId,
        isAccurate: parsed.data.isAccurate,
        inaccurateFields: parsed.data.inaccurateFields || "",
        comments: parsed.data.comments || ""
      }
    });
    return NextResponse.json(feedback);
  } catch (error: unknown) {
    return NextResponse.json({ error: error instanceof Error ? error.message : String(error) }, { status: 500 });
  }
}

export async function GET(req: Request) {
  try {
    const feedback = await prisma.candidateFeedback.findMany({
      orderBy: { createdAt: 'desc' }
    });
    return NextResponse.json(feedback);
  } catch (error: unknown) {
    return NextResponse.json({ error: error instanceof Error ? error.message : String(error) }, { status: 500 });
  }
}
