import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function AdminPage() {

  const session = await getServerSession(authOptions);

  // 🔐 Protect admin
  if (!session || session.user.role !== "ADMIN") {
    redirect("/");
  }

  // 🔥 Semua order
  const orders = await prisma.order.findMany({
    orderBy: {
      createdAt: "desc",
    },

    include: {
      technician: true,
    },
  });

  // 🔥 Semua teknisi
  const technicians = await prisma.user.findMany({
    where: {
      role: "TECHNICIAN",
    },
  });

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6">

      <h1 className="text-3xl font-bold mb-8">
        Dashboard Admin
      </h1>

      <div className="grid gap-6">

        {orders.map((order) => (

          <div
            key={order.id}
            className="bg-slate-900 border border-slate-800 rounded-xl p-6"
          >

            <h2 className="text-xl font-bold mb-2">
              {order.service}
            </h2>

            <p className="text-slate-400">
              Customer: {order.customerName}
            </p>

            <p className="text-slate-400">
              WhatsApp: {order.customerWhatsapp}
            </p>

            <p className="text-slate-400 mb-4">
              Status:
              {" "}
              <span className="text-cyan-400">
                {order.status}
              </span>
            </p>

            {/* TEKNISI */}
            {order.technician && (
              <p className="text-green-400 mb-4">
                Teknisi:
                {" "}
                {order.technician.name}
              </p>
            )}

            {/* ASSIGN */}
            {!order.technicianId && (

              <form
                action="/api/admin/assign"
                method="POST"
                className="flex gap-3"
              >

                <input
                  type="hidden"
                  name="orderId"
                  value={order.id}
                />

                <select
                  name="technicianId"
                  className="bg-slate-800 border border-slate-700 rounded-lg px-4 py-2"
                >

                  {technicians.map((tech) => (

                    <option
                      key={tech.id}
                      value={tech.id}
                    >
                      {tech.name}
                    </option>

                  ))}

                </select>

                <button
                  type="submit"
                  className="bg-cyan-500 hover:bg-cyan-600 px-4 py-2 rounded-lg font-semibold"
                >
                  Assign
                </button>

              </form>

            )}

          </div>

        ))}

      </div>

    </div>
  );
}