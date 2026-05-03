const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  try {
    const candidates = await prisma.candidate.findMany({ take: 5 });
    candidates.forEach(c => {
      console.log(`Candidate: ${c.name}, Photo: ${c.photo}`);
    });
  } catch (error) {
    console.error('Prisma Error:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
