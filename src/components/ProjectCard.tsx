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
        "group text-left w-full overflow-hidden rounded-3xl",
        "border border-white/10 bg-white/[0.03]",
        "shadow-[0_0_0_1px_rgba(255,255,255,0.04)]",
        "transition duration-200 hover:-translate-y-[1px] hover:border-white/15 hover:bg-white/[0.04]",
      ].join(" ")}
    >
      <div className="relative h-24 overflow-hidden">
        <div className="absolute inset-0 opacity-80" />
        <div className={`absolute inset-0 ${s.banner}`} />
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent" />

        <div className="absolute left-4 top-4">
          <span
            className={[
              "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs",
              "border-white/10 bg-white/5 text-zinc-200",
            ].join(" ")}
          >
            <span className={`h-1.5 w-1.5 rounded-full ${s.dot}`} />
            {project.status}
          </span>
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <div className="text-sm font-semibold text-white/90 truncate">
              {project.title}
            </div>
            <div className="mt-1 text-xs text-zinc-400 line-clamp-2">
              {project.description}
            </div>
          </div>

          <span className="text-white/25 group-hover:text-white/45 transition">
            ↗
          </span>
        </div>

        {project.tags?.length ? (
          <div className="mt-3 flex flex-wrap gap-2">
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

        <div className="mt-4 text-xs text-zinc-500 group-hover:text-zinc-300 transition">
          Click to view details
        </div>
      </div>
    </button>
  );
}
