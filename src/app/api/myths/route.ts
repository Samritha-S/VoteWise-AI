import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const myths = await prisma.myth.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(myths);
  } catch (error) {
    console.error("Failed to fetch myths:", error);
    return NextResponse.json({ error: "Failed to fetch myths" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { claim, userId } = data;

    if (!claim) {
      return NextResponse.json({ error: "Claim is required" }, { status: 400 });
    }

    const myth = await prisma.myth.create({
      data: {
        claim,
        userId: userId || null,
        status: "PENDING",
      },
    });

    return NextResponse.json(myth, { status: 201 });
  } catch (error) {
    console.error("Failed to submit myth:", error);
    return NextResponse.json({ error: "Failed to submit myth" }, { status: 500 });
  }
}
