"use client";

import { useState } from "react";

export default function BookingForm() {

  const [name, setName] = useState("");

  const [whatsapp, setWhatsapp] =
    useState("");

  const [address, setAddress] =
    useState("");

  const [service, setService] =
    useState("");

  const handleSubmit = async (
    e: React.FormEvent
  ) => {

    e.preventDefault();

    const res = await fetch("/api/bookings", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        name,
        whatsapp,
        address,
        service,
      }),
    });

    const data = await res.json();

    // ✅ redirect tracking otomatis
    if (data.orderId) {
      window.location.href =
        `/tracking?id=${data.orderId}`;
    }
  };

  return (

    <form
      onSubmit={handleSubmit}
      className="space-y-4"
    >

      <input
        type="text"
        placeholder="Nama"
        value={name}
        onChange={(e) =>
          setName(e.target.value)
        }
        className="w-full p-3 rounded-lg bg-slate-800 text-white"
      />

      <input
        type="text"
        placeholder="WhatsApp"
        value={whatsapp}
        onChange={(e) =>
          setWhatsapp(e.target.value)
        }
        className="w-full p-3 rounded-lg bg-slate-800 text-white"
      />

      <input
        type="text"
        placeholder="Alamat"
        value={address}
        onChange={(e) =>
          setAddress(e.target.value)
        }
        className="w-full p-3 rounded-lg bg-slate-800 text-white"
      />

      <input
        type="text"
        placeholder="Service AC"
        value={service}
        onChange={(e) =>
          setService(e.target.value)
        }
        className="w-full p-3 rounded-lg bg-slate-800 text-white"
      />

      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg text-white"
      >
        Booking Sekarang
      </button>

    </form>
  );
}