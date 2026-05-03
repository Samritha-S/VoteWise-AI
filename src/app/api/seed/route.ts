import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { CANDIDATES } from "@/data/candidates";

export async function GET() {
  try {
    const count = await prisma.candidate.count();
    if (count > 0) {
      return NextResponse.json({ message: "Database already seeded", count });
    }

    // Insert all candidates from the hardcoded file into the SQLite database
    let inserted = 0;
    for (const c of CANDIDATES) {
      await prisma.candidate.create({
        data: {
          id: c.id.toString(),
          name: c.name,
          party: c.party,
          constituency: c.constituency,
          state: c.state,
          photo: c.photo,
          age: c.age,
          education: c.education,
          profession: c.profession,
          totalAssets: c.assets || "0",
          totalLiabilities: c.liabilities || "0",
          assetBreakdown: JSON.stringify({ movable: c.movableAssetsBreakdown, immovable: c.immovableAssetsBreakdown }),
          liabilityBreakdown: JSON.stringify(c.liabilitiesBreakdown || []),
          criminalCases: c.cases || 0,
          seriousCriminalCases: 0,
          caseDetails: JSON.stringify(c.criminalCasesBreakdown || []),
          performance: (c as any).performanceMetrics ? JSON.stringify((c as any).performanceMetrics) : null,
          electionHistory: (c as any).electionHistory ? JSON.stringify((c as any).electionHistory) : null,
          scamsOrControversies: (c as any).controversies ? JSON.stringify((c as any).controversies) : null,
          sourceUrl: c.source || "https://affidavit.eci.gov.in/",
          confidence: c.confidence || "Medium"
        }
      });
      inserted++;
    }

    return NextResponse.json({ message: "Database seeded successfully", inserted });
  } catch (error: any) {
    console.error("Seeding error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
