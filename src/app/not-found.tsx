"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        {/* base */}
        <div className="absolute inset-0 bg-[rgb(var(--bg))]" />

        {/* soft vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(1200px_700px_at_50%_20%,rgba(255,255,255,0.06),transparent_62%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(900px_520px_at_50%_110%,rgba(0,0,0,0.55),transparent_60%)]" />

        {/* subtle corner glows */}
        <div className="absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full bg-sky-500/10 blur-[120px]" />
        <div className="absolute -right-48 -bottom-52 h-[620px] w-[620px] rounded-full bg-white/5 blur-[140px]" />

        {/* faint grain */}
        <div className="nf-grain absolute inset-0 opacity-[0.08] mix-blend-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1100px] items-center px-4 xl:px-8">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="w-full"
        >
          <div className="mx-auto w-full max-w-[920px]">
            {/* Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.45, ease: "easeOut", delay: 0.05 }}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] shadow-[0_0_0_1px_rgba(255,255,255,0.04)]"
            >
              {/* hairline */}
              <div className="pointer-events-none absolute left-6 right-6 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

              <div className="p-6 sm:p-8">
                {/* status */}
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    Lost route detected
                  </div>
                  <div className="text-xs text-white/40">
                    Error <span className="text-white/60">404</span>
                  </div>
                </div>

                {/* main */}
                <div className="mt-6 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
                  <div>
                    <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
                      This page doesn&apos;t exist.
                    </h1>

                    <p className="mt-3 max-w-[70ch] text-sm sm:text-base text-zinc-200/90 leading-relaxed">
                      You may have followed an old link, mistyped the URL, or the page
                      moved. No stress — you can jump back to the main areas below.
                    </p>

                    {/* actions */}
                    <div className="mt-6 flex flex-wrap items-center gap-3">
                      <Link
                        href="/"
                        className="inline-flex items-center justify-center rounded-full bg-sky-500 px-5 py-2.5 text-sm font-medium text-black hover:bg-sky-400 transition"
                      >
                        Go home
                      </Link>

                      <Link
                        href="/projects"
                        className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-white hover:bg-white/10 hover:border-white/15 transition"
                      >
                        View projects
                      </Link>
                    </div>

                    {/* signal */}
                    <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                      <div className="flex items-center justify-between text-xs text-zinc-400">
                        <span className="text-white/70">Signal</span>
                        <span className="font-mono text-white/35">/not-found</span>
                      </div>

                      <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-white/[0.06]">
                        <div className="nf-bar h-full w-[72%] rounded-full bg-sky-500/80" />
                      </div>

                      <div className="mt-2 text-xs text-zinc-400">
                        Route lookup failed. Redirecting options available.
                      </div>
                    </div>
                  </div>

                  {/* quick links */}
                  <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.04)]">
                    <div className="text-sm font-semibold text-white/90">
                      Quick links
                    </div>
                    <div className="mt-1 text-[11px] tracking-[0.18em] text-white/40">
                      GET BACK ON TRACK
                    </div>

                    <div className="mt-4 space-y-2">
                      {[
                        { href: "/", label: "Home", hint: "Main landing page" },
                        { href: "/projects", label: "Projects", hint: "Everything I’m building" },
                        { href: "/about", label: "About", hint: "What I’m focusing on" },
                        { href: "/contact", label: "Contact", hint: "How to reach me" },
                      ].map((x) => (
                        <Link
                          key={x.href}
                          href={x.href}
                          className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 hover:bg-white/[0.04] hover:border-white/15 transition"
                        >
                          <div>
                            <div className="text-sm text-white/90">{x.label}</div>
                            <div className="text-xs text-zinc-400">{x.hint}</div>
                          </div>
                          <span className="text-white/25 group-hover:text-white/45 transition">
                            →
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* footer */}
              <div className="border-t border-white/10 px-6 py-4 text-xs text-white/35 sm:px-8">
                © {new Date().getFullYear()}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* animations */}
      <style jsx global>{`
        .nf-bar {
          animation: nfPulse 2.8s ease-in-out infinite;
        }
        @keyframes nfPulse {
          0%,
          100% {
            filter: brightness(1);
          }
          50% {
            filter: brightness(1.15);
          }
        }

        .nf-grain {
          background-image:
            radial-gradient(rgba(255,255,255,0.35) 1px, transparent 1px),
            radial-gradient(rgba(255,255,255,0.2) 1px, transparent 1px),
            radial-gradient(rgba(0,0,0,0.35) 1px, transparent 1px);
          background-size: 80px 80px, 120px 120px, 140px 140px;
          background-position: 0 0, 40px 30px, 70px 90px;
        }
      `}</style>
    </div>
  );
}
