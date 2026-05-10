
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { service, name, whatsapp, address } = body;

    const order = await prisma.order.create({
      data: {
        service,
        status: "PENDING",

        customer: {
          create: {
            name,
            whatsapp,
            address,
          },
        },
      },
      include: {
        customer: true,
      },
    });

    return Response.json(order);
  } catch (error) {
    console.error(error);
    return Response.json(
      { error: "Gagal membuat booking" },
      { status: 500 }
    );
  }
}
