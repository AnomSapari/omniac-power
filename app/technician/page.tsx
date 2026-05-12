import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function TechnicianPage() {

  const session = await getServerSession(authOptions);

  // 🔐 Protect teknisi
  if (!session || session.user.role !== "TECHNICIAN") {
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

      <h1 className="text-3xl font-bold mb-8">
        Dashboard Teknisi
      </h1>

      <div className="grid gap-6">

        {orders.map((order) => (

          <div
            key={order.id}
            className="bg-slate-900 border border-slate-800 rounded-xl p-6"
          >

            <h2 className="text-xl font-bold">
              {order.service}
            </h2>

            <p className="text-slate-400">
              Customer: {order.customerName}
            </p>

            <p className="text-slate-400">
              WhatsApp:
              {" "}
              {order.customerWhatsapp}
            </p>

            <p className="text-cyan-400 mb-4">
              Status:
              {" "}
              {order.status}
            </p>

            {order.status !== "DONE" && (

              <form
                action="/api/technician/finish"
                method="POST"
              >

                <input
                  type="hidden"
                  name="orderId"
                  value={order.id}
                />

                <button
                  type="submit"
                  className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg font-semibold"
                >
                  Selesai
                </button>

              </form>

            )}

          </div>

        ))}

      </div>

    </div>
  );
}