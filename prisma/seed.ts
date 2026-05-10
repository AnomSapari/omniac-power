import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const password = await bcrypt.hash("123456", 10);

  // ADMIN
  await prisma.user.upsert({
    where: { email: "admin@coolcare.com" },
    update: {},
    create: {
      name: "Admin",
      email: "admin@coolcare.com",
      password,
      role: "ADMIN",
    },
  });

  // TEKNISI 1
  await prisma.user.upsert({
    where: { email: "tech1@coolcare.com" },
    update: {},
    create: {
      name: "Teknisi 1",
      email: "tech1@coolcare.com",
      password,
      role: "TEKNISI",
    },
  });

  // TEKNISI 2
  await prisma.user.upsert({
    where: { email: "tech2@coolcare.com" },
    update: {},
    create: {
      name: "Teknisi 2",
      email: "tech2@coolcare.com",
      password,
      role: "TEKNISI",
    },
  });

  console.log("✅ Seed selesai: admin + teknisi dibuat");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });