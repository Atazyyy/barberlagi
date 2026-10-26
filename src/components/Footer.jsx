import { MapPin, Clock, Instagram, Github } from "lucide-react";
import { WA_NUMBER } from "../data/barbershop";

const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
  "Halo BarberLagi! Saya mau tanya-tanya dulu boleh?"
)}`;

export default function Footer() {
  return (
    <footer id="lokasi" className="scroll-mt-20 border-t border-bone/10 bg-coal">
      <div className="mx-auto max-w-6xl px-5 py-14 md:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-display text-2xl font-bold uppercase">
              Barber<span className="text-gold">Lagi</span>
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-bone/55">
              Barbershop kecil di Bandung yang percaya rapi itu ibadah
              harian. Booking dulu, datang tepat waktu.
            </p>
            <a
              href="#"
              className="mt-4 inline-flex items-center gap-1.5 text-sm text-bone/60 hover:text-bone"
            >
              <Instagram className="h-4 w-4 text-gold" /> @barberlagi
            </a>
          </div>

          <div>
            <p className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-gold">
              <MapPin className="h-4 w-4" /> Lokasi
            </p>
            <p className="mt-3 text-sm leading-relaxed text-bone/60">
              Jl. Sumur Bandung No. 8,
              <br />
              Bandung, Jawa Barat 40112
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-block text-sm text-bone/60 underline decoration-bone/30 underline-offset-4 hover:text-bone"
            >
              Chat admin dulu →
            </a>
          </div>

          <div>
            <p className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-gold">
              <Clock className="h-4 w-4" /> Jam Buka
            </p>
            <ul className="mt-3 space-y-1.5 text-sm text-bone/60">
              <li className="flex justify-between gap-6">
                <span>Senin – Kamis</span> <span>10.00 – 21.00</span>
              </li>
              <li className="flex justify-between gap-6">
                <span>Jumat</span> <span>10.00 – 22.00</span>
              </li>
              <li className="flex justify-between gap-6">
                <span>Sabtu – Minggu</span> <span>09.00 – 22.00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-bone/10 pt-6 text-xs text-bone/35 sm:flex-row sm:items-center">
          <p>© 2026 BarberLagi. Seluruh merek dan konten bersifat fiktif.</p>
          <p className="flex items-center gap-1.5">
            Concept demo — dibuat oleh{" "}
            <a
              href="https://github.com/Atazyyy"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 font-semibold text-bone/60 hover:text-bone"
            >
              <Github className="h-3.5 w-3.5" /> Agni Miftah Fauzi
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
