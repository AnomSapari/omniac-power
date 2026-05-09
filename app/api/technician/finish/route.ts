import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {

  const body = await req.json();

  await prisma.order.update({
    where: {
      id: body.orderId,
    },

    data: {
      status: "SELESAI",
    },
  });

  return NextResponse.json({
    success: true,
  });
}