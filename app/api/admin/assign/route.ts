import { prisma } from "@/lib/prisma";


export async function POST(req: Request) {

  try {

    const body = await req.json();

    const updatedOrder = await prisma.order.update({
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
      order: updatedOrder,
    });

  } catch (error) {

    console.error( "ASSIGN ERROR:", error);

    return Response.json({
      success: false,
      message: "Gagal assign teknisi",
    }, { status: 500 });
  }
}