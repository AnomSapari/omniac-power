"use client";

import { useState } from "react";

export default function TrackingPage() {

  const [whatsapp, setWhatsapp] = useState("");

  const [orders, setOrders] = useState<any[]>([]);

  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {

    if (!whatsapp) return;

    setLoading(true);

    try {

      const response = await fetch("/api/tracking", {

        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          whatsapp,
        }),
      });

      const data = await response.json();

      setOrders(data.orders || []);

    } catch (error) {

      console.error(error);

    } finally {

      setLoading(false);

    }
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white p-6">

      <div className="max-w-3xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-10">

          <h1 className="text-5xl font-bold mb-4">
            Tracking Service
          </h1>

          <p className="text-slate-400">
            Cek status service AC Anda secara realtime.
          </p>

        </div>

        {/* SEARCH */}
        <div className="bg-white/10 border border-white/10 rounded-3xl p-6 backdrop-blur-xl mb-10">

          <div className="flex flex-col md:flex-row gap-4">

            <input
              type="text"
              placeholder="Masukkan nomor WhatsApp"
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
              className="flex-1 bg-slate-900 border border-slate-700 px-5 py-4 rounded-2xl outline-none focus:border-cyan-400"
            />

            <button
              onClick={handleSearch}
              className="bg-cyan-400 hover:bg-cyan-300 transition text-slate-900 font-bold px-8 py-4 rounded-2xl"
            >
              {loading ? "Mencari..." : "Cek Status"}
            </button>

          </div>

        </div>

        {/* RESULT */}
        <div className="grid gap-6">

          {orders.map((order: any) => (

            <div
              key={order.id}
              className="bg-white/10 border border-white/10 rounded-3xl p-6 backdrop-blur-xl"
            >

              <div className="flex items-center justify-between mb-6">

                <div>

                  <h2 className="text-2xl font-bold">
                    {order.service}
                  </h2>

                  <p className="text-slate-400 text-sm mt-1">
                    Order #{order.id}
                  </p>

                </div>

                {/* STATUS */}
                <span
                  className={`px-4 py-2 rounded-full text-sm font-bold border
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

              <div className="space-y-3 text-slate-300">

                <p>
                  <strong>Customer:</strong>{" "}
                  {order.customer.name}
                </p>

                <p>
                  <strong>Alamat:</strong>{" "}
                  {order.customer.address}
                </p>

                <p>
                  <strong>Teknisi:</strong>{" "}
                  {order.technician?.name || "Belum ditentukan"}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </main>
  );
}