// src/app/page.tsx
import LogoMarquee from "@/components/LogoMarquee";

export default function Page() {
  const primaryBtn =
    "inline-flex items-center justify-center rounded-full bg-sky-500 px-5 py-2.5 text-sm font-medium text-black hover:bg-sky-400 transition";
  const secondaryBtn =
    "inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-white hover:bg-white/10 hover:border-white/15 transition";

  const pill =
    "rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200";

  const cardBase =
    "rounded-3xl border border-white/10 bg-white/[0.03] shadow-[0_0_0_1px_rgba(255,255,255,0.04)] overflow-hidden transition duration-200 hover:-translate-y-[1px] hover:border-white/15 hover:bg-white/[0.04]";

  const miniCard = "rounded-2xl border border-white/10 bg-white/[0.03] p-4";

  return (
    <div id="top" className="w-full">
      {/* HERO */}
      <section className="pt-10 sm:pt-12">
        {/* No outer container here — Shell already provides max width + padding */}
        <div className="text-center">
          <div className="mx-auto max-w-[880px]">
            <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Open for opportunities
            </div>

            <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white">
              I&apos;m Jaineel.
            </h1>

            <p className="mx-auto mt-4 max-w-[70ch] text-sm sm:text-base text-zinc-200/90 leading-relaxed">
              Cyber security student — learning by building projects and improving as I go.
            </p>

            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <a href="/projects" className={primaryBtn}>
                View projects
              </a>

              <a href="#contact" className={secondaryBtn}>
                Get in touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* GRID WRAPPER */}
      <section className="pt-8 sm:pt-10 pb-16">
        {/* No outer container here either */}
        <div className="space-y-4 sm:space-y-6">
          {/* FEATURED */}
          <article
            className={[
              "group relative w-full",
              "rounded-3xl border border-white/10 bg-white/[0.03]",
              "shadow-[0_0_0_1px_rgba(255,255,255,0.04)]",
              "overflow-hidden flex flex-col min-h-[300px] sm:min-h-[360px] lg:min-h-[420px]",
              "transition duration-200 hover:-translate-y-[1px] hover:border-white/15 hover:bg-white/[0.04]",
            ].join(" ")}
          >
            {/* subtle wash + top hairline */}
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute left-6 right-6 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-br from-sky-500/[0.05] via-transparent to-transparent" />
              <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/[0.03] to-transparent" />
            </div>

            <div className="relative z-10 flex flex-1 flex-col px-6 pt-6 sm:px-8 sm:pt-7">
              <div className="flex items-center justify-between">
                <div className="text-sm font-semibold text-white/90">Featured</div>

                <a
                  href="/projects"
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200 hover:bg-white/10 hover:border-white/15 transition"
                >
                  Browse work
                </a>
              </div>

              <div className="pt-6 sm:pt-10">
                <div className="inline-flex items-center gap-2">
                  <div className="text-[11px] tracking-[0.22em] text-white/40">
                    HIGHLIGHT
                  </div>
                  <span className="h-[3px] w-[3px] rounded-full bg-white/25" />
                  <span className="text-[11px] tracking-[0.18em] text-white/30">
                    PROJECT
                  </span>
                </div>

                <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-white">
                  Password Strength Checker
                </h2>

                <p className="mt-3 max-w-[62ch] text-sm sm:text-base text-zinc-200/90 leading-relaxed">
                  A Python tool that checks password strength and highlights weak patterns.
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {["Python", "CLI", "Security"].map((t) => (
                    <span key={t} className={pill}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex-1" />
            </div>

            {/* bottom bar */}
            <div className="relative z-10 border-t border-white/10 bg-gradient-to-b from-black/10 to-black/25 backdrop-blur px-6 py-4 sm:px-8">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                <div className="min-w-0">
                  <div className="text-sm font-semibold text-white/90 truncate">
                    View the project page
                  </div>
                  <div className="text-xs text-zinc-400 truncate">
                    Write-up + usage + what I learned building it.
                  </div>
                </div>

                <a href="/projects" className={primaryBtn}>
                  View projects
                </a>
              </div>
            </div>
          </article>

          {/* BELOW GRID */}
          <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-10">
            {/* Focus */}
            <article className={`lg:col-span-4 ${cardBase}`}>
              <div className="p-6">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-sm font-semibold text-white/90">Focus</div>
                    <div className="mt-1 text-[11px] tracking-[0.18em] text-white/40">
                      RIGHT NOW
                    </div>
                  </div>

                  <span className={pill}>Jan 2026</span>
                </div>

                <p className="mt-3 text-sm text-zinc-200/90 leading-relaxed">
                  Building solid fundamentals and shipping small, real projects while I study cyber security.
                </p>

                <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <div className="flex items-center justify-between text-xs text-zinc-300">
                    <span className="text-white/80">Currently</span>
                    <span className="text-zinc-400">3 items</span>
                  </div>
                  <div className="mt-3 h-2 w-full rounded-full bg-white/[0.06] overflow-hidden">
                    <div className="h-full w-[62%] rounded-full bg-sky-500/80" />
                  </div>
                  <div className="mt-2 text-xs text-zinc-400">
                    Portfolio polish • Password tool write-up • Cert IV notes
                  </div>
                </div>
              </div>

              <div className="px-6 pb-6">
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <ul className="space-y-3">
                    <li className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-sky-400" />
                      <div className="min-w-0">
                        <div className="text-sm font-medium text-white/90">
                          Portfolio v2 polish
                        </div>
                        <div className="text-xs text-zinc-400">
                          Layout consistency, light mode, spacing, and card styling.
                        </div>
                      </div>
                    </li>

                    <li className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      <div className="min-w-0">
                        <div className="text-sm font-medium text-white/90">
                          Password Strength Checker
                        </div>
                        <div className="text-xs text-zinc-400">
                          Improve UX + add write-up with what I learned.
                        </div>
                      </div>
                    </li>

                    <li className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/25" />
                      <div className="min-w-0">
                        <div className="text-sm font-medium text-white/90">
                          Cert IV notes + labs
                        </div>
                        <div className="text-xs text-zinc-400">
                          Documenting study outputs and practical exercises.
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="mt-4">
                  <a href="/projects" className={secondaryBtn}>
                    See what I&apos;m building →
                  </a>
                </div>
              </div>
            </article>

            {/* Toolbox */}
            <article className={`lg:col-span-6 ${cardBase}`}>
              <div className="p-6">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-sm font-semibold text-white/90">Toolbox</div>
                    <div className="mt-1 text-[11px] tracking-[0.18em] text-white/40">
                      STACK &amp; TOOLS
                    </div>
                  </div>

                  <a
                    href="/projects"
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200 hover:bg-white/10 hover:border-white/15 transition"
                  >
                    View projects
                  </a>
                </div>

                <p className="mt-3 text-sm text-zinc-200/90 leading-relaxed">
                  Tools and platforms I&apos;m learning and using across projects.
                </p>
              </div>

              <div className="px-6 pb-6">
                <div className="rounded-2xl border border-white/10 bg-white/[0.03]">
                  <div className="px-3 sm:px-4 pt-3 sm:pt-4">
                    <LogoMarquee />
                  </div>

                  <div className="mt-3 border-t border-white/10 px-4 py-4">
                    <div className="grid gap-3 sm:grid-cols-2">
                      <div className={miniCard}>
                        <div className="text-[11px] tracking-[0.18em] text-white/40">
                          LANGUAGES
                        </div>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {["Python", "TypeScript", "JavaScript", "Bash"].map((t) => (
                            <span key={t} className={pill}>
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className={miniCard}>
                        <div className="text-[11px] tracking-[0.18em] text-white/40">
                          PLATFORMS
                        </div>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {["Next.js", "Tailwind", "Linux", "Git/GitHub"].map((t) => (
                            <span key={t} className={pill}>
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4 px-4 pb-4">
                    <p className="text-xs text-zinc-400">
                      Want the full stack list? It&apos;s on the projects page.
                    </p>
                    <a
                      href="/projects"
                      className="inline-flex items-center justify-center rounded-full bg-sky-500 px-5 py-2 text-sm font-medium text-black hover:bg-sky-400 transition"
                    >
                      Browse work
                    </a>
                  </div>
                </div>
              </div>
            </article>
          </div>

          {/* ABOUT */}
          <section id="about" className="pt-2">
            <div className={cardBase}>
              <div className="p-6">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-sm font-semibold text-white/90">About</div>
                    <div className="mt-1 text-[11px] tracking-[0.18em] text-white/40">
                      WHO I AM
                    </div>
                  </div>

                  <span className={pill}>LostAstr0</span>
                </div>

                <p className="mt-3 text-sm sm:text-base text-zinc-200/90 leading-relaxed">
                  I&apos;m building my cyber security skills through hands-on projects, documenting what I learn, and
                  keeping things practical — tools, write-ups, and clear outcomes.
                </p>
              </div>

              <div className="px-6 pb-6">
                <div className="grid gap-3 sm:grid-cols-3">
                  <div className={miniCard}>
                    <div className="text-sm font-semibold text-white/90">Projects-first</div>
                    <div className="mt-1 text-xs text-zinc-400">
                      I learn by building small things and iterating.
                    </div>
                  </div>

                  <div className={miniCard}>
                    <div className="text-sm font-semibold text-white/90">Documented</div>
                    <div className="mt-1 text-xs text-zinc-400">
                      Write-ups, notes, and what I learned.
                    </div>
                  </div>

                  <div className={miniCard}>
                    <div className="text-sm font-semibold text-white/90">Consistent</div>
                    <div className="mt-1 text-xs text-zinc-400">
                      Clean UI + reliable code + steady progress.
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <a href="/projects" className={secondaryBtn}>
                    Read the write-ups →
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* CONTACT */}
          <section id="contact" className="pt-2">
            <div className={cardBase}>
              <div className="p-6">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-sm font-semibold text-white/90">Contact</div>
                    <div className="mt-1 text-[11px] tracking-[0.18em] text-white/40">
                      LET&apos;S TALK
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200">
                    <span className="h-1.5 w-1.5 rounded-full bg-orange-400" />
                    Paused
                  </span>
                </div>

                <p className="mt-3 text-sm text-zinc-200/90 leading-relaxed">
                  Best way to reach me is email. You can also find my work and updates on GitHub / LinkedIn.
                </p>
              </div>

              <div className="px-6 pb-6">
                <div className="flex flex-wrap gap-3">
                  <a href="mailto:you@example.com" className={primaryBtn}>
                    Email me
                  </a>
                  <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noreferrer"
                    className={secondaryBtn}
                  >
                    GitHub
                  </a>
                  <a
                    href="https://linkedin.com/"
                    target="_blank"
                    rel="noreferrer"
                    className={secondaryBtn}
                  >
                    LinkedIn
                  </a>
                </div>

                <p className="mt-4 text-xs text-zinc-500">
                  Tip: replace the links above with your real profiles.
                </p>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}
