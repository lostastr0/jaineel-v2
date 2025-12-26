// src/app/page.tsx

import LogoMarquee from "@/components/LogoMarquee";

export default function Page() {
  return (
    <div id="top" className="w-full">
      {/* HERO */}
      <section className="pt-16 sm:pt-20">
        <div className="mx-auto w-full max-w-[900px] px-2 sm:px-0 text-center">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
            Open for opportunities
          </div>

          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white">
            I&apos;m Jaineel.
          </h1>

          <p className="mx-auto mt-4 max-w-[64ch] text-sm sm:text-base text-zinc-300">
            Cyber security student — learning by building projects and improving as I go.
          </p>

          <div className="mt-7 flex items-center justify-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full bg-sky-500 px-5 py-2.5 text-sm font-medium text-black hover:bg-sky-400 transition"
            >
              View projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-white hover:bg-white/10 transition"
            >
              Get in touch
            </a>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section id="projects" className="pt-10 sm:pt-12 pb-16">
        <div className="mx-auto w-full max-w-[900px] px-2 sm:px-0 space-y-6">
          {/* FEATURED — FIXED: bottom bar is no longer absolute, so no overlap on mobile */}
          <article
            className="
              relative
              flex flex-col
              w-full
              aspect-[2/1]
              lg:aspect-auto
              lg:w-[900px]
              lg:h-[450px]
              overflow-hidden
              rounded-3xl
              border border-white/10
              bg-gradient-to-br from-amber-900/30 via-black to-blue-900/30
              shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_20px_80px_rgba(0,0,0,0.65)]
            "
          >
            {/* subtle glow blobs */}
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-amber-500/10 blur-3xl" />
              <div className="absolute -right-40 -bottom-40 h-80 w-80 rounded-full bg-sky-500/10 blur-3xl" />
            </div>

            {/* header row */}
            <div className="relative z-10 flex items-center justify-between px-6 sm:px-8 pt-6 sm:pt-7">
              <div className="text-sm font-semibold text-white/90">Featured</div>
              <a
                href="#projects"
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200 hover:bg-white/10 transition"
              >
                Browse work
              </a>
            </div>

            {/* main content */}
            <div className="relative z-10 px-6 sm:px-8 pt-6 sm:pt-8">
              <div className="text-[11px] tracking-[0.22em] text-white/40">HIGHLIGHT</div>

              <h2 className="mt-2 text-3xl sm:text-4xl font-semibold tracking-tight text-white">
                Portfolio v2
              </h2>

              <p className="mt-3 max-w-[60ch] text-sm sm:text-base text-zinc-300">
                A product-style portfolio — curated projects, clean layout, and subtle motion.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {["Next.js", "TypeScript", "Tailwind", "Framer Motion"].map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* spacer pushes bottom bar down naturally */}
            <div className="flex-1" />

            {/* bottom bar (NOW in normal flow) */}
            <div className="relative z-10 border-t border-white/10 bg-black/20 backdrop-blur px-6 sm:px-8 py-4">
              <div className="flex items-center justify-between gap-4">
                <div className="min-w-0">
                  <div className="text-sm font-semibold text-white/90 truncate">
                    LostAstr0 Portfolio <span className="text-white/60">+</span>
                  </div>
                  <div className="text-xs text-zinc-400 truncate">
                    Updating as I ship — new sections, cleaner layout, better motion.
                  </div>
                </div>

                <a
                  href="#projects"
                  className="shrink-0 inline-flex items-center justify-center rounded-full bg-sky-500 px-5 py-2 text-sm font-medium text-black hover:bg-sky-400 transition"
                >
                  View projects
                </a>
              </div>
            </div>
          </article>

          {/* BELOW GRID — 40/60 on desktop, stacks on mobile */}
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
            {/* Focus (40%) */}
            <article
              className="
                lg:col-span-5
                rounded-3xl border border-white/10
                bg-white/[0.03]
                shadow-[0_0_0_1px_rgba(255,255,255,0.04)]
                overflow-hidden
              "
            >
              <div className="px-6 pt-5 pb-3">
                <div className="text-sm font-semibold text-white/90">Focus</div>
                <p className="mt-1 text-xs text-zinc-400">
                  The main thing I&apos;m working on right now.
                </p>
              </div>

              <div className="px-6 pb-4">
                <div className="h-[160px] lg:h-[180px] rounded-2xl border border-white/10 bg-gradient-to-br from-sky-500/15 via-black to-indigo-500/10" />
              </div>
            </article>

            {/* Toolbox (60%) */}
            <article
              className="
                lg:col-span-7
                rounded-3xl border border-white/10
                bg-white/[0.03]
                shadow-[0_0_0_1px_rgba(255,255,255,0.04)]
                overflow-hidden
              "
            >
              <div className="px-6 pt-5 pb-3">
                <div className="text-sm font-semibold text-white/90">Toolbox</div>
                <p className="mt-1 text-xs text-zinc-400">
                  Tools and platforms I&apos;m learning and using.
                </p>
              </div>

              <div className="px-4 pb-3">
                <LogoMarquee />
              </div>
            </article>
          </div>

          {/* Notes */}
          <section id="notes" className="pt-1">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] px-6 py-5 shadow-[0_0_0_1px_rgba(255,255,255,0.04)]">
              <div className="text-sm font-semibold text-white/90">Notes</div>
              <p className="mt-2 text-sm text-zinc-300">
                Learning notes, experiments, and things I don&apos;t want to forget.
              </p>
            </div>
          </section>

          {/* About */}
          <section id="about" className="pt-1">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] px-6 py-5 shadow-[0_0_0_1px_rgba(255,255,255,0.04)]">
              <div className="text-sm font-semibold text-white/90">About</div>
              <p className="mt-2 text-sm text-zinc-300">
                I&apos;m building skills in cyber security through hands-on projects, and documenting what I learn.
              </p>
            </div>
          </section>

          {/* Contact */}
          <section id="contact" className="pt-1">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] px-6 py-5 shadow-[0_0_0_1px_rgba(255,255,255,0.04)]">
              <div className="text-sm font-semibold text-white/90">Contact</div>
              <p className="mt-2 text-sm text-zinc-300">Add your links / email here.</p>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}
