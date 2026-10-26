import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  CalendarDays,
  CheckCircle2,
  MessageCircle,
  UserRound,
} from "lucide-react";
import {
  BARBERS,
  SERVICES,
  TIMES,
  WA_NUMBER,
  bookingCode,
  next7Days,
  rupiah,
  slotBooked,
} from "../data/barbershop";

const STEP_LABELS = ["Layanan", "Kapster", "Jadwal", "Data"];

export default function BookingFlow({ preService, onConsumePre }) {
  const [step, setStep] = useState(0);
  const [service, setService] = useState(null);
  const [barber, setBarber] = useState(null);
  const [date, setDate] = useState(null); // iso
  const [time, setTime] = useState(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [confirmation, setConfirmation] = useState(null);

  // kalau user klik "Pilih" dari section layanan
  if (preService && service?.id !== preService) {
    setService(SERVICES.find((s) => s.id === preService));
    onConsumePre();
    setStep((s) => Math.max(s, 1));
  }

  const days = next7Days();
  const canNext =
    (step === 0 && service) ||
    (step === 1 && barber) ||
    (step === 2 && date && time) ||
    (step === 3 && name.trim().length >= 2 && phone.trim().length >= 8);

  const confirm = () => {
    const code = bookingCode();
    const booking = {
      code,
      serviceId: service.id,
      barberId: barber.id,
      date,
      time,
      name: name.trim(),
      phone: phone.trim(),
      ts: Date.now(),
    };
    try {
      const list = JSON.parse(localStorage.getItem("barberlagi-bookings")) ?? [];
      localStorage.setItem(
        "barberlagi-bookings",
        JSON.stringify([...list, booking])
      );
    } catch {
      /* abaikan */
    }
    setConfirmation(booking);
  };

  const reset = () => {
    setStep(0);
    setService(null);
    setBarber(null);
    setDate(null);
    setTime(null);
    setName("");
    setPhone("");
    setConfirmation(null);
  };

  const waLink = (b) => {
    const d = days.find((x) => x.iso === b.date);
    const text = encodeURIComponent(
      `Halo BarberLagi! Booking saya:\n- Layanan: ${SERVICES.find((s) => s.id === b.serviceId).name}\n- Kapster: ${BARBERS.find((x) => x.id === b.barberId).name}\n- Jadwal: ${d ? d.dateLabel : b.date}, ${b.time}\n- Atas nama: ${b.name}\n- Kode: ${b.code}\n\nMohon konfirmasinya ya, terima kasih!`
    );
    return `https://wa.me/${WA_NUMBER}?text=${text}`;
  };

  return (
    <section id="booking" className="scroll-mt-20 bg-ash py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <div className="text-center">
          <p className="font-display text-xs font-semibold uppercase tracking-[0.4em] text-gold">
            Booking
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold uppercase md:text-5xl">
            Kunci <span className="text-gold">kursimu</span>
          </h2>
        </div>

        {confirmation ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-12 rounded-2xl border border-gold/30 bg-coal p-8 text-center md:p-10"
          >
            <CheckCircle2 className="mx-auto h-14 w-14 text-gold" />
            <h3 className="mt-5 font-display text-3xl font-bold uppercase">
              Booking Tercatat!
            </h3>
            <p className="mt-2 font-display text-lg tracking-[0.3em] text-gold">
              {confirmation.code}
            </p>
            <div className="mx-auto mt-6 max-w-sm space-y-2 rounded-xl bg-smoke p-5 text-left text-sm">
              <p className="flex justify-between gap-4">
                <span className="text-bone/50">Layanan</span>
                <span className="font-semibold text-right">
                  {SERVICES.find((s) => s.id === confirmation.serviceId).name}
                </span>
              </p>
              <p className="flex justify-between gap-4">
                <span className="text-bone/50">Kapster</span>
                <span className="font-semibold">
                  {BARBERS.find((x) => x.id === confirmation.barberId).name}
                </span>
              </p>
              <p className="flex justify-between gap-4">
                <span className="text-bone/50">Jadwal</span>
                <span className="font-semibold">
                  {days.find((x) => x.iso === confirmation.date)?.dateLabel},{" "}
                  {confirmation.time}
                </span>
              </p>
              <p className="flex justify-between gap-4">
                <span className="text-bone/50">Atas nama</span>
                <span className="font-semibold">{confirmation.name}</span>
              </p>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href={waLink(confirmation)}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-full bg-[#25d366] px-6 py-3 text-sm font-bold text-white"
              >
                <MessageCircle className="h-4 w-4" />
                Konfirmasi via WhatsApp
              </a>
              <button
                onClick={reset}
                className="rounded-full border border-bone/25 px-6 py-3 text-sm font-semibold hover:bg-bone/10"
              >
                Buat Booking Lagi
              </button>
            </div>
          </motion.div>
        ) : (
          <div className="mt-12 rounded-2xl border border-bone/10 bg-coal p-6 md:p-10">
            {/* Stepper */}
            <div className="flex items-center">
              {STEP_LABELS.map((label, i) => (
                <div key={label} className="flex flex-1 items-center last:flex-none">
                  <div className="flex flex-col items-center gap-1.5">
                    <div
                      className={`flex h-9 w-9 items-center justify-center rounded-full font-display text-sm font-bold transition-colors ${
                        i < step
                          ? "bg-gold text-coal"
                          : i === step
                            ? "border-2 border-gold text-gold"
                            : "border border-bone/20 text-bone/35"
                      }`}
                    >
                      {i < step ? <BadgeCheck className="h-4 w-4" /> : i + 1}
                    </div>
                    <span
                      className={`hidden text-[10px] font-bold uppercase tracking-wider sm:block ${
                        i <= step ? "text-bone" : "text-bone/35"
                      }`}
                    >
                      {label}
                    </span>
                  </div>
                  {i < STEP_LABELS.length - 1 && (
                    <div
                      className={`mx-2 mb-5 h-0.5 flex-1 rounded ${
                        i < step ? "bg-gold" : "bg-bone/15"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>

            <div className="mt-8 min-h-[300px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -24 }}
                  transition={{ duration: 0.25 }}
                >
                  {step === 0 && (
                    <div className="grid gap-3 sm:grid-cols-2">
                      {SERVICES.map((s) => (
                        <button
                          key={s.id}
                          onClick={() => setService(s)}
                          className={`rounded-xl border p-4 text-left transition-colors ${
                            service?.id === s.id
                              ? "border-gold bg-gold/10"
                              : "border-bone/10 hover:border-bone/30"
                          }`}
                        >
                          <p className="font-display font-semibold uppercase">
                            {s.name}
                          </p>
                          <p className="mt-1 text-xs text-bone/50">
                            {rupiah(s.price)} · {s.duration} menit
                          </p>
                        </button>
                      ))}
                    </div>
                  )}

                  {step === 1 && (
                    <div className="grid gap-3 sm:grid-cols-2">
                      {BARBERS.map((b) => (
                        <button
                          key={b.id}
                          onClick={() => setBarber(b)}
                          className={`flex items-center gap-4 rounded-xl border p-4 text-left transition-colors ${
                            barber?.id === b.id
                              ? "border-gold bg-gold/10"
                              : "border-bone/10 hover:border-bone/30"
                          }`}
                        >
                          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-smoke font-display text-sm font-bold text-gold">
                            {b.initials}
                          </span>
                          <span>
                            <span className="block font-display font-semibold uppercase">
                              {b.name}
                            </span>
                            <span className="block text-xs text-bone/50">
                              {b.alias}
                            </span>
                          </span>
                        </button>
                      ))}
                    </div>
                  )}

                  {step === 2 && (
                    <div>
                      <p className="flex items-center gap-2 text-sm font-semibold text-bone/70">
                        <CalendarDays className="h-4 w-4 text-gold" /> Pilih
                        tanggal
                      </p>
                      <div className="mt-3 grid grid-cols-4 gap-2 sm:grid-cols-7">
                        {days.map((d) => (
                          <button
                            key={d.iso}
                            onClick={() => {
                              setDate(d.iso);
                              setTime(null);
                            }}
                            className={`rounded-xl border px-2 py-3 text-center transition-colors ${
                              date === d.iso
                                ? "border-gold bg-gold/10"
                                : "border-bone/10 hover:border-bone/30"
                            }`}
                          >
                            <span className="block font-display text-xs font-bold uppercase text-gold">
                              {d.dayLabel}
                            </span>
                            <span className="mt-0.5 block text-xs text-bone/70">
                              {d.dateLabel}
                            </span>
                          </button>
                        ))}
                      </div>

                      <p className="mt-6 flex items-center gap-2 text-sm font-semibold text-bone/70">
                        <UserRound className="h-4 w-4 text-gold" /> Pilih jam
                      </p>
                      <div className="mt-3 grid grid-cols-4 gap-2 sm:grid-cols-6">
                        {TIMES.map((t) => {
                          const taken = date && slotBooked(date, t, barber?.id ?? "any");
                          return (
                            <button
                              key={t}
                              disabled={!date || taken}
                              onClick={() => setTime(t)}
                              className={`rounded-lg border py-2.5 text-xs font-semibold transition-colors ${
                                time === t
                                  ? "border-gold bg-gold text-coal"
                                  : taken
                                    ? "cursor-not-allowed border-bone/5 text-bone/20 line-through"
                                    : date
                                      ? "border-bone/15 hover:border-bone/40"
                                      : "cursor-not-allowed border-bone/10 text-bone/30"
                              }`}
                            >
                              {t}
                            </button>
                          );
                        })}
                      </div>
                      {date && (
                        <p className="mt-3 text-xs text-bone/40">
                          Jam yang dicoret sudah penuh. Pilih yang lain ya.
                        </p>
                      )}
                    </div>
                  )}

                  {step === 3 && (
                    <div className="space-y-4">
                      <div>
                        <label className="text-xs font-bold uppercase tracking-wider text-bone/50">
                          Nama
                        </label>
                        <input
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Nama kamu"
                          className="mt-1.5 w-full rounded-xl border border-bone/15 bg-smoke px-4 py-3 text-sm outline-none focus:border-gold"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-bold uppercase tracking-wider text-bone/50">
                          No. WhatsApp
                        </label>
                        <input
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="08xxxxxxxxxx"
                          inputMode="tel"
                          className="mt-1.5 w-full rounded-xl border border-bone/15 bg-smoke px-4 py-3 text-sm outline-none focus:border-gold"
                        />
                      </div>
                      <div className="rounded-xl bg-smoke p-4 text-sm">
                        <p className="font-display font-bold uppercase text-gold">
                          Ringkasan
                        </p>
                        <p className="mt-2 text-bone/75">
                          {service?.name} · {barber?.name}
                        </p>
                        <p className="text-bone/75">
                          {days.find((x) => x.iso === date)?.dateLabel},{" "}
                          {time} — {rupiah(service?.price ?? 0)}
                        </p>
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigasi */}
            <div className="mt-8 flex items-center justify-between border-t border-bone/10 pt-6">
              <button
                onClick={() => setStep((s) => Math.max(0, s - 1))}
                disabled={step === 0}
                className="flex items-center gap-2 rounded-full border border-bone/20 px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-bone/10 disabled:opacity-30"
              >
                <ArrowLeft className="h-4 w-4" /> Kembali
              </button>
              {step < 3 ? (
                <button
                  onClick={() => setStep((s) => s + 1)}
                  disabled={!canNext}
                  className="flex items-center gap-2 rounded-full bg-gold px-6 py-2.5 font-display text-sm font-bold uppercase tracking-wider text-coal transition-all hover:brightness-110 disabled:opacity-30"
                >
                  Lanjut <ArrowRight className="h-4 w-4" />
                </button>
              ) : (
                <button
                  onClick={confirm}
                  disabled={!canNext}
                  className="flex items-center gap-2 rounded-full bg-gold px-6 py-2.5 font-display text-sm font-bold uppercase tracking-wider text-coal transition-all hover:brightness-110 disabled:opacity-30"
                >
                  Konfirmasi Booking <BadgeCheck className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
