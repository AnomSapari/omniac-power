"use client";

import { motion } from "framer-motion";


import {
  Wind,
  Wrench,
  Snowflake,
  ShieldCheck,
  BadgeCheck,
  Clock3,
} from "lucide-react";

const services = [
  {
    title: "Service AC",
    desc: "Perbaikan AC tidak dingin dan berbagai kerusakan lainnya.",
    icon: Wrench,
  },
  {
    title: "Cuci AC",
    desc: "Membersihkan AC agar kembali dingin dan sehat.",
    icon: Wind,
  },
  {
    title: "Isi Freon",
    desc: "Isi freon berkualitas dengan pengecekan kebocoran.",
    icon: Snowflake,
  },
];

const benefits = [
  {
    title: "Teknisi Berpengalaman",
    icon: BadgeCheck,
  },
  {
    title: "Garansi Service",
    icon: ShieldCheck,
  },
  {
    title: "Fast Response",
    icon: Clock3,
  },
];

export default function Services() {
  return (
    <section
  id="layanan"
 className="relative overflow-hidden py-24 bg-gradient-to-br from-slate-300 via-blue-200 to-cyan-200"
>
{/* Glow Effect */}
   <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/30 blur-3xl rounded-full"></div>
   <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-200/20 blur-3xl rounded-full"></div>
{/* Dark Overlay */}
<div className="absolute inset-0 bg-black/[0.02]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <p className="text-blue-600 font-semibold mb-3">
            LAYANAN KAMI
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Solusi Lengkap Untuk AC Anda
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Kami menyediakan layanan profesional untuk rumah,
            kantor, toko, dan berbagai kebutuhan lainnya.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">

          {services.map((item, index) => (
            <div
              key={index}
              className="bg-white/70 backdrop-blur-2xl rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:-translate-y-3 transition duration-500 border border-white/60"
            >

              <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">

                <item.icon className="text-blue-700 w-8 h-8" />

              </div>

              <h3 className="text-2xl font-bold mb-4">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {item.desc}
              </p>

            </div>
          ))}

        </div>

        <div className="grid md:grid-cols-3 gap-6">

          {benefits.map((item, index) => (
            <motion.div
  key={index}
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: index * 0.2 }}
  viewport={{ once: true }}
              className="bg-gradient-to-r from-blue-700 to-cyan-600 text-white rounded-2xl p-6 flex items-center gap-4 shadow-xl hover:scale-105 transition duration-300"
            >

              <item.icon className="w-10 h-10" />

              <h3 className="font-semibold text-lg">
                {item.title}
              </h3>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}