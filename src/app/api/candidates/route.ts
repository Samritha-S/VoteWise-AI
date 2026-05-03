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
    console.log("Fetching candidates from DB...");
    const candidates = await prisma.candidate.findMany({
      orderBy: { name: 'asc' }
    });
    console.log(`Found ${candidates.length} candidates.`);
    
    // Parse JSON strings back to objects for the frontend
    const formatted = candidates.map(c => ({
      ...c,
      assetBreakdown: safeParse(c.assetBreakdown),
      liabilityBreakdown: safeParse(c.liabilityBreakdown),
      caseDetails: safeParse(c.caseDetails),
      performance: safeParse(c.performance, null),
      electionHistory: safeParse(c.electionHistory, null),
      scamsOrControversies: safeParse(c.scamsOrControversies, null),
    }));

    return NextResponse.json(formatted);
  } catch (error: any) {
    console.error("Failed to fetch candidates:", error);
    return NextResponse.json({ 
      error: "Failed to fetch candidates", 
      details: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    }, { status: 500 });
  }
}
