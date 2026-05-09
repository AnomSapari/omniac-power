"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {

  const [open, setOpen] = useState(false);

  // 🔥 MENU NAVBAR
  const menus = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Layanan",
      href: "#layanan",
    },
    {
      name: "Booking",
      href: "#booking",
    },
    {
      name: "Testimoni",
      href: "#testimoni",
    },
  ];

  return ( 
    <header className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">

      <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">

        {/* LOGO */}
        <Link
          href="/"
          className="text-2xl font-bold text-cyan-400 tracking-wide"
        >
          OmniAC Power
        </Link>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex items-center gap-8">

          {menus.map((item) => (

            <Link
              key={item.name}
              href={item.href}
              className="text-slate-200 hover:text-cyan-400 transition duration-300"
            >
              {item.name}
            </Link>

          ))}

        </nav>

        {/* DESKTOP BUTTON */}
        <a
          href="https://wa.me/6283891515097"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center justify-center bg-cyan-400 hover:bg-cyan-300 text-slate-900 font-semibold px-5 py-3 rounded-full transition duration-300"
        >
          Hubungi
        </a>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
          aria-label="Toggle Menu"
        >
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>

      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>

        {open && (

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-white/10 bg-slate-950"
          >

            <div className="flex flex-col gap-5 p-6">

              {menus.map((item) => (

                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-slate-200 hover:text-cyan-400 transition duration-300"
                >
                  {item.name}
                </Link>

              ))}

              {/* MOBILE BUTTON */}
              <a
                href="https://wa.me/6283891515097"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-cyan-400 hover:bg-cyan-300 text-slate-900 text-center font-semibold py-3 rounded-full transition duration-300"
              >
                Hubungi Sekarang
              </a>

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </header>
  );
}