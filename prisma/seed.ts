import { PrismaClient } from '@prisma/client';
import { CANDIDATES } from '../src/data/candidates';

const prisma = new PrismaClient();

async function main() {
  console.log('Starting seeding candidates...');

  for (const c of CANDIDATES) {
    await prisma.candidate.upsert({
      where: { id: c.id.toString() },
      update: {
        name: c.name,
        party: c.party,
        constituency: c.constituency,
        state: c.state,
        totalAssets: c.assets,
        totalLiabilities: c.liabilities,
        criminalCases: c.cases,
        seriousCriminalCases: 0, // Mock for now
        sourceUrl: c.source,
        education: c.education,
        confidence: c.confidence,
        photo: c.photo,
        age: c.age,
        profession: c.profession,
        assetBreakdown: JSON.stringify(c.movableAssetsBreakdown), // Simplified mapping
        liabilityBreakdown: JSON.stringify(c.liabilitiesBreakdown),
        caseDetails: JSON.stringify(c.criminalCasesBreakdown),
        performance: JSON.stringify(c.performanceMetrics),
        electionHistory: JSON.stringify(c.electionHistory),
        scamsOrControversies: JSON.stringify(c.pastControversies)
      },
      create: {
        id: c.id.toString(),
        name: c.name,
        party: c.party,
        constituency: c.constituency,
        state: c.state,
        totalAssets: c.assets,
        totalLiabilities: c.liabilities,
        criminalCases: c.cases,
        seriousCriminalCases: 0, // Mock for now
        sourceUrl: c.source,
        education: c.education,
        confidence: c.confidence,
        photo: c.photo,
        age: c.age,
        profession: c.profession,
        assetBreakdown: JSON.stringify(c.movableAssetsBreakdown),
        liabilityBreakdown: JSON.stringify(c.liabilitiesBreakdown),
        caseDetails: JSON.stringify(c.criminalCasesBreakdown),
        performance: JSON.stringify(c.performanceMetrics),
        electionHistory: JSON.stringify(c.electionHistory),
        scamsOrControversies: JSON.stringify(c.pastControversies)
      }
    });
  }

  console.log('Seeding myths...');
  await prisma.myth.deleteMany({ where: { status: 'PUBLISHED' } });
  const myths = [
    { claim: "EVMs can be hacked via Bluetooth.", fact: "EVMs are standalone machines with no wireless connectivity.", source: "ECI", status: "PUBLISHED" },
    { claim: "Voter ID is mandatory even if name is on list.", fact: "You can use 12 alternative IDs if your name is on the list.", source: "ECI", status: "PUBLISHED" },
  ];

  for (const m of myths) {
    await prisma.myth.create({
      data: m
    });
  }

  console.log('Seeding finished.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
