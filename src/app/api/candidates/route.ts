import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const candidates = await prisma.candidate.findMany({
      orderBy: { name: 'asc' }
    });
    
    // Parse JSON strings back to objects for the frontend
    const formatted = candidates.map(c => ({
      ...c,
      assetBreakdown: JSON.parse(c.assetBreakdown),
      liabilityBreakdown: JSON.parse(c.liabilityBreakdown),
      caseDetails: JSON.parse(c.caseDetails),
      performance: c.performance ? JSON.parse(c.performance) : undefined,
      electionHistory: c.electionHistory ? JSON.parse(c.electionHistory) : undefined,
      scamsOrControversies: c.scamsOrControversies ? JSON.parse(c.scamsOrControversies) : undefined,
    }));

    return NextResponse.json(formatted);
  } catch (error) {
    console.error("Failed to fetch candidates:", error);
    return NextResponse.json({ error: "Failed to fetch candidates" }, { status: 500 });
  }
}
