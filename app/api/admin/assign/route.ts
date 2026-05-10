import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const { orderId, technicianId } = await req.json();

    const updated = await prisma.order.update({
      where: { id: Number(orderId) },
      data: {
        technicianId: Number(technicianId),
        status: "PROSES",
      },
    });

    return Response.json(updated);
  } catch (error) {
    return Response.json(
      { error: "Assign gagal" },
      { status: 500 }
    );
  }
}