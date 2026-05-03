import { PrismaClient } from "@prisma/client";
import { CANDIDATES } from "../src/data/candidates";

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding started...");

  for (const c of CANDIDATES) {
    await prisma.candidate.upsert({
      where: { id: c.id.toString() },
      update: {
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
        totalIncomeDeclared: (c as any).totalIncomeDeclared || "Data Not Available",
        incomeSources: (c as any).incomeSources || "Data Not Available",
        govtContracts: (c as any).govtContracts || "Data Not Available",
        panGiven: (c as any).panGiven || false,
        itrFiled: (c as any).itrFiled || false,
        criminalCases: c.cases || 0,
        seriousCriminalCases: 0,
        caseDetails: JSON.stringify(c.criminalCasesBreakdown || []),
        disqualifications: (c as any).disqualifications || "None",
        performance: c.performanceMetrics ? JSON.stringify(c.performanceMetrics) : null,
        electionHistory: c.electionHistory ? JSON.stringify(c.electionHistory) : null,
        scamsOrControversies: (c as any).pastControversies ? JSON.stringify((c as any).pastControversies) : null,
        currentPosition: (c as any).currentPosition || c.profession,
        yearsInPolitics: (c as any).yearsInPolitics || 0,
        statusBadge: (c as any).statusBadge || "Candidate",
        sourceUrl: c.source || "https://affidavit.eci.gov.in/",
        confidence: c.confidence || "Medium",
        verified: (c as any).confidence === "High",
        lastVerifiedAt: new Date()
      },
      create: {
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
        totalIncomeDeclared: (c as any).totalIncomeDeclared || "Data Not Available",
        incomeSources: (c as any).incomeSources || "Data Not Available",
        govtContracts: (c as any).govtContracts || "Data Not Available",
        panGiven: (c as any).panGiven || false,
        itrFiled: (c as any).itrFiled || false,
        criminalCases: c.cases || 0,
        seriousCriminalCases: 0,
        caseDetails: JSON.stringify(c.criminalCasesBreakdown || []),
        disqualifications: (c as any).disqualifications || "None",
        performance: c.performanceMetrics ? JSON.stringify(c.performanceMetrics) : null,
        electionHistory: c.electionHistory ? JSON.stringify(c.electionHistory) : null,
        scamsOrControversies: (c as any).pastControversies ? JSON.stringify((c as any).pastControversies) : null,
        currentPosition: (c as any).currentPosition || c.profession,
        yearsInPolitics: (c as any).yearsInPolitics || 0,
        statusBadge: (c as any).statusBadge || "Candidate",
        sourceUrl: c.source || "https://affidavit.eci.gov.in/",
        confidence: c.confidence || "Medium",
        verified: (c as any).confidence === "High",
        lastVerifiedAt: new Date()
      }
    });
  }

  console.log("Seeding finished successfully.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
