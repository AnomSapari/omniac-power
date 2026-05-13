"use client";

import { motion } from "framer-motion";

import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import JoinTechnician from "@/components/JoinTechnician";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Testimonials from "@/components/Testimonials";
import BookingForm from "@/components/BookingForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white overflow-hidden">

      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">

        {/* BACKGROUND */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950" />

        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/20 blur-3xl rounded-full" />

        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/20 blur-3xl rounded-full" />

        {/* CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
          >

            {/* BADGE */}
            <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 px-5 py-2 rounded-full text-sm font-medium mb-8">
              ⚡ Teknisi AC Profesional & Fast Response
            </div>

            {/* TITLE */}
            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-8">
              Service AC
              <span className="block text-cyan-400">
                Cepat & Bergaransi
              </span>
            </h1>

            {/* DESC */}
            <p className="text-slate-300 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl">
              AC tidak dingin, bocor, atau berisik?
              Tim teknisi profesional siap datang ke lokasi Anda
              dengan pelayanan cepat, harga transparan,
              dan pengerjaan terpercaya.
            </p>

            {/* BUTTON */}
            <div className="flex flex-wrap gap-4 mb-12">

              <a
                href="#booking"
                className="bg-cyan-500 hover:bg-cyan-600 transition-all duration-300 px-8 py-4 rounded-2xl font-bold text-lg shadow-lg shadow-cyan-500/20"
              >
                Booking Sekarang
              </a>

              <a
                href="#layanan"
                className="border border-slate-700 hover:border-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 px-8 py-4 rounded-2xl font-semibold text-lg"
              >
                Lihat Layanan
              </a>

            </div>

            {/* STATS */}
            <div className="grid grid-cols-3 gap-6">

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5">
                <h3 className="text-3xl font-black text-cyan-400">
                  500+
                </h3>

                <p className="text-slate-400 text-sm mt-2">
                  Customer
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5">
                <h3 className="text-3xl font-black text-cyan-400">
                  24/7
                </h3>

                <p className="text-slate-400 text-sm mt-2">
                  Fast Response
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5">
                <h3 className="text-3xl font-black text-cyan-400">
                  100%
                </h3>

                <p className="text-slate-400 text-sm mt-2">
                  Bergaransi
                </p>
              </div>

            </div>

          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1,
            }}
            className="relative flex justify-center"
          >

            {/* GLOW */}
            <div className="absolute inset-0 bg-cyan-500 blur-3xl opacity-20 rounded-full" />

            {/* IMAGE */}
            <img
              src="/ac.jpg"
              alt="Service AC"
              className="relative z-10 w-full max-w-xl rounded-[32px] shadow-2xl border border-white/10"
            />

            {/* FLOATING CARD */}
            <div className="absolute -bottom-6 left-6 z-20 bg-slate-900/90 backdrop-blur-xl border border-slate-800 rounded-3xl p-5 shadow-2xl">

              <div className="flex items-center gap-4">

                <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse" />

                <div>
                  <p className="text-sm text-slate-400">
                    Status Teknisi
                  </p>

                  <h4 className="font-bold text-white">
                    Sedang Menuju Lokasi
                  </h4>
                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </section>

      {/* TRUST SECTION */}
      <section className="py-16 border-t border-slate-900">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-cyan-500 transition-all duration-300">

              <div className="text-5xl mb-5">
                ⚡
              </div>

              <h3 className="text-2xl font-bold mb-4">
                Fast Response
              </h3>

              <p className="text-slate-400 leading-relaxed">
                Teknisi siap datang cepat ke lokasi customer
                dengan sistem booking online modern.
              </p>

            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-cyan-500 transition-all duration-300">

              <div className="text-5xl mb-5">
                🛠️
              </div>

              <h3 className="text-2xl font-bold mb-4">
                Teknisi Profesional
              </h3>

              <p className="text-slate-400 leading-relaxed">
                Dikerjakan teknisi berpengalaman untuk service,
                cuci AC, freon, dan instalasi.
              </p>

            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-cyan-500 transition-all duration-300">

              <div className="text-5xl mb-5">
                📍
              </div>

              <h3 className="text-2xl font-bold mb-4">
                Tracking Progress
              </h3>

              <p className="text-slate-400 leading-relaxed">
                Customer dapat memantau progress pengerjaan
                secara realtime melalui website.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* SERVICES */}
      <section id="layanan">
        <Services />
      </section>

      {/* JOIN */}
      <JoinTechnician />

      {/* TESTIMONIAL */}
      <Testimonials />

      {/* BOOKING */}
      <section
        id="booking"
        className="py-10"
      >
        <BookingForm />
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-900 py-10 px-6">

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">

          <div>
            <h3 className="text-2xl font-black text-cyan-400">
              CoolCare AC
            </h3>

            <p className="text-slate-500 mt-2">
              Service AC Profesional & Bergaransi
            </p>
          </div>

          <div className="text-slate-500 text-sm">
            © 2026 CoolCare AC. All rights reserved.
          </div>

        </div>

      </footer>

      {/* FLOATING WA */}
      <FloatingWhatsApp />

    </main>
  );
}