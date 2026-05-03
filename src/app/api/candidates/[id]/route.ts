import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { z } from "zod";
import { revalidatePath } from "next/cache";

const candidateSchema = z.object({
  name: z.string().min(1).optional(),
  party: z.string().min(1).optional(),
  constituency: z.string().min(1).optional(),
  state: z.string().min(1).optional(),
  photo: z.string().url().or(z.string().startsWith("/")).optional(),
  age: z.coerce.number().int().positive().optional(),
  education: z.string().optional(),
  profession: z.string().optional(),
  totalAssets: z.string().optional(),
  totalLiabilities: z.string().optional(),
  criminalCases: z.coerce.number().int().min(0).optional(),
  sourceUrl: z.string().url().optional(),
  confidence: z.string().optional(),
});

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
    const json = await request.json();
    const body = candidateSchema.parse(json);

    const candidate = await prisma.candidate.update({
      where: { id: params.id },
      data: body,
    });

    // Revalidate the candidate detail page and the directory
    revalidatePath(`/candidates/${params.id}`);
    revalidatePath("/candidates");

    return NextResponse.json(candidate);
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors }, { status: 400 });
    }
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
