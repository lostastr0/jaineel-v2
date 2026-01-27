// src/components/ProjectModal.tsx
"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Project } from "@/data/projects";
import { getStatusStyle } from "@/lib/projectColours";
import PasswordCheckerWidget from "@/components/PasswordCheckerWidget";

export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!project) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  if (!project) return null;

  const s = getStatusStyle(project.status);

  const pill =
    "inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200";
  const sectionCard =
    "rounded-2xl border border-white/10 bg-white/[0.03] p-4";

  const isPasswordChecker = project.slug === "password-strength-checker";

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      {/* backdrop */}
      <button
        type="button"
        aria-label="Close modal"
        onClick={onClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
      />

      {/* panel */}
      <div className="relative z-10 w-full max-w-[860px] overflow-hidden rounded-3xl border border-white/10 bg-[rgb(var(--bg))]/60 shadow-[0_18px_70px_rgba(0,0,0,0.55)] backdrop-blur-xl">
        {/* top bar */}
        <div className="flex items-center justify-between gap-3 border-b border-white/10 px-5 py-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className={pill}>
              <span className={`h-1.5 w-1.5 rounded-full ${s.dot}`} />
              {project.status}
            </span>
            {project.tags?.slice(0, 4).map((t) => (
              <span key={t} className={pill}>
                {t}
              </span>
            ))}
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-zinc-200 hover:bg-white/10 hover:border-white/15 transition"
          >
            Close
          </button>
        </div>

        {/* content */}
        <div className="px-5 py-6">
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">
                {project.title}
              </h2>
              <p className="mt-2 text-sm text-zinc-300 max-w-[80ch]">
                {project.description}
              </p>
            </div>

            {(project as any).meta?.time || (project as any).meta?.difficulty ? (
              <div className="hidden sm:flex flex-col items-end gap-2 text-xs text-zinc-400">
                {(project as any).meta?.time && (
                  <div className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1">
                    Time:{" "}
                    <span className="text-zinc-200">{(project as any).meta.time}</span>
                  </div>
                )}
                {(project as any).meta?.difficulty && (
                  <div className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1">
                    Difficulty:{" "}
                    <span className="text-zinc-200">{(project as any).meta.difficulty}</span>
                  </div>
                )}
              </div>
            ) : null}
          </div>

          {/* ✅ Special interactive area for Password Strength Checker */}
          {isPasswordChecker && (
            <div className="mt-6">
              <PasswordCheckerWidget />
            </div>
          )}

          {/* overview */}
          {((project as any).blurb || (project as any).meta?.goal) && (
            <div className="mt-6 grid gap-3">
              {(project as any).meta?.goal && (
                <div className={sectionCard}>
                  <div className="text-[11px] tracking-[0.18em] text-white/40">
                    GOAL
                  </div>
                  <div className="mt-2 text-sm text-zinc-200/90 leading-relaxed">
                    {(project as any).meta.goal}
                  </div>
                </div>
              )}

              {(project as any).blurb && (
                <div className={sectionCard}>
                  <div className="text-[11px] tracking-[0.18em] text-white/40">
                    OVERVIEW
                  </div>
                  <div className="mt-2 text-sm text-zinc-200/90 leading-relaxed">
                    {(project as any).blurb}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* highlights */}
          {project.highlights?.length ? (
            <div className="mt-4 grid gap-3">
              <div className={sectionCard}>
                <div className="text-[11px] tracking-[0.18em] text-white/40">
                  HIGHLIGHTS
                </div>
                <ul className="mt-3 space-y-2 text-sm text-zinc-200/90">
                  {project.highlights.map((h) => (
                    <li key={h} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/25" />
                      <span className="leading-relaxed">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ) : null}

          {/* what I learned + next steps */}
          {(((project as any).meta?.learned?.length || (project as any).meta?.next?.length) ? (
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {(project as any).meta?.learned?.length ? (
                <div className={sectionCard}>
                  <div className="text-[11px] tracking-[0.18em] text-white/40">
                    WHAT I LEARNED
                  </div>
                  <ul className="mt-3 space-y-2 text-sm text-zinc-200/90">
                    {(project as any).meta.learned.map((x: string) => (
                      <li key={x} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400/80" />
                        <span className="leading-relaxed">{x}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {(project as any).meta?.next?.length ? (
                <div className={sectionCard}>
                  <div className="text-[11px] tracking-[0.18em] text-white/40">
                    NEXT STEPS
                  </div>
                  <ul className="mt-3 space-y-2 text-sm text-zinc-200/90">
                    {(project as any).meta.next.map((x: string) => (
                      <li key={x} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400/80" />
                        <span className="leading-relaxed">{x}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          ) : null)}

          {/* links */}
          {project.links?.length ? (
            <div className="mt-4">
              <div className={sectionCard}>
                <div className="text-[11px] tracking-[0.18em] text-white/40">
                  LINKS
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.links.map((l) => (
                    <Link
                      key={l.href + l.label}
                      href={l.href}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-zinc-200 hover:bg-white/10 hover:border-white/15 transition"
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ) : null}
        </div>

        {/* bottom bar */}
        <div className="flex items-center justify-between gap-3 border-t border-white/10 px-5 py-4">
          <div className="text-xs text-white/35">
            Tip: ESC closes • click outside closes
          </div>

          <button
            type="button"
            onClick={onClose}
            className="inline-flex items-center justify-center rounded-full bg-sky-500 px-5 py-2 text-sm font-medium text-black hover:bg-sky-400 transition"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
