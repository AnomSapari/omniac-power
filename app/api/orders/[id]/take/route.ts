import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(
  req: Request,
  { params }: { params: { id: string } }
) {
  const orderId = Number(params.id);

  const updated = await prisma.order.update({
    where: { id: orderId },
    data: {
      status: "PROSES",
      technicianId: 1, // nanti ganti dari session login
    },
  });

  return NextResponse.json(updated);
}