const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  try {
    const candidates = await prisma.candidate.findMany();
    console.log(`Found ${candidates.length} candidates.`);
    if (candidates.length > 0) {
      console.log('First candidate sample:');
      const c = candidates[0];
      console.log({
        id: c.id,
        name: c.name,
        assetBreakdown: c.assetBreakdown,
        liabilityBreakdown: c.liabilityBreakdown,
        caseDetails: c.caseDetails
      });
      
      // Test parsing
      try {
        JSON.parse(c.assetBreakdown);
        console.log('assetBreakdown is valid JSON');
      } catch (e) {
        console.log('assetBreakdown is NOT valid JSON:', c.assetBreakdown);
      }
    }
  } catch (error) {
    console.error('Prisma Error:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
