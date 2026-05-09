import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {

  try {

    const body = await request.json();

    const { orderId, technicianId } = body;

    // 🔥 Update order
    const order = await prisma.order.update({
      where: {
        id: Number(orderId),
      },
      data: {
        technicianId: Number(technicianId),
      },
    });

    return NextResponse.json({
      success: true,
      order,
    });

  } catch (error) {

    console.log(error);

    return NextResponse.json(
      {
        success: false,
        message: "Gagal assign teknisi",
      },
      {
        status: 500,
      }
    );
  }
}