import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {

  const hashedPassword = await bcrypt.hash("123456", 10);

  const admin = await prisma.user.upsert({
    where: {
      email: "admin@coolcare.com",
    },

    update: {
      password: hashedPassword,
      role: "ADMIN",
    },

    create: {
      name: "Admin CoolCare",
      email: "admin@coolcare.com",
      password: hashedPassword,
      role: "ADMIN",
    },
  });

  console.log("✅ Admin siap digunakan");
  console.log(admin);
}

main()
  .catch((error) => {
    console.error(error);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });