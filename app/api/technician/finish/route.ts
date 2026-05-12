import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const updated = await prisma.order.update({
      where: {
        id: Number(body.orderId),
      },

      data: {
        status: "DONE",
      },
    });

    return Response.json({
      success: true,
      order: updated,
    });

  } catch (error) {
    console.error("FINISH ERROR:", error);

    return Response.json(
      {
        success: false,
        error: "Gagal update status",
      },
      {
        status: 500,
      }
    );
  }
}