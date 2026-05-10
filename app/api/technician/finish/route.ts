import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { OrderStatus } from "@prisma/client";

export async function POST(req: Request) {
  try {
    const { orderId } = await req.json();

    if (!orderId) {
      return Response.json(
        { error: "orderId wajib diisi" },
        { status: 400 }
      );
    }

    const order = await prisma.order.findUnique({
      where: { id: Number(orderId) },
      include: {
        customer: true,
      },
    });

    if (!order) {
      return Response.json(
        { error: "Order tidak ditemukan" },
        { status: 404 }
      );
    }

    const updated = await prisma.order.update({
      where: { id: Number(orderId) },
      data: {
        status: "SELESAI",
      },
    });

    return Response.json(updated);
  } catch (error) {
    console.error("FINISH ERROR:", error);

    return Response.json(
       { error: "Gagal finish job" },
      { status: 500 }
    );
  }
}