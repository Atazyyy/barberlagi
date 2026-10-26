import { Scissors, Sparkles, Baby, PenTool, Droplets, UserRound } from "lucide-react";
import Reveal from "./Reveal";
import { SERVICES, rupiah } from "../data/barbershop";

const ICONS = [Scissors, Sparkles, Scissors, Baby, PenTool, Droplets];

export default function Services({ onPick }) {
  return (
    <section id="layanan" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <p className="font-display text-xs font-semibold uppercase tracking-[0.4em] text-gold">
            Layanan
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold uppercase leading-tight md:text-5xl">
            Pilih gaya, <span className="text-gold">kami kerjakan</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => {
            const Icon = ICONS[i];
            return (
              <Reveal key={s.id} delay={i * 0.05}>
                <div className="group flex h-full flex-col rounded-2xl border border-bone/10 bg-ash p-6 transition-colors hover:border-gold/40">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-smoke">
                    <Icon className="h-5 w-5 text-gold" />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-semibold uppercase">
                    {s.name}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-bone/55">
                    {s.desc}
                  </p>
                  <div className="mt-5 flex items-center justify-between border-t border-bone/10 pt-4">
                    <div>
                      <p className="font-display text-lg font-bold text-gold">
                        {rupiah(s.price)}
                      </p>
                      <p className="text-xs text-bone/45">± {s.duration} menit</p>
                    </div>
                    <button
                      onClick={() => onPick(s.id)}
                      className="rounded-full border border-gold/50 px-5 py-2 font-display text-xs font-bold uppercase tracking-wider text-gold transition-colors hover:bg-gold hover:text-coal"
                    >
                      Pilih
                    </button>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
