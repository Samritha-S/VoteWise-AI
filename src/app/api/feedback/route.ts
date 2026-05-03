import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { z } from "zod";

const feedbackSchema = z.object({
  candidateId: z.string().min(1),
  isAccurate: z.string().min(1),
  inaccurateFields: z.string().optional(),
  comments: z.string().max(1000).optional()
});

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
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function GET(req: Request) {
  try {
    const feedback = await prisma.candidateFeedback.findMany({
      orderBy: { createdAt: 'desc' }
    });
    return NextResponse.json(feedback);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
