import { prisma } from "@/lib/prisma";
import TechnicianClient from "@/components/TechnicianClient";

import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export default async function TechnicianPage() {

  const session = await getServerSession(authOptions);

  // 🔥 Ambil hanya order milik teknisi login
  const orders = await prisma.order.findMany({

    where: {
      technician: {
        email: session?.user?.email || "",
      },
    },

    include: {
      customer: true,
    },

    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <TechnicianClient orders={orders} />
  );
}