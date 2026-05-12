import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {

  try {

    const body = await req.json();

    const { orderId, technicianId } = body;

    // ✅ simpan hasil update ke variable order
    const order = await prisma.order.update({

      where: {
        id: Number(orderId),
      },

      data: {
        technicianId: Number(technicianId),
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
        message: "Assign gagal",
      },
      {
        status: 500,
      }
    );
  }
}