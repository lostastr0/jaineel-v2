// src/components/ProjectCard.tsx
"use client";

import { Project } from "@/data/projects";
import { getStatusStyle } from "@/lib/projectColours";

export default function ProjectCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: () => void;
}) {
  const s = getStatusStyle(project.status);

  return (
    <button
      type="button"
      onClick={onOpen}
      className={[
        "group relative text-left w-full overflow-hidden rounded-3xl",
        "border border-white/10 bg-white/[0.03]",
        "shadow-[0_0_0_1px_rgba(255,255,255,0.04)]",
        "transition duration-200",
        "hover:-translate-y-[1px] hover:border-white/15 hover:bg-white/[0.04]",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/40",
      ].join(" ")}
    >
      {/* subtle status glow (very light) */}
      <div className={`pointer-events-none absolute inset-0 opacity-[0.22] ${s.banner}`} />

      {/* top bar */}
      <div className="relative px-4 pt-4">
        <div className="flex items-center justify-between gap-3">
          <span
            className={[
              "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs",
              "border-white/10 bg-white/5 text-zinc-200",
            ].join(" ")}
          >
            <span className={`h-1.5 w-1.5 rounded-full ${s.dot}`} />
            {project.status}
          </span>

          {/* Replace ↗ with “View” pill (because it opens a modal) */}
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-white/70 opacity-0 translate-y-[1px] transition group-hover:opacity-100 group-hover:translate-y-0">
            View
          </span>
        </div>
      </div>

      {/* content */}
      <div className="relative px-4 pb-4 pt-4">
        <div className="min-w-0">
          <div className="text-sm font-semibold text-white/90 truncate">
            {project.title}
          </div>

          <div className="mt-2 text-xs text-zinc-400 leading-relaxed line-clamp-3">
            {project.description}
          </div>
        </div>

        {/* tags */}
        {project.tags?.length ? (
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.slice(0, 3).map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-zinc-200"
              >
                {t}
              </span>
            ))}
          </div>
        ) : null}

        {/* bottom row */}
        <div className="mt-4 flex items-center justify-between">
          <div className="text-xs text-zinc-500 group-hover:text-zinc-300 transition">
            Click to view details
          </div>

          <span className="text-white/30 group-hover:text-white/55 transition">
            →
          </span>
        </div>
      </div>

      {/* tiny hairline bottom glow */}
      <div className="pointer-events-none h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </button>
  );
}
