import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const candidate = await prisma.candidate.findUnique({
      where: { id: params.id },
    });

    if (!candidate) {
      return NextResponse.json({ error: "Candidate not found" }, { status: 404 });
    }

    return NextResponse.json(candidate);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json();
    const candidate = await prisma.candidate.update({
      where: { id: params.id },
      data: {
        name: body.name,
        party: body.party,
        constituency: body.constituency,
        state: body.state,
        photo: body.photo,
        age: body.age ? parseInt(body.age) : undefined,
        education: body.education,
        profession: body.profession,
        totalAssets: body.totalAssets,
        totalLiabilities: body.totalLiabilities,
        criminalCases: body.criminalCases ? parseInt(body.criminalCases) : undefined,
        sourceUrl: body.sourceUrl,
        confidence: body.confidence,
        // Add other fields as needed
      },
    });

    return NextResponse.json(candidate);
  } catch (error: any) {
    console.error("Update error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await prisma.candidate.delete({
      where: { id: params.id },
    });

    return NextResponse.json({ message: "Candidate deleted" });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
