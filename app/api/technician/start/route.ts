import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { OrderStatus } from "@prisma/client";

export async function POST(req: Request) {

  const body = await req.json();

  await prisma.order.update({
    where: {
      id: body.orderId,
    },

    data: {
        status: "PROCESS",
    },
  });

  return NextResponse.json({
    success: true,
  });
}