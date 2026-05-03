const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const candidates = await prisma.candidate.findMany();
  console.log('Candidates in DB:', candidates.length);
  if (candidates.length > 0) {
    console.log('First candidate:', candidates[0].name);
  }
}

main().catch(console.error).finally(() => prisma.$disconnect());
