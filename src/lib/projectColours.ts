// src/lib/projectColours.ts

import type { ProjectStatus } from "@/data/projects";

type StatusStyle = {
  label: string;
  pill: string;     // classes for the status pill
  band: string;     // classes for the top gradient band
  dot: string;      // dot colour for filters / small UI
  dotGlow: string;  // glow for dot (subtle)
  text: string;     // text colour if needed
};

const STYLES: Record<ProjectStatus, StatusStyle> = {
  "In progress": {
    label: "In progress",
    pill: "border-sky-400/25 bg-sky-500/10 text-sky-200",
    band: "from-amber-900/30 via-black/40 to-sky-900/30",
    dot: "bg-sky-400",
    dotGlow: "shadow-[0_0_18px_rgba(56,189,248,0.45)]",
    text: "text-sky-200",
  },
  Completed: {
    label: "Completed",
    pill: "border-emerald-400/25 bg-emerald-500/10 text-emerald-200",
    band: "from-amber-900/25 via-black/40 to-emerald-900/25",
    dot: "bg-emerald-400",
    dotGlow: "shadow-[0_0_18px_rgba(52,211,153,0.45)]",
    text: "text-emerald-200",
  },
  Planned: {
    label: "Planned",
    pill: "border-amber-300/25 bg-amber-400/10 text-amber-100",
    band: "from-amber-900/35 via-black/40 to-sky-900/20",
    dot: "bg-amber-300",
    dotGlow: "shadow-[0_0_18px_rgba(252,211,77,0.35)]",
    text: "text-amber-100",
  },
  Ongoing: {
    label: "Ongoing",
    pill: "border-yellow-300/25 bg-yellow-400/10 text-yellow-100",
    band: "from-amber-900/35 via-black/40 to-yellow-900/20",
    dot: "bg-yellow-300",
    dotGlow: "shadow-[0_0_18px_rgba(253,224,71,0.30)]",
    text: "text-yellow-100",
  },
  Idea: {
    label: "Idea",
    pill: "border-violet-300/25 bg-violet-400/10 text-violet-100",
    band: "from-amber-900/20 via-black/40 to-violet-900/25",
    dot: "bg-violet-300",
    dotGlow: "shadow-[0_0_18px_rgba(196,181,253,0.30)]",
    text: "text-violet-100",
  },
};

// Safe fallback so you NEVER get “undefined (reading dot)”
export function getStatusStyle(status: ProjectStatus) {
  return STYLES[status] ?? STYLES["In progress"];
}
