// src/data/projects.ts

export type ProjectStatus =
  | "Completed"
  | "In progress"
  | "Planned"
  | "Idea";

export type Project = {
  slug: string;
  title: string;
  description: string;
  status: ProjectStatus;
  tags: string[];
  blurb?: string;
  highlights?: string[];
  links?: { label: string; href: string }[];
};

export const PROJECTS: Project[] = [
  {
    slug: "portfolio-v2",
    title: "Portfolio v2",
    description:
      "This site — layout system, motion, navigation, and components.",
    status: "In progress",
    tags: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    blurb:
      "A product-style portfolio focused on clarity, strong typography, and a clean component system.",
    highlights: [
      "Desktop sidebar + mobile drawer navigation",
      "Reusable cards + consistent spacing system",
      "Projects index + dynamic project routes (/projects/[slug])",
      "Small easter eggs (cursor quote) without clutter",
    ],
    links: [
      { label: "Home", href: "/" },
      { label: "Projects", href: "/projects" },
    ],
  },

  // ✅ ADD THIS BACK
  {
    slug: "password-strength-checker",
    title: "Password Strength Checker",
    description:
      "A Python CLI tool that checks password strength and gives improvement feedback.",
    status: "Completed",
    tags: ["Python", "CLI", "Security basics"],
    blurb:
      "A small cyber-security beginner project: score password strength using simple rules (length, variety, common patterns) and return clear suggestions.",
    highlights: [
      "Strength scoring (length + character variety)",
      "Detects common patterns (repeats, sequences, common words)",
      "Actionable feedback (what to improve)",
      "Clean CLI UX (fast to run, readable output)",
    ],
    links: [
      { label: "Back to projects", href: "/projects" },
      // Add real links later when you have them:
      // { label: "GitHub", href: "https://github.com/yourname/repo" },
    ],
  },

  {
    slug: "coming-soon",
    title: "Coming soon",
    description: "Placeholder for my next real project.",
    status: "Idea",
    tags: ["WIP"],
    blurb:
      "Use this slot for mynext proper cyber project page once I pick one (CTF writeups, network lab, notes hub, etc.).",
    highlights: ["Decide scope", "Build MVP", "Write a short postmortem"],
    links: [{ label: "Back to projects", href: "/projects" }],
  },
];
