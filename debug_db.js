const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const modi = await prisma.candidate.findUnique({
    where: { id: "1" }
  });
  console.log(JSON.stringify(modi, null, 2));
}

main().finally(() => prisma.$disconnect());
