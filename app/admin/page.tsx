import { prisma } from "@/lib/prisma";

import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function AdminPage() {

  // 🔐 Ambil session
  const session = await getServerSession(authOptions);

  // ❌ Bukan admin
  if (session?.user?.role !== "ADMIN") {
    redirect("/");
  }

  // 🔥 Ambil semua order
  const orders = await prisma.order.findMany({
    include: {
     
      technician: true,
    },

    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6">

      <h1 className="text-3xl font-bold mb-6">
        Dashboard Admin
      </h1>

      {/* EMPTY */}
      {orders.length === 0 && (
        <div className="text-slate-400">
          Belum ada order masuk.
        </div>
      )}

      {/* LIST ORDER */}
      <div className="space-y-4">
        {orders.map((order) => (
          <div
            key={order.id}
            className="bg-slate-900 border border-slate-800 rounded-xl p-4"
          >
            <h2 className="font-bold text-lg">
              {order.service}
            </h2>

            <p className="text-slate-400">
              Customer:
              {" "}
              order.customerName
            </p>

            <p className="text-slate-400">
              Status:
              {" "}
              {order.status}
            </p>

            <p className="text-slate-400">
              TECHNICIAN:
              {" "}
              {order.technician?.name || "Belum dipilih"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}