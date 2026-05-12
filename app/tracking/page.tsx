import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function TrackingPage({
  searchParams,
}: {
  searchParams: Promise<{
    id?: string;
  }>;
}) {

  const { id } = await searchParams;

  if (!id) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
        Order ID tidak ditemukan
      </div>
    );
  }

  const order = await prisma.order.findUnique({
    where: {
      id: Number(id),
    },

    include: {
      technician: true,
    },
  });

  if (!order) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
        Order tidak ditemukan
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">

      <div className="max-w-2xl mx-auto">

        <h1 className="text-4xl font-bold mb-8">
          Tracking Order
        </h1>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">

          <h2 className="text-2xl font-bold mb-4">
            {order.service}
          </h2>

          <div className="space-y-3 text-slate-300">

            <p>
              Customer:
              {" "}
              {order.customerName}
            </p>

            <p>
              WhatsApp:
              {" "}
              {order.customerWhatsapp}
            </p>

            <p>
              Address:
              {" "}
              {order.customerAddress}
            </p>

            <p>
              Teknisi:
              {" "}
              {order.technician?.name || "Belum dipilih"}
            </p>

          </div>

          <div className="mt-8">

            <div className="text-lg font-bold mb-4">
              Status Order
            </div>

            <div className="space-y-4">

              <div
                className={`p-4 rounded-xl ${
                  order.status === "PENDING"
                    ? "bg-yellow-500 text-black"
                    : "bg-slate-800"
                }`}
              >
                PENDING
              </div>

              <div
                className={`p-4 rounded-xl ${
                  order.status === "ASSIGNED"
                    ? "bg-blue-500"
                    : "bg-slate-800"
                }`}
              >
                ASSIGNED
              </div>

              <div
                className={`p-4 rounded-xl ${
                  order.status === "PROCESS"
                    ? "bg-orange-500"
                    : "bg-slate-800"
                }`}
              >
                PROCESS
              </div>

              <div
                className={`p-4 rounded-xl ${
                  order.status === "DONE"
                    ? "bg-green-500"
                    : "bg-slate-800"
                }`}
              >
                DONE
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}