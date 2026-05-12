import { prisma } from "@/lib/prisma";

import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

import { redirect } from "next/navigation";

import UpdateStatus from "@/components/UpdateStatus";

export const dynamic = "force-dynamic";

export default async function TechnicianPage() {

  const session = await getServerSession(authOptions);

  if (!session?.user) {
    redirect("/login");
  }

  if (session.user.role !== "TECHNICIAN") {
    redirect("/");
  }

  const orders = await prisma.order.findMany({
    where: {
      technicianId: Number(session.user.id),
    },

  

    orderBy: {
      createdAt: "desc",
    },
  });

   return (
    <div className="min-h-screen bg-slate-950 text-white p-6">

      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">
          Dashboard Teknisi
        </h1>

        <form action="/api/auth/signout" method="POST">
          <button className="bg-red-600 px-4 py-2 rounded-lg">
            Logout
          </button>
        </form>
      </div>

      {orders.length === 0 && (
        <div className="text-slate-400">
          Belum ada tugas.
        </div>
      )}

      <div className="space-y-4">

        {orders.map((order) => (
          <div
            key={order.id}
            className="bg-slate-900 border border-slate-800 rounded-xl p-5"
          >
            <h2 className="text-xl font-bold mb-2">
              {order.service}
            </h2>

            <p className="text-slate-400">
              Customer: {order.customerName}
            </p>

            <p className="text-slate-400 mb-4">
              Status: {order.status}
            </p>

            <UpdateStatus orderId={order.id} />
          </div>
        ))}
      </div>
    </div>
  );
}