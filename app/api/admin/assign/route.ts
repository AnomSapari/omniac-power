import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { orderId, technicianId } = body;

    if (!orderId || !technicianId) {
      return NextResponse.json(
        {
          error: "Order ID dan Technician ID wajib diisi",
        },
        {
          status: 400,
        }
      );
    }

    const updatedOrder = await prisma.order.update({
      where: {
        id: Number(orderId),
      },

      data: {
        technicianId: Number(technicianId),
      },
    });

    return NextResponse.json(updatedOrder);
  } catch (error) {
    console.error("ASSIGN ERROR:", error);

    return NextResponse.json(
      {
        error: "Failed to assign technician",
      },
      {
        status: 500,
      }
    );
  }
}