
import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {

  try {

    const body = await req.json();

    const customer = await prisma.customer.create({
      data: {
        name: body.name,
        whatsapp: body.whatsapp,
        address: body.address,
      },
    });

    const order = await prisma.order.create({
      data: {
        service: body.service,
        customerId: customer.id,
      },
    });

    return NextResponse.json({
      success: true,
      customer,
      order,
    });

  } catch (error) {

    console.log(error);

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