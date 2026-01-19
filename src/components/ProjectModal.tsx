// src/components/ProjectModal.tsx
"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Project } from "@/data/projects";
import { getStatusStyle } from "@/lib/projectColours";
import PasswordStrengthTool from "@/components/PasswordStrengthTool";

export default function ProjectModal({
  open,
  project,
  onClose,
}: {
  open: boolean;
  project: Project | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open || !project) return null;

  const s = getStatusStyle(project.status);

  return (
    <div className="fixed inset-0 z-[70]">
      {/* Backdrop */}
      <button
        type="button"
        aria-label="Close modal"
        onClick={onClose}
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
      />

      {/* Center wrapper */}
      <div className="absolute inset-0 flex items-center justify-center p-4">
        {/* Panel */}
        <div
          className={[
            "relative w-full max-w-[840px]",
            "overflow-hidden rounded-3xl",
            "border border-white/12 bg-[rgb(var(--bg))]/90",
            "shadow-[0_30px_90px_rgba(0,0,0,0.55)]",
            "ring-1 ring-white/10",
          ].join(" ")}
          role="dialog"
          aria-modal="true"
        >
          {/* Top banner */}
          <div className="relative h-14 sm:h-16">
            <div className={`absolute inset-0 ${s.banner} opacity-90`} />
            <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-px bg-white/10" />

            {/* top row */}
            <div className="relative z-10 flex items-center justify-between px-4 sm:px-6 py-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-zinc-200">
                  <span className={`h-1.5 w-1.5 rounded-full ${s.dot}`} />
                  {project.status}
                </span>

                {project.tags?.slice(0, 3).map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-black/15 px-3 py-1 text-xs text-zinc-200"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <button
                type="button"
                onClick={onClose}
                className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-zinc-200 hover:bg-black/30 transition"
              >
                Close
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="max-h-[75vh] overflow-y-auto px-4 sm:px-6 py-5">
            <h2 className="text-2xl sm:text-3xl font-semibold text-white">
              {project.title}
            </h2>

            <p className="mt-2 text-sm text-zinc-300 max-w-[85ch]">
              {project.description}
            </p>

            {/* ✅ STEP 3: Only show the functional tool for the password project */}
            {project.slug === "password-strength-checker" && (
              <div className="mt-5">
                <PasswordStrengthTool />
              </div>
            )}

            {/* Overview */}
            {project.blurb && (
              <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <div className="text-[11px] tracking-[0.22em] text-white/40">
                  OVERVIEW
                </div>
                <p className="mt-2 text-sm text-zinc-200/90 leading-relaxed">
                  {project.blurb}
                </p>
              </div>
            )}

            {/* Highlights */}
            {project.highlights?.length ? (
              <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <div className="text-[11px] tracking-[0.22em] text-white/40">
                  HIGHLIGHTS
                </div>
                <ul className="mt-3 space-y-2 text-sm text-zinc-200/90">
                  {project.highlights.map((h) => (
                    <li key={h} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/30" />
                      <span className="leading-relaxed">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {/* Links */}
            <div className="mt-5">
              <div className="text-[11px] tracking-[0.22em] text-white/40">
                LINKS
              </div>

              <div className="mt-3 flex flex-wrap gap-2">
                {(project.links?.length ? project.links : [{ label: "Back to projects", href: "/projects" }]).map(
                  (l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-zinc-200 hover:bg-white/10 transition"
                    >
                      {l.label}
                    </Link>
                  )
                )}
              </div>
            </div>

            <div className="mt-4 text-xs text-white/35">
              Tip: ESC closes • click outside closes
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/10 px-4 sm:px-6 py-4 flex items-center justify-end">
            <button
              type="button"
              onClick={onClose}
              className="rounded-full bg-sky-500 px-5 py-2 text-sm font-medium text-black hover:bg-sky-400 transition"
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
