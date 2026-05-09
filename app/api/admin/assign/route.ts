import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const orderId = Number(body.orderId);
    const technicianId = Number(body.technicianId);

    if (!orderId || !technicianId) {
      return NextResponse.json(
        {
          error: "Data tidak lengkap",
        },
        {
          status: 400,
        }
      );
    }

    const updatedOrder = await prisma.order.update({
      where: {
        id: orderId,
      },

      data: {
        technicianId,
      },
    });

    return NextResponse.json(updatedOrder);
  } catch (error) {
    console.error("ASSIGN ERROR:", error);

    return NextResponse.json(
      {
        error: "Gagal assign teknisi",
      },
      {
        status: 500,
      }
    );
  }
}