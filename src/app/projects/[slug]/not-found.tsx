// src/app/projects/[slug]/not-found.tsx

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { PROJECTS } from "@/data/projects";

export default function NotFound() {
  const suggestions = PROJECTS.slice(0, 4);

  return (
    <div className="relative w-full">
      {/* subtle page glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-220px] h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-sky-500/10 blur-3xl" />
        <div className="absolute left-[10%] top-[240px] h-[420px] w-[420px] rounded-full bg-amber-500/10 blur-3xl" />
      </div>

      <section className="mx-auto w-full max-w-[980px] px-2 sm:px-0 pt-10 sm:pt-12 pb-16">
        <div className="mx-auto max-w-[720px]">
          {/* hero card */}
          <div
            className="
              relative overflow-hidden rounded-3xl border border-white/10
              bg-gradient-to-br from-white/[0.06] via-black/40 to-white/[0.03]
              shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_20px_80px_rgba(0,0,0,0.55)]
            "
          >
            {/* animated sweep highlight */}
            <motion.div
              aria-hidden
              className="
                pointer-events-none absolute -inset-y-24 -left-40 w-[320px]
                rotate-12 bg-gradient-to-r from-transparent via-white/8 to-transparent
                blur-xl
              "
              initial={{ x: -240, opacity: 0 }}
              animate={{ x: 980, opacity: [0, 1, 0] }}
              transition={{
                duration: 3.6,
                repeat: Infinity,
                ease: "easeInOut",
                repeatDelay: 1.2,
              }}
            />

            <div className="p-6 sm:p-8">
              <div className="flex items-center gap-2">
                {/* 🔴 RED ERROR DOT (only change) */}
                <motion.span
                  className="
                    h-2 w-2 rounded-full
                    bg-red-500
                    shadow-[0_0_18px_rgba(239,68,68,0.6)]
                  "
                  animate={{
                    scale: [1, 1.25, 1],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 1.6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <div className="text-[11px] tracking-[0.22em] text-white/40">
                  404 — NOT FOUND
                </div>
              </div>

              <h1 className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight text-white">
                That project doesn’t exist (yet).
              </h1>

              <p className="mt-3 text-sm sm:text-base text-zinc-300">
                The link might be wrong, or I haven’t published that project page.
                Pick one below or head back to the Projects list.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/projects"
                  className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-zinc-200 hover:bg-white/10 transition"
                >
                  ← Back to Projects
                </Link>
                <Link
                  href="/"
                  className="rounded-full bg-sky-500 px-5 py-2 text-sm font-medium text-black hover:bg-sky-400 transition"
                >
                  Home
                </Link>
              </div>
            </div>

            {/* bottom bar */}
            <div className="border-t border-white/10 bg-black/20 backdrop-blur px-6 sm:px-8 py-4">
              <div className="text-xs uppercase tracking-wider text-zinc-500">
                Try these
              </div>

              <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {suggestions.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/projects/${p.slug}`}
                    className="
                      group flex items-center justify-between
                      rounded-2xl border border-white/10 bg-white/5
                      px-4 py-3 text-sm text-zinc-200
                      hover:bg-white/10 transition
                    "
                  >
                    <span className="min-w-0 truncate">{p.title}</span>
                    <span className="text-white/35 group-hover:text-white/55">
                      ↗
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <p className="mt-6 text-xs text-zinc-500">
            If you typed the URL manually, check the slug (example:{" "}
            <span className="text-zinc-300">/projects/portfolio-v2</span>).
          </p>
        </div>
      </section>
    </div>
  );
}
