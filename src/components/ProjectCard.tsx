// src/components/ProjectCard.tsx

import Link from "next/link";
import { Project } from "@/data/projects";
import { getStatusStyle } from "@/lib/projectColours";

export default function ProjectCard({ project }: { project: Project }) {
  const s = getStatusStyle(project.status);

  const tags = project.tags ?? [];
  const shown = tags.slice(0, 3);
  const extra = Math.max(0, tags.length - shown.length);

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="
        group relative overflow-hidden rounded-3xl
        border border-white/10 bg-white/[0.03]
        shadow-[0_0_0_1px_rgba(255,255,255,0.04)]
        transition hover:bg-white/[0.05]
      "
    >
      {/* top gradient band (old screenshot vibe) */}
      <div
        className={`
          relative h-[160px] w-full
          bg-gradient-to-br ${s.band}
          border-b border-white/10
        `}
      >
        {/* status pill */}
        <div className="absolute left-5 top-5">
          <span
            className={`
              inline-flex items-center gap-2 rounded-full
              border px-3 py-1 text-xs font-medium
              ${s.pill}
            `}
          >
            {s.label}
          </span>
        </div>
      </div>

      {/* body */}
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-lg font-semibold text-white">{project.title}</h3>
          <span className="text-white/25 group-hover:text-white/55 transition">
            ↗
          </span>
        </div>

        <p className="mt-2 text-sm text-zinc-300">{project.description}</p>

        {/* tags row */}
        {tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {shown.map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200"
              >
                {t}
              </span>
            ))}
            {extra > 0 && (
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200">
                +{extra}
              </span>
            )}
          </div>
        )}
      </div>
    </Link>
  );
}
