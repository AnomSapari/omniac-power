import { prisma } from "@/lib/prisma";

import { NextResponse } from "next/server";

export async function POST(req: Request) {

  try {

    const body = await req.json();

    const orders = await prisma.order.findMany({

      where: {
        customer: {
          whatsapp: body.whatsapp,
        },
      },

      include: {
        customer: true,
        technician: true,
      },

      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json({
      success: true,
      orders,
    });

  } catch (error) {

    console.error(error);

    return NextResponse.json(
      {
        success: false,
      },
      {
        status: 500,
      }
    );
  }
}