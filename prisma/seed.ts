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
        criminalCases: c.cases || 0,
        seriousCriminalCases: 0,
        caseDetails: JSON.stringify(c.criminalCasesBreakdown || []),
        performance: c.performanceMetrics ? JSON.stringify(c.performanceMetrics) : null,
        electionHistory: c.electionHistory ? JSON.stringify(c.electionHistory) : null,
        scamsOrControversies: (c as any).pastControversies ? JSON.stringify((c as any).pastControversies) : null,
        sourceUrl: c.source || "https://affidavit.eci.gov.in/",
        confidence: c.confidence || "Medium",
        familyBackground: c.familyBackground || "Data Not Available",
        spouseProfession: c.spouseProfession || "Data Not Available",
        totalIncomeDeclared: c.totalIncomeDeclared || "Data Not Available",
        panGiven: c.panGiven || false,
        itrFiled: c.itrFiled || false,
        incomeSources: c.incomeSources || "Data Not Available",
        govtContracts: c.govtContracts || "Data Not Available",
        educationDetails: c.educationDetails || "Data Not Available",
        careerHistory: c.careerHistory ? JSON.stringify(c.careerHistory) : null,
        ideologyStances: c.ideologyStances ? JSON.stringify(c.ideologyStances) : null,
        disqualifications: c.disqualifications || "None",
        statusBadge: c.statusBadge || "Candidate",
        votingRecord: c.votingRecord || "Data Not Available",
        yearsInPolitics: c.yearsInPolitics || "0 yrs"
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
        criminalCases: c.cases || 0,
        seriousCriminalCases: 0,
        caseDetails: JSON.stringify(c.criminalCasesBreakdown || []),
        performance: c.performanceMetrics ? JSON.stringify(c.performanceMetrics) : null,
        electionHistory: c.electionHistory ? JSON.stringify(c.electionHistory) : null,
        scamsOrControversies: (c as any).pastControversies ? JSON.stringify((c as any).pastControversies) : null,
        sourceUrl: c.source || "https://affidavit.eci.gov.in/",
        confidence: c.confidence || "Medium",
        familyBackground: c.familyBackground || "Data Not Available",
        spouseProfession: c.spouseProfession || "Data Not Available",
        totalIncomeDeclared: c.totalIncomeDeclared || "Data Not Available",
        panGiven: c.panGiven || false,
        itrFiled: c.itrFiled || false,
        incomeSources: c.incomeSources || "Data Not Available",
        govtContracts: c.govtContracts || "Data Not Available",
        educationDetails: c.educationDetails || "Data Not Available",
        careerHistory: c.careerHistory ? JSON.stringify(c.careerHistory) : null,
        ideologyStances: c.ideologyStances ? JSON.stringify(c.ideologyStances) : null,
        disqualifications: c.disqualifications || "None",
        statusBadge: c.statusBadge || "Candidate",
        votingRecord: c.votingRecord || "Data Not Available",
        yearsInPolitics: c.yearsInPolitics || "0 yrs"
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
