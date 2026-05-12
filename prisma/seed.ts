import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const password = await bcrypt.hash("123456", 10);

  // ADMIN
  await prisma.user.upsert({
    where: {
      email: "admin@coolcare.com",
    },

    update: {},

    create: {
      name: "Admin",
      email: "admin@coolcare.com",
      password,
      role: "ADMIN",
    },
  });

  // TEKNISI
  const technicians = [
    {
      name: "Teknisi 1",
      email: "tech1@coolcare.com",
    },
    {
      name: "Teknisi 2",
      email: "tech2@coolcare.com",
    },
    {
      name: "Teknisi 3",
      email: "",
    },
    {
      name: "Teknisi 4",
      email: "tech4@coolcare.com",
    },
  ];

  for (const tech of technicians) {
    await prisma.user.upsert({
      where: {
        email: tech.email,
      },

      update: {},

      create: {
        name: tech.name,
        email: tech.email,
        password,
        role: "TECHNICIAN",
      },
    });
  }

  console.log("✅ Admin & Teknisi berhasil dibuat");
}

main()
  .catch((error) => {
    console.error(error);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });