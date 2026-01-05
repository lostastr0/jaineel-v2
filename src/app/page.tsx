// src/app/page.tsx

import LogoMarquee from "@/components/LogoMarquee";

export default function Page() {
  return (
    <div id="top" className="w-full">
      {/* HERO */}
      <section className="pt-16 sm:pt-20">
        <div className="mx-auto w-full max-w-[900px] px-2 sm:px-0 text-center">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300">
            {/* green dot */}
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Open for opportunities
          </div>

          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white">
            I&apos;m Jaineel.
          </h1>

          <p className="mx-auto mt-4 max-w-[64ch] text-sm sm:text-base text-zinc-300">
            Cyber security student — learning by building projects and improving as I go.
          </p>

          <div className="mt-7 flex items-center justify-center gap-3">
            {/* KEY BLUE BUTTON */}
            <a
              href="/projects"
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

      {/* GRID WRAPPER */}
      <section className="pt-10 sm:pt-12 pb-16">
        <div className="mx-auto w-full max-w-[900px] px-2 sm:px-0 space-y-4 sm:space-y-6">
          {/* FEATURED (no glow) */}
          <article
            className="
              relative w-full overflow-hidden rounded-3xl
              border border-white/10
              bg-white/[0.03]
              shadow-[0_0_0_1px_rgba(255,255,255,0.04)]
              flex flex-col
              min-h-[260px]
              sm:min-h-[320px]
              lg:w-[900px] lg:h-[450px] lg:min-h-0
            "
          >
            {/* content */}
            <div className="relative z-10 flex flex-1 flex-col px-5 sm:px-8 pt-5 sm:pt-7">
              <div className="flex items-center justify-between">
                <div className="text-sm font-semibold text-white/90">Featured</div>

                <a
                  href="/projects"
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200 hover:bg-white/10 transition"
                >
                  Browse work
                </a>
              </div>

              <div className="pt-6 sm:pt-10">
                <div className="text-[11px] tracking-[0.22em] text-white/40">
                  HIGHLIGHT
                </div>

                <h2 className="mt-2 text-3xl sm:text-4xl font-semibold tracking-tight text-white">
                  Password Strength Checker
                </h2>

                <p className="mt-3 max-w-[60ch] text-sm sm:text-base text-zinc-300">
                  A Python tool that checks password strength and highlights weak patterns.
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {["Python", "CLI", "Security"].map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex-1" />
            </div>

            {/* bottom bar */}
            <div className="relative z-10 border-t border-white/10 bg-black/20 backdrop-blur px-5 sm:px-8 py-4">
              <div className="flex items-center justify-between gap-4">
                <div className="min-w-0">
                  <div className="text-sm font-semibold text-white/90 truncate">
                    View the project page
                  </div>
                  <div className="text-xs text-zinc-400 truncate">
                    Write-up + usage + what I learned building it.
                  </div>
                </div>

                {/* KEY BLUE BUTTON */}
                <a
                  href="/projects"
                  className="
                    shrink-0 inline-flex items-center justify-center
                    rounded-full bg-sky-500 px-5 py-2 text-sm font-medium text-black
                    hover:bg-sky-400 transition
                  "
                >
                  View projects
                </a>
              </div>
            </div>
          </article>

          {/* BELOW GRID */}
          <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-10">
            {/* Focus */}
            <article
              className="
                lg:col-span-4
                rounded-3xl border border-white/10
                bg-white/[0.03]
                shadow-[0_0_0_1px_rgba(255,255,255,0.04)]
                overflow-hidden
              "
            >
              <div className="p-5 sm:p-6">
                <div className="text-sm font-semibold text-white/90">Focus</div>
                <p className="mt-1 text-xs text-zinc-400">
                  The main thing I&apos;m working on right now.
                </p>
              </div>

              <div className="px-5 sm:px-6 pb-5 sm:pb-6">
                <div className="h-[170px] rounded-2xl border border-white/10 bg-white/[0.03]" />
              </div>
            </article>

            {/* Toolbox */}
            <article
              className="
                lg:col-span-6
                rounded-3xl border border-white/10
                bg-white/[0.03]
                shadow-[0_0_0_1px_rgba(255,255,255,0.04)]
                overflow-hidden
              "
            >
              <div className="p-5 sm:p-6">
                <div className="text-sm font-semibold text-white/90">Toolbox</div>
                <p className="mt-1 text-xs text-zinc-400">
                  Tools and platforms I&apos;m learning and using.
                </p>
              </div>

              <div className="px-3 sm:px-4 pb-4 sm:pb-5">
                <LogoMarquee />
              </div>
            </article>
          </div>

          <section id="about" className="pt-2">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.04)]">
              <div className="text-sm font-semibold text-white/90">About</div>
              <p className="mt-2 text-sm text-zinc-300">
                I&apos;m building skills in cyber security through hands-on projects, and documenting what I learn.
              </p>
            </div>
          </section>

          <section id="contact" className="pt-2">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.04)]">
              <div className="text-sm font-semibold text-white/90">Contact</div>
              <p className="mt-2 text-sm text-zinc-300">Add your links / email here.</p>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}
