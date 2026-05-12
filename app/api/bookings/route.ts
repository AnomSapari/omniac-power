import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      name,
      whatsapp,
      address,
      service,
    } = body;

    const order = await prisma.order.create({
  data: {
    service,

    customerName: name,
    customerWhatsapp: whatsapp,
    customerAddress: address,
  },
});

    return Response.json({
  success: true,
  orderId: order.id,
});

  } catch (error) {
    console.error(error);

    return Response.json(
      { error: "Gagal booking" },
      { status: 500 }
    );
  }
}