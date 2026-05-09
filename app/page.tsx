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
    <main className="min-h-screen bg-white">
         <Navbar/>
       {/* HERO */}
      <section className="hero-bg text-white min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400/30 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-300/20 blur-3xl rounded-full"></div>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

       <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
         >
         <p className="bg-white/20 inline-block px-4 py-2 rounded-full mb-6">
              Teknisi AC Profesional
         </p>

         <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
             AC Anda Tidak Dingin?
         </h1>

          <p className="text-xl text-blue-100 mb-8">
             Service AC cepat, bergaransi, dan terpercaya untuk rumah maupun kantor.
          </p>

           <div className="flex gap-4">
             <a
              href="https://wa.me/6283891515097"
              target="_blank"
              className="bg-green-500 hover:bg-green-600 px-8 py-4 rounded-2xl font-semibold text-lg transition"
             >
                Booking Sekarang
             </a>
             <a
              href="#layanan"
              className="border border-white px-8 py-4 rounded-2xl"
              >
                Lihat Layanan
             </a>
           </div>
         </motion.div>

    <motion.div
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1 }}
  className="flex justify-center"
>

      <img
        src="/ac.jpg"
        alt="AC"
       className="w-full max-w-lg rounded-3xl shadow-2xl border border-white/20"
      />

    </motion.div>

  </div>

</section>

 <Services />
 <JoinTechnician />
 <Testimonials />
 <BookingForm />

      {/* SERVICES 
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl font-bold text-center mb-12">
            Layanan Kami
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="border rounded-2xl p-6 shadow">
              <h3 className="text-2xl font-bold mb-4">
                Service AC
              </h3>
              <p>
                Perbaikan AC tidak dingin dan bermasalah.
              </p>
            </div>

            <div className="border rounded-2xl p-6 shadow">
              <h3 className="text-2xl font-bold mb-4">
                Cuci AC
              </h3>
              <p>
                Membersihkan AC agar dingin maksimal.
              </p>
            </div>

            <div className="border rounded-2xl p-6 shadow">
              <h3 className="text-2xl font-bold mb-4">
                Isi Freon
              </h3>
              <p>
                Isi freon berkualitas dan bergaransi.
              </p>
            </div>

          </div>

        </div>
      </section>   */}

      <FloatingWhatsApp />

    </main>
  )
}