import { motion } from "framer-motion";
import { Clock, MapPin, Phone } from "lucide-react";
import { WA_NUMBER } from "../data/barbershop";

export default function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1920&q=80)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-coal/85 via-coal/65 to-coal" />
      <div className="absolute inset-0 bg-gradient-to-r from-coal/80 to-transparent" />

      <div className="relative mx-auto w-full max-w-6xl px-5 pt-28 pb-16 md:px-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-display text-xs font-semibold uppercase tracking-[0.4em] text-gold"
        >
          Barbershop — Bandung
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-5 max-w-2xl font-display text-5xl leading-[1.05] font-bold uppercase md:text-7xl"
        >
          Pangkas rapi, <span className="text-gold">tanpa nunggu</span> lama.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 max-w-lg leading-relaxed text-bone/75"
        >
          Pilih layanan, pilih kapster, kunci jamnya — kursi kamu sudah
          menunggu saat sampai di tempat. Tanpa antre, tanpa ragu.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-9 flex flex-wrap gap-4"
        >
          <a
            href="#booking"
            className="rounded-full bg-gold px-8 py-3.5 font-display text-sm font-bold uppercase tracking-wider text-coal transition-transform hover:scale-105"
          >
            Booking Sekarang
          </a>
          <a
            href="#layanan"
            className="rounded-full border border-bone/30 px-8 py-3.5 font-display text-sm font-bold uppercase tracking-wider text-bone transition-colors hover:border-bone hover:bg-bone/10"
          >
            Lihat Layanan
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-sm text-bone/60"
        >
          <span className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-gold" /> Setiap hari · 10.00–21.00
          </span>
          <span className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-gold" /> Jl. Sumur Bandung No. 8
          </span>
          <span className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-gold" /> wa.me/{WA_NUMBER.slice(2)}
          </span>
        </motion.div>
      </div>
    </section>
  );
}
