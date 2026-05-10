import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    console.log("ASSIGN BODY:", body);

    const { orderId, technicianId } = body;

    if (!orderId || !technicianId) {
      return Response.json(
        { error: "orderId / technicianId kosong" },
        { status: 400 }
      );
    }

    const order = await prisma.order.update({
      where: { id: Number(orderId) },
      data: {
        technicianId: Number(technicianId),
        status: "PROSES",
      },
    });

    console.log("ASSIGN SUCCESS:", order);

    return Response.json(order);
  } catch (error) {
    console.error("ASSIGN ERROR DETAIL:", error);

    return Response.json({
  success: true,
  order,
});
  }
}