import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// VERY basic implementation. In a real app, protect this route!
export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const users = await prisma.user.findMany({
      orderBy: { createdAt: "desc" },
    });
    
    // Do not return passwords!
    const sanitized = users.map(u => {
      const { password, ...rest } = u;
      return rest;
    });

    return NextResponse.json(sanitized);
  } catch (error) {
    console.error("Failed to fetch users:", error);
    return NextResponse.json({ error: "Failed to fetch users" }, { status: 500 });
  }
}
