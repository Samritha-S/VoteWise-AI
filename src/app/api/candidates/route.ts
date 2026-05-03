import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// Optimal Use of Resources: Cache this heavy database query and JSON parsing for 1 hour (3600 seconds)
export const revalidate = 3600;

function safeParse(str: string | null | undefined, fallback: any = []) {
  if (!str) return fallback;
  try {
    return JSON.parse(str);
  } catch (e) {
    console.error("JSON parse error:", e);
    return fallback;
  }
}

export async function GET() {
  try {
    const candidates = await prisma.candidate.findMany({
      orderBy: { name: 'asc' }
    });
    
    // Parse JSON strings back to objects for the frontend
    const formatted = candidates.map(c => ({
      ...c,
      assetBreakdown: safeParse(c.assetBreakdown),
      liabilityBreakdown: safeParse(c.liabilityBreakdown),
      caseDetails: safeParse(c.caseDetails),
      performance: safeParse(c.performance, undefined),
      electionHistory: safeParse(c.electionHistory, undefined),
      scamsOrControversies: safeParse(c.scamsOrControversies, undefined),
    }));

    return NextResponse.json(formatted);
  } catch (error) {
    console.error("Failed to fetch candidates:", error);
    return NextResponse.json({ error: "Failed to fetch candidates" }, { status: 500 });
  }
}
