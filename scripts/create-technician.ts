import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {

  // 🔐 Hash password
  const hashedPassword = await bcrypt.hash("123456", 10);

  // 👨‍🔧 Buat user teknisi
  const technician = await prisma.user.create({
    data: {
      name: "Teknisi 1",
      email: "teknisiac@coolcare.com",
      password: hashedPassword,
      role: "TEKNISI",
    },
  });

  console.log("✅ Teknisi berhasil dibuat:");
  console.log(technician);

}

main()
  .catch((error) => {
    console.error(error);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });