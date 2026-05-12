import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export async function POST(req: Request) {

  const formData = await req.formData();

  const orderId = formData.get("orderId");
  const technicianId = formData.get("technicianId");

  await prisma.order.update({
    where: {
      id: Number(orderId),
    },

    data: {
      technicianId: Number(technicianId),
      status: "PROCESS",
    },
  });

  redirect("/admin");
}