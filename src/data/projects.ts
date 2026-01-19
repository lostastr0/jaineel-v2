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
      "This site — layout system, navigation, components, and responsive structure.",
    status: "In progress",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    blurb:
      "A product-style portfolio focused on clarity, consistency, and a reusable component system.",
    highlights: [
      "Desktop sidebar + mobile drawer navigation",
      "Reusable card system with consistent spacing",
      "Projects index + dynamic routes",
      "Light/dark theme handling",
    ],
    links: [
      { label: "Home", href: "/" },
      { label: "Projects", href: "/projects" },
    ],
  },

  {
    slug: "password-strength-checker",
    title: "Password Strength Checker",
    description:
      "A Python CLI tool that checks password strength and provides improvement feedback.",
    status: "Completed",
    tags: ["Python", "CLI", "Security basics"],
    blurb:
      "A beginner-friendly cyber project that evaluates password quality using simple, explainable rules.",
    highlights: [
      "Length and character variety scoring",
      "Detects common patterns and weak passwords",
      "Clear, actionable feedback",
      "Fast CLI workflow",
    ],
    links: [{ label: "Back to projects", href: "/projects" }],
  },

  /* ============================
     PLANNED / UPCOMING PROJECTS
     ============================ */

  {
    slug: "port-scanner-cli",
    title: "Simple Port Scanner",
    description:
      "A basic TCP port scanner built in Python.",
    status: "Planned",
    tags: ["Python", "Networking", "Security basics"],
    blurb:
      "A learning-focused port scanner to understand sockets, ports, and basic network behaviour.",
    highlights: [
      "TCP socket connections",
      "Configurable port ranges",
      "Timeout handling",
      "Readable CLI output",
    ],
    links: [{ label: "Back to projects", href: "/projects" }],
  },

  {
    slug: "log-analyzer",
    title: "Log Analyzer",
    description:
      "A small tool that parses and filters system or web logs.",
    status: "Planned",
    tags: ["Python", "Logs", "Linux"],
    blurb:
      "Practice working with real-world log files and extracting useful information.",
    highlights: [
      "Parse structured and unstructured logs",
      "Keyword and date filtering",
      "Summary output (counts, patterns)",
    ],
    links: [{ label: "Back to projects", href: "/projects" }],
  },

  {
    slug: "linux-hardening-notes",
    title: "Linux Hardening Checklist",
    description:
      "A practical checklist and scripts for basic Linux system hardening.",
    status: "Planned",
    tags: ["Linux", "Security", "System basics"],
    blurb:
      "A personal reference for securing a basic Linux system without overcomplicating things.",
    highlights: [
      "User and permission checks",
      "Basic firewall configuration",
      "Service minimisation",
      "Secure SSH defaults",
    ],
    links: [{ label: "Back to projects", href: "/projects" }],
  },

  {
    slug: "networking-lab",
    title: "Networking Practice Lab",
    description:
      "Local networking experiments using VMs and tools.",
    status: "Planned",
    tags: ["Networking", "Linux", "Virtualisation"],
    blurb:
      "Hands-on networking practice to build fundamentals beyond theory.",
    highlights: [
      "IP addressing and routing basics",
      "Packet capture with Wireshark",
      "Local DNS and HTTP testing",
    ],
    links: [{ label: "Back to projects", href: "/projects" }],
  },

  {
    slug: "bash-automation-scripts",
    title: "Bash Automation Scripts",
    description:
      "Small shell scripts for everyday system tasks.",
    status: "Idea",
    tags: ["Bash", "Linux", "Automation"],
    blurb:
      "A growing collection of small scripts to automate repetitive tasks.",
    highlights: [
      "File and directory automation",
      "System info scripts",
      "Backup helpers",
    ],
    links: [{ label: "Back to projects", href: "/projects" }],
  },

  {
    slug: "web-security-basics",
    title: "Web Security Basics",
    description:
      "Hands-on exploration of common web vulnerabilities.",
    status: "Idea",
    tags: ["Web security", "OWASP", "Fundamentals"],
    blurb:
      "Learning common web vulnerabilities through safe, local examples.",
    highlights: [
      "Input validation issues",
      "Authentication mistakes",
      "Understanding attack surfaces",
    ],
    links: [{ label: "Back to projects", href: "/projects" }],
  },
];
