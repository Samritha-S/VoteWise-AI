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
        criminalCases: c.cases,
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
        criminalCases: c.cases,
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
