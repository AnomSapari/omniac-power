import { prisma } from "@/lib/prisma";

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

  return Response.redirect(
    new URL("/technician", req.url)
  );
}