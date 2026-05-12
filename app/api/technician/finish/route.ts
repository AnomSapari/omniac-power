import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export async function POST(req: Request) {

  const formData = await req.formData();

  const orderId = formData.get("orderId");

  await prisma.order.update({
    where: {
      id: Number(orderId),
    },

    data: {
      status: "DONE",
    },
  });

  redirect("/technician");
}