import { prisma } from "@/lib/prisma";
import AssignTechnician from "@/components/AssignTechnician";
import LogoutButton from "@/components/LogoutButton";

export default async function AdminPage() {

  const [orders, technicians] = await Promise.all([
    prisma.order.findMany({
      include: {
        customer: true,
        technician: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    }),

    prisma.user.findMany({
      where: {
        role: "TEKNISI",
      },
    }),
  ]);

  return (
    <main className="min-h-screen bg-slate-950 text-white p-10">

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="flex items-center justify-between mb-10">

  <div>

    <h1 className="text-5xl font-bold">
      Dashboard Booking
    </h1>

    <p className="text-slate-400 mt-3">
      Kelola booking customer dan assign teknisi.
    </p>

  </div>

  <LogoutButton />

</div>

        {/* LIST ORDER */}
        <div className="grid gap-6">

          {orders.map((order) => (

            <div
              key={order.id}
              className="bg-white/10 border border-white/10 rounded-3xl p-6"
            >

              {/* HEADER ORDER */}
              <div className="flex justify-between items-center mb-4">

                <h2 className="text-xl font-bold">
                  {order.service}
                </h2>

                <span
  className={`px-4 py-2 rounded-full text-sm font-bold w-fit border
    ${
      order.status === "PENDING"
        ? "bg-yellow-500/20 text-yellow-300 border-yellow-500/30"

        : order.status === "PROSES"
        ? "bg-blue-500/20 text-blue-300 border-blue-500/30"

        : order.status === "SELESAI"
        ? "bg-green-500/20 text-green-300 border-green-500/30"

        : "bg-red-500/20 text-red-300 border-red-500/30"
    }
  `}
>
  {order.status}
</span>

              </div>

              {/* CUSTOMER INFO */}
              <div className="text-slate-300 space-y-1">

                <p>Customer: {order.customer.name}</p>
                <p>WhatsApp: {order.customer.whatsapp}</p>
                <p>Alamat: {order.customer.address}</p>

                <p>
                  Teknisi:{" "}
                  {order.technician?.name || "Belum di-assign"}
                </p>

              </div>

              {/* ASSIGN TEKNISI */}
              <div className="mt-5">

                <AssignTechnician
                  orderId={order.id}
                  technicians={technicians}
                />

              </div>

            </div>

          ))}

        </div>

      </div>

    </main>
  );
}