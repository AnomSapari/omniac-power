import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const order = await prisma.order.update({
      where: {
        id: Number(body.orderId),
      },

      data: {
        technicianId: Number(body.technicianId),
        status: "PROCESS",
      },
    });

    return Response.json({
      success: true,
      order,
    });

  } catch (error) {
    console.error(error);

    return Response.json(
      {
        success: false,
        error: "Gagal assign teknisi",
      },
      {
        status: 500,
      }
    );
  }
}