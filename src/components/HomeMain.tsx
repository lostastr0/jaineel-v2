"use client";

import { motion } from "framer-motion";

export default function HomeMain() {
  return (
    <>
      <div id="top" />

      {/* HERO (UNBOXED + LOUD) */}
      <section className="pt-10 md:pt-14">
        <div className="relative">
          {/* small ambient glow behind headline */}
          <div className="pointer-events-none absolute -top-10 left-1/2 h-64 w-[680px] -translate-x-1/2 rounded-full bg-white/5 blur-3xl" />

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="relative text-center font-semibold tracking-tight leading-[0.92]
                       text-[clamp(2.8rem,5.2vw,4.6rem)]"
          >
            I’m LostAstr0.
            <span className="block text-zinc-300">A builder.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.08 }}
            className="mx-auto mt-4 max-w-2xl text-center text-sm md:text-base text-zinc-400"
          >
            Design-forward, calm, and intentional — a portfolio that presents work with presence.
          </motion.p>
        </div>

        {/* FEATURE CARD (SUPPORTING, NOT COMPETING) */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut", delay: 0.12 }}
          className="mt-10 overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur"
        >
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
            <div className="text-sm font-semibold">Featured</div>
            <a
              href="#projects"
              className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-zinc-200 hover:bg-white/15 transition"
            >
              Browse work
            </a>
          </div>

          <div className="grid gap-6 p-6 md:grid-cols-12 md:items-center">
            <div className="md:col-span-7">
              <div className="text-xs tracking-[0.22em] text-zinc-500">HIGHLIGHT</div>
              <div className="mt-2 text-2xl font-semibold">Portfolio v2</div>
              <p className="mt-2 text-zinc-400">
                The new layout is a product-style shell — designed to make projects feel curated,
                not listed.
              </p>

              <div className="mt-5 flex flex-wrap gap-2 text-xs text-zinc-300">
                {["Next.js", "TypeScript", "Tailwind", "Framer Motion"].map((t) => (
                  <span key={t} className="rounded-full border border-white/10 bg-black/20 px-3 py-1">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* preview panel (bigger + softer like reference) */}
            <div className="md:col-span-5">
              <div className="relative h-44 md:h-48 overflow-hidden rounded-2xl border border-white/10 bg-black/30">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.28),transparent_55%),radial-gradient(circle_at_70%_60%,rgba(99,102,241,0.26),transparent_55%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(0,0,0,0.35))]" />
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* GRID CARDS (more spacing, less “stacked”) */}
      <section className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <div className="text-sm font-semibold">Spotlight</div>
          <p className="mt-2 text-sm text-zinc-400">
            One standout project, updated as you ship.
          </p>

          <div className="mt-6 h-36 rounded-2xl border border-white/10 bg-black/20" />
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <div className="text-sm font-semibold">Toolbox</div>
          <p className="mt-2 text-sm text-zinc-400">
            Quick links and resources — clean and organised.
          </p>

          <div className="mt-6 grid grid-cols-4 gap-3 opacity-80">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="h-12 rounded-2xl border border-white/10 bg-black/20" />
            ))}
          </div>
        </div>
      </section>

      {/* projects anchor */}
      <div id="projects" className="mt-12 text-zinc-300">
        <div className="text-xs tracking-[0.22em] text-zinc-500">PROJECTS</div>
        <h2 className="mt-2 text-2xl font-semibold">Coming next</h2>
      </div>

      <div id="about" className="mt-10" />
      <div id="writeups" className="mt-10" />
      <div id="stack" className="mt-10" />
      <div id="contact" className="mt-10" />
    </>
  );
}
