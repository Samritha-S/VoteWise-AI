const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const candidate = await prisma.candidate.findFirst();
  console.log(JSON.stringify(candidate, null, 2));
}

main().catch(console.error).finally(() => prisma.$disconnect());
