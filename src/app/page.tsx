import Shell from "@/components/Shell";

export default function Home() {
  return (
    <Shell>
      {/* PAGE BACKGROUND FX */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-260px] h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.16),rgba(0,0,0,0)_60%)] blur-2xl" />
        <div className="absolute right-[-260px] top-[80px] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.12),rgba(0,0,0,0)_62%)] blur-2xl" />
        <div className="absolute inset-0 bg-[radial-gradient(1200px_700px_at_50%_0%,rgba(255,255,255,0.035),rgba(0,0,0,0)_60%)]" />
        <div className="absolute inset-0 opacity-[0.06] mix-blend-overlay [background-image:url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22160%22 height=%22160%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22160%22 height=%22160%22 filter=%22url(%23n)%22 opacity=%220.4%22/%3E%3C/svg%3E')]" />
      </div>

      {/* HERO (tighter) */}
      <section className="mx-auto max-w-4xl text-center pt-2">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300 backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          Open for opportunities
        </div>

        <h1 className="mt-5 text-balance text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
          I’m Jaineel.
          <br />
          <span className="bg-gradient-to-b from-zinc-100 to-zinc-400 bg-clip-text text-transparent">
            Studying cyber security, moving toward computer science.
          </span>
        </h1>

        <p className="mx-auto mt-3 max-w-[62ch] text-pretty text-sm sm:text-base text-zinc-300/90">
          I build clean, calm interfaces with strong structure — learning through
          real projects, tight typography, and subtle motion.
        </p>

        <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="#projects"
            className="w-full sm:w-auto rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-zinc-950 hover:opacity-90 transition"
          >
            View projects
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-zinc-100 hover:bg-white/10 transition backdrop-blur"
          >
            Get in touch
          </a>
        </div>
      </section>

      {/* CONTENT (tighter stack) */}
      <section className="mt-8 space-y-4 md:space-y-5">
        {/* FEATURED (less padding + capped media height) */}
        <div className="relative rounded-3xl border border-white/10 bg-white/[0.04] p-4 sm:p-5 backdrop-blur shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_18px_50px_rgba(0,0,0,0.55)]">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-20 rounded-3xl bg-[radial-gradient(700px_120px_at_50%_0%,rgba(255,255,255,0.07),rgba(0,0,0,0))]" />

          <div className="relative flex items-center justify-between">
            <div className="text-sm font-semibold text-zinc-100">Featured</div>
            <button className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-zinc-200 hover:bg-white/10 transition">
              Browse work
            </button>
          </div>

          <div className="mt-3 h-px w-full bg-white/10" />

          {/* MEDIA (capped) */}
          <div className="mt-3 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
            {/* This wrapper caps height so it can’t get huge */}
            <div className="relative w-full max-h-[360px] md:max-h-[420px] overflow-hidden">
              {/* Keeps shape but doesn’t blow up */}
              <div className="aspect-[16/7] md:aspect-[16/6] w-full bg-gradient-to-br from-orange-500/28 via-zinc-950 to-cyan-500/22" />

              {/* overlays */}
              <div className="hidden sm:block absolute inset-y-0 left-0 w-[46%] md:w-[40%] bg-black/65 backdrop-blur-sm">
                <div className="flex h-full flex-col justify-end p-4 md:p-5">
                  <div className="text-2xl md:text-3xl font-semibold leading-tight">
                    Gallery
                    <br />
                    Discover
                    <br />
                    Projects
                    <br />
                    Updates
                    <br />
                    Remix
                  </div>
                </div>
              </div>

              <div className="sm:hidden absolute left-3 bottom-3 rounded-2xl bg-black/70 backdrop-blur-sm border border-white/10 px-4 py-3">
                <div className="text-lg font-semibold leading-tight">
                  Gallery
                  <br />
                  Discover
                  <br />
                  Projects
                  <br />
                  Updates
                  <br />
                  Remix
                </div>
              </div>

              <div className="absolute right-3 top-3 text-xs text-zinc-200/80">
                Close
              </div>
            </div>
          </div>

          {/* INFO BAR (tighter) */}
          <div className="mt-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 sm:px-5 sm:py-4">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="min-w-0">
                <div className="text-sm font-semibold text-zinc-100">
                  LostAstr0 Portfolio
                </div>
                <div className="mt-1 text-sm text-zinc-400">
                  A product-style portfolio — curated projects, clean motion, and
                  strong typography.
                </div>

                <div className="mt-3 flex flex-wrap gap-2">
                  {["Next.js", "TypeScript", "Tailwind", "Framer Motion"].map(
                    (t) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200"
                      >
                        {t}
                      </span>
                    )
                  )}
                </div>
              </div>

              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-zinc-950 hover:opacity-90 transition sm:w-auto w-full"
              >
                View projects
              </a>
            </div>
          </div>
        </div>

        {/* SECOND ROW */}
        <div className="grid gap-4 md:grid-cols-2 md:gap-5">
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_18px_50px_rgba(0,0,0,0.45)]">
            <div className="text-sm font-semibold text-zinc-100">Spotlight</div>
            <div className="mt-1 text-sm text-zinc-400">
              One standout project, updated as you ship.
            </div>

            <div className="mt-4 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <div className="aspect-[16/10] w-full bg-gradient-to-br from-blue-500/22 via-zinc-950 to-indigo-500/18" />
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_18px_50px_rgba(0,0,0,0.45)]">
            <div className="text-sm font-semibold text-zinc-100">Toolbox</div>
            <div className="mt-1 text-sm text-zinc-400">
              Quick links and resources — clean and organised.
            </div>

            <div className="mt-4 grid grid-cols-5 gap-3">
              {Array.from({ length: 10 }).map((_, i) => (
                <div
                  key={i}
                  className="aspect-square rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="mt-8">
        <div className="text-xs tracking-[0.18em] text-zinc-500">PROJECTS</div>
        <h2 className="mt-2 text-xl font-semibold text-zinc-100">Coming next</h2>
      </section>

      <div id="contact" className="h-1" />
    </Shell>
  );
}
