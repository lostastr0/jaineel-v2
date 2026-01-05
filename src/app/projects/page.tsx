// src/app/projects/page.tsx

"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import { PROJECTS, ProjectStatus } from "@/data/projects";
import { getStatusStyle } from "@/lib/projectColours";

type FilterKey = "All" | ProjectStatus;

const FILTERS: FilterKey[] = ["All", "Completed", "In progress", "Planned", "Ongoing", "Idea"];

export default function ProjectsPage() {
  const [filter, setFilter] = useState<FilterKey>("All");

  const filtered = useMemo(() => {
    if (filter === "All") return PROJECTS;
    return PROJECTS.filter((p) => p.status === filter);
  }, [filter]);

  // "Pinned" = first two projects (same as your current approach)
  const pinned = filtered.slice(0, 2);
  const rest = filtered.slice(2);

  return (
    <div className="relative w-full">
      <section className="mx-auto w-full max-w-[980px] px-2 sm:px-0 pt-10 sm:pt-12 pb-16">
        {/* header */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-3xl sm:text-4xl font-semibold text-white">Projects</h1>
            <p className="mt-2 text-sm text-zinc-300 max-w-[70ch]">
              Stuff I’m building while studying cyber security — small projects, notes, and experiments.
            </p>
          </div>

          <Link
            href="/#contact"
            className="shrink-0 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-200 hover:bg-white/10 transition"
          >
            Get in touch
          </Link>
        </div>

        {/* filters row (tiny dot + active glow) */}
        <div className="mt-6 flex flex-wrap items-center gap-2">
          <span className="text-xs text-zinc-500">Filter:</span>

          {FILTERS.map((k) => {
            const active = filter === k;

            const style =
              k === "All"
                ? { dot: "bg-sky-400", glow: "shadow-[0_0_18px_rgba(56,189,248,0.35)]" }
                : (() => {
                    const s = getStatusStyle(k);
                    return { dot: s.dot, glow: s.dotGlow };
                  })();

            return (
              <button
                key={k}
                onClick={() => setFilter(k)}
                className={`
                  inline-flex items-center gap-2 rounded-full
                  border px-3 py-1 text-xs transition
                  ${active ? "border-white/20 bg-white/10 text-white" : "border-white/10 bg-white/5 text-zinc-200 hover:bg-white/10"}
                `}
              >
                <span className={`h-1.5 w-1.5 rounded-full ${style.dot} ${active ? style.glow : ""}`} />
                {k}
              </button>
            );
          })}

          <div className="ml-auto text-xs text-zinc-500">
            {filtered.length} shown
          </div>
        </div>

        {/* pinned */}
        {pinned.length > 0 && (
          <div className="mt-8">
            <div className="text-xs uppercase tracking-wider text-zinc-500">
              Pinned
            </div>

            <div className="mt-3 grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">
              {pinned.map((p) => (
                <ProjectCard key={p.slug} project={p} />
              ))}
            </div>
          </div>
        )}

        {/* all */}
        {rest.length > 0 && (
          <div className="mt-10">
            <div className="text-xs uppercase tracking-wider text-zinc-500">
              All projects
            </div>

            <div className="mt-3 grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
              {rest.map((p) => (
                <ProjectCard key={p.slug} project={p} />
              ))}
            </div>
          </div>
        )}

        {/* footer */}
        <div className="mt-10 text-xs text-zinc-500">
          Tip: add new projects in{" "}
          <span className="text-zinc-300">src/data/projects.ts</span> — the grid and pages update automatically.
        </div>

        <div className="mt-6">
          <Link href="/" className="text-sm text-zinc-300 hover:text-white transition">
            ← Back to home
          </Link>
        </div>
      </section>
    </div>
  );
}
