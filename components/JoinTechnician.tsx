"use client";

import { motion } from "framer-motion";
import { Users, Wallet, Smartphone } from "lucide-react";

const features = [
  {
    title: "Dapat Order",
    desc: "Terima order service AC dari customer sekitar Anda.",
    icon: Users,
  },
  {
    title: "Tambah Penghasilan",
    desc: "Bangun penghasilan tambahan dengan sistem marketplace.",
    icon: Wallet,
  },
  {
    title: "Mudah Digunakan",
    desc: "Kelola order langsung dari HP Anda.",
    icon: Smartphone,
  },
];

export default function JoinTechnician() {
  return (
    <section className="relative py-28 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-blue-800 text-white">

      {/* Blur Effect */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-400/20 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400/20 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        <div className="text-center mb-20">

          <p className="text-cyan-300 font-semibold mb-4">
              MITRA TEKNISI OmniAC Power
          </p>

          <h2 className="text-5xl font-bold mb-6">
            Gabung Menjadi Teknisi OmniAC Power
          </h2>

          <p className="text-blue-100 max-w-3xl mx-auto text-lg leading-relaxed">
            Kami membuka peluang bagi teknisi AC & Power profesional
            untuk mendapatkan lebih banyak customer dan meningkatkan penghasilan.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">

          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/10 border border-white/10 backdrop-blur-xl rounded-3xl p-8 hover:bg-white/15 transition"
            >

              <div className="w-16 h-16 rounded-2xl bg-cyan-400/20 flex items-center justify-center mb-6">

                <item.icon className="w-8 h-8 text-cyan-300" />

              </div>

              <h3 className="text-2xl font-bold mb-4">
                {item.title}
              </h3>

              <p className="text-blue-100 leading-relaxed">
                {item.desc}
              </p>

            </motion.div>
          ))}

        </div>

        <div className="text-center">

          <a
            href="https://wa.me/6283194549588"
            target="_blank"
            className="inline-block bg-cyan-400 hover:bg-cyan-300 text-slate-900 font-bold px-10 py-5 rounded-2xl text-lg transition duration-300 shadow-2xl"
          >
            Gabung Sekarang
          </a>

        </div>

      </div>
    </section>
  );
}