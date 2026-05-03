import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const feedback = await prisma.candidateFeedback.create({
      data: {
        candidateId: body.candidateId,
        isAccurate: body.isAccurate,
        inaccurateFields: body.inaccurateFields,
        comments: body.comments
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
