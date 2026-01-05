// src/app/projects/[slug]/page.tsx

import Link from "next/link";
import { notFound } from "next/navigation";
import { PROJECTS } from "@/data/projects";

export default function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = PROJECTS.find((p) => p.slug === params.slug);

  if (!project) notFound();

  return (
    <div className="relative w-full">
      {/* subtle page glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-220px] h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-sky-500/10 blur-3xl" />
        <div className="absolute left-[10%] top-[220px] h-[420px] w-[420px] rounded-full bg-amber-500/10 blur-3xl" />
      </div>

      <section className="mx-auto w-full max-w-[980px] px-2 sm:px-0 pt-10 sm:pt-12 pb-16">
        {/* top nav */}
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/projects"
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-200 hover:bg-white/10 transition"
          >
            ← Projects
          </Link>

          <Link
            href="/#contact"
            className="rounded-full bg-sky-500 px-4 py-2 text-sm font-medium text-black hover:bg-sky-400 transition"
          >
            Get in touch
          </Link>
        </div>

        {/* hero card */}
        <article
          className="
            mt-6 overflow-hidden rounded-3xl border border-white/10
            bg-gradient-to-br from-amber-900/25 via-black to-blue-900/25
            shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_20px_80px_rgba(0,0,0,0.55)]
          "
        >
          <div className="p-6 sm:p-8">
            <div className="text-[11px] tracking-[0.22em] text-white/40">
              PROJECT
            </div>

            <h1 className="mt-2 text-3xl sm:text-4xl font-semibold tracking-tight text-white">
              {project.title}
            </h1>

            {/* Meta row like the reference (status + tags) */}
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <span
                className="
                  inline-flex items-center gap-2
                  rounded-full border border-white/10 bg-white/5
                  px-3 py-1 text-xs text-zinc-200
                "
              >
                <span className="h-1.5 w-1.5 rounded-full bg-sky-400 shadow-[0_0_10px_rgba(56,189,248,0.55)]" />
                {project.status}
              </span>

              {project.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200"
                >
                  {t}
                </span>
              ))}
            </div>

            <p className="mt-4 max-w-[75ch] text-sm sm:text-base text-zinc-300">
              {project.blurb ?? project.description}
            </p>
          </div>

          {/* bottom bar */}
          <div className="border-t border-white/10 bg-black/20 backdrop-blur px-6 sm:px-8 py-4">
            <div className="flex items-center justify-between gap-4">
              <div className="min-w-0">
                <div className="text-sm font-semibold text-white/90 truncate">
                  {project.description}
                </div>
                <div className="text-xs text-zinc-400 truncate">
                  /projects/{project.slug}
                </div>
              </div>

              <Link
                href="/projects"
                className="shrink-0 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-200 hover:bg-white/10 transition"
              >
                Back
              </Link>
            </div>
          </div>
        </article>

        {/* content grid */}
        <div className="mt-6 grid grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-10">
          {/* Overview / Highlights (bigger column) */}
          <div
            className="
              lg:col-span-6 rounded-3xl border border-white/10 bg-white/[0.03]
              shadow-[0_0_0_1px_rgba(255,255,255,0.04)]
              p-6
            "
          >
            <div className="text-sm font-semibold text-white/90">Overview</div>
            <p className="mt-1 text-xs text-zinc-400">
              What it is + what I’m improving.
            </p>

            <div className="mt-4 text-sm text-zinc-300 leading-relaxed">
              {project.blurb ?? project.description}
            </div>

            <div className="mt-6">
              <div className="text-sm font-semibold text-white/90">
                Highlights
              </div>
              <p className="mt-1 text-xs text-zinc-400">
                What this includes (and what I learned building it).
              </p>

              <ul className="mt-4 space-y-2 text-sm text-zinc-200">
                {(project.highlights?.length
                  ? project.highlights
                  : ["Add highlights in src/data/projects.ts"]
                ).map((h) => (
                  <li key={h} className="flex gap-2">
                    <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-sky-400 shrink-0" />
                    <span className="text-zinc-300">{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Links (smaller column) */}
          <div
            className="
              lg:col-span-4 rounded-3xl border border-white/10 bg-white/[0.03]
              shadow-[0_0_0_1px_rgba(255,255,255,0.04)]
              p-6
            "
          >
            <div className="text-sm font-semibold text-white/90">Links</div>
            <p className="mt-1 text-xs text-zinc-400">Where to go next.</p>

            <div className="mt-4 space-y-2">
              {(project.links?.length
                ? project.links
                : [{ label: "Back to projects", href: "/projects" }]
              ).map((l) => (
                <Link
                  key={`${l.label}-${l.href}`}
                  href={l.href}
                  className="
                    group flex items-center justify-between
                    rounded-2xl border border-white/10 bg-white/5
                    px-4 py-3 text-sm text-zinc-200
                    hover:bg-white/10 transition
                  "
                >
                  <span className="truncate">{l.label}</span>
                  <span className="text-white/35 group-hover:text-white/60">
                    ↗
                  </span>
                </Link>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-4">
              <div className="text-xs uppercase tracking-wider text-zinc-500">
                Tip
              </div>
              <p className="mt-2 text-xs text-zinc-300">
                Add a GitHub link later in{" "}
                <span className="text-white/80">src/data/projects.ts</span> and
                it will appear here automatically.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
