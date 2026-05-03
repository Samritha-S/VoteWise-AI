import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const data = await request.json();
    const { fact, source, link, status } = data;
    const { id } = await params;

    const myth = await prisma.myth.update({
      where: { id },
      data: {
        fact,
        source,
        link,
        status: status || "PUBLISHED",
      },
    });

    return NextResponse.json(myth);
  } catch (error) {
    console.error("Failed to update myth:", error);
    return NextResponse.json({ error: "Failed to update myth" }, { status: 500 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    await prisma.myth.delete({
      where: { id },
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to delete myth:", error);
    return NextResponse.json({ error: "Failed to delete myth" }, { status: 500 });
  }
}
