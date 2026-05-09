"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function BookingForm() {

  const [form, setForm] = useState({
    name: "",
    whatsapp: "",
    service: "",
    address: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {

  try {

    const response = await fetch("/api/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await response.json();

    if (data.success) {

      alert("Booking berhasil dikirim 🚀");

      setForm({
        name: "",
        whatsapp: "",
        service: "",
        address: "",
      });

    } else {

      alert("Terjadi kesalahan");
    }

  } catch (error) {

    console.log(error);

    alert("Server error");
  }
};

  return (
    <section
    id="booking"
    className="relative py-28 bg-gradient-to-br from-blue-950 via-slate-900 to-cyan-950 overflow-hidden text-white">

      {/* Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/20 blur-3xl rounded-full pointer-events-none"></div>

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/20 blur-3xl rounded-full"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-2xl border border-white/10 rounded-[30px] md:rounded-[40px] p-5 md:p-10 shadow-2xl"
        >

          <div className="text-center mb-12">

            <p className="text-cyan-400 font-semibold mb-3">
              BOOKING SERVICE
            </p>

            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Pesan Service AC Sekarang
            </h2>

            <p className="text-slate-300">
              Isi form berikut dan tim kami akan segera menghubungi Anda.
            </p>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">

            <input
              type="text"
              name="name"
              value={form.name}
              placeholder="Nama Lengkap"
              onChange={handleChange}
              className="bg-white/10 border border-white/10 rounded-2xl px-4 md:px-5 py-4 outline-none focus:border-cyan-400"
            />

            <input
              type="text"
              name="whatsapp"
              value={form.whatsapp}
              placeholder="Nomor WhatsApp"
              onChange={handleChange}
              className="bg-white/10 border border-white/10 rounded-2xl px-4 md:px-5 py-4 outline-none focus:border-cyan-400"
            />

            <select
              name="service"
              onChange={handleChange}
              className="bg-white/10 border border-white/10 rounded-2xl px-4 md:px-5 py-4 outline-none focus:border-cyan-400"
            >
              <option value="">Pilih Layanan</option>
              <option>Service AC</option>
              <option>Cuci AC</option>
              <option>Isi Freon</option>
              <option>Bongkar Pasang</option>
            </select>

            <input
              type="text"
              name="address"
              value={form.address}
              placeholder="Alamat"
              onChange={handleChange}
              className="bg-white/10 border border-white/10 rounded-2xl px-4 md:px-5 py-4 outline-none focus:border-cyan-400"
            />

          </div>

          <button
            onClick={handleSubmit}
             type="button"
            className="bg-white/10 backdrop-blur-2xl border border-white/10 rounded-[30px] md:rounded-[30px] p-5 md:p-10 shadow-2xl"
          >
            Kirim Booking
          </button>

        </motion.div>

      </div>
    </section>
  );
}