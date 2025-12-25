"use client";

import { motion } from "framer-motion";
import Container from "@/components/Container";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      {/* background texture */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(circle_at_20%_15%,white_1px,transparent_1px)] bg-[size:18px_18px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_10%,rgba(255,255,255,0.08),transparent_40%),radial-gradient(circle_at_20%_80%,rgba(255,255,255,0.05),transparent_45%)]" />
      </div>

      {/* moving cutline */}
      <motion.div
        className="pointer-events-none absolute -left-1/2 top-24 h-px w-[200%] bg-white/15"
        initial={{ x: -120 }}
        animate={{ x: 120 }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <Container>
        <div className="relative">
          {/* rotated label (norm-break) */}
          <div className="absolute -left-10 top-10 hidden md:block">
            <div className="-rotate-90 origin-left text-xs tracking-[0.35em] text-zinc-400">
              PORTFOLIO / V2 / SIGNAL
            </div>
          </div>

          {/* top meta row */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="flex flex-wrap items-center justify-between gap-3"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300">
              <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
              LostAstr0
            </div>

            <div className="text-xs text-zinc-400">
              built with Next.js • TS • Tailwind • Motion
            </div>
          </motion.div>

          {/* deconstructed headline */}
          <div className="mt-10 md:mt-14">
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative font-semibold tracking-tight leading-[0.9]"
            >
              {/* line 1 */}
              <span className="block text-[clamp(3.2rem,8vw,6.6rem)]">
                NOT
              </span>

              {/* line 2 with “bleed” */}
              <span className="block text-[clamp(3.2rem,8vw,6.6rem)] text-zinc-300">
                USUAL
              </span>

              {/* ghost oversized layer behind */}
              <span className="pointer-events-none absolute -top-10 left-0 hidden md:block select-none text-[7.5rem] text-white/[0.03]">
                LOSTASTR0
              </span>
            </motion.h1>

            {/* subcopy + actions */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.08 }}
              className="mt-8 grid gap-6 md:grid-cols-12 md:items-end"
            >
              <p className="md:col-span-7 max-w-xl text-zinc-400 leading-relaxed">
                A portfolio that behaves like a design piece—bold typography, intentional
                structure, and motion that feels earned. The content explains the story;
                the visuals just hit.
              </p>

              <div className="md:col-span-5 flex flex-wrap gap-3 md:justify-end">
                <a
                  href="#projects"
                  className="group relative overflow-hidden rounded-2xl border border-white/15 bg-white text-zinc-950 px-5 py-3 text-sm font-medium transition"
                >
                  <span className="relative z-10">View work</span>
                  <span className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-[radial-gradient(circle_at_30%_20%,rgba(0,0,0,0.14),transparent_55%)]" />
                </a>

                <a
                  href="#contact"
                  className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm text-zinc-100 hover:bg-white/10 transition"
                >
                  Contact
                </a>
              </div>
            </motion.div>
          </div>

          {/* bottom “break the norm” strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-14 rounded-3xl border border-white/10 bg-white/5 p-5"
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="text-xs text-zinc-400">
                Scroll ↓
              </div>
              <div className="flex flex-wrap gap-2">
                {["Design-led", "Motion-light", "High-signal"].map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-zinc-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
