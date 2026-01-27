// src/data/projects.ts

export type ProjectStatus =
  | "Completed"
  | "In progress"
  | "Planned"
  | "Ongoing"
  | "Idea";

export type ProjectMeta = {
  goal?: string; // 1 sentence
  learned?: string[]; // 2–5 bullets
  next?: string[]; // 2–6 bullets
  time?: string; // "2–3 hours", "1 week", etc.
  difficulty?: "Easy" | "Medium" | "Hard";
};

export type Project = {
  slug: string;
  title: string;
  description: string;
  status: ProjectStatus;
  tags: string[];
  blurb?: string; // "overview" paragraph
  highlights?: string[];
  links?: { label: string; href: string }[];
  meta?: ProjectMeta; // ✅ new
};

export const PROJECTS: Project[] = [
  {
    slug: "portfolio-v2",
    title: "Portfolio v2",
    description:
      "This site — layout system, navigation, components, and responsive structure.",
    status: "In progress",
    tags: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    blurb:
      "A product-style portfolio focused on clarity, consistency, and a reusable component system.",
    highlights: [
      "Desktop sidebar + mobile drawer navigation",
      "Reusable card system with consistent spacing",
      "Projects grid + modal project details",
      "Light/dark theme handling",
    ],
    meta: {
      goal: "Build a clean, scalable portfolio UI that’s easy to extend as I study.",
      learned: [
        "Route groups and layouts can simplify global UI (Shell) vs special pages (404).",
        "Small spacing + typography decisions matter more than fancy effects.",
        "Modals need keyboard + focus handling to feel “finished”.",
      ],
      next: [
        "Add accessibility pass (focus trap, aria labels, reduced-motion).",
        "Add a simple Labs page for small experiments without full write-ups.",
        "Add project “evidence” links (repo, screenshots, demo).",
      ],
      time: "Ongoing",
      difficulty: "Medium",
    },
    links: [
      { label: "Home", href: "/" },
      { label: "Projects", href: "/projects" },
    ],
  },

  {
    slug: "password-strength-checker",
    title: "Password Strength Checker",
    description:
      "A password strength tool with clear feedback on weaknesses and improvements.",
    status: "Completed",
    tags: ["Python", "Security basics", "CLI"],
    blurb:
      "A beginner-friendly security tool that scores passwords and explains what to improve (length, variety, patterns).",
    highlights: [
      "Strength scoring (length + character variety)",
      "Detects repeats and simple sequences",
      "Actionable feedback (what to change)",
      "Simple CLI UX",
    ],
    meta: {
      goal: "Learn how to turn common password rules into clear, usable feedback.",
      learned: [
        "Length usually beats complexity for real-world strength.",
        "Common patterns (123, abc, repeats) are a bigger issue than people think.",
        "Good UX is “tell me what to do next”, not just a score.",
      ],
      next: [
        "Add an entropy estimate and explain it in plain language.",
        "Add a ‘passphrase mode’ suggestion (3–4 random words).",
        "Optional: build a small web UI (rate-limited, no logging).",
      ],
      time: "1–2 sessions",
      difficulty: "Easy",
    },
    links: [{ label: "Back to projects", href: "/projects" }],
  },

  {
    slug: "simple-port-scanner",
    title: "Simple Port Scanner",
    description: "A basic TCP port scanner built in Python.",
    status: "Planned",
    tags: ["Python", "Networking", "Sockets"],
    blurb:
      "A small scanner to learn sockets, timeouts, and safe scanning behaviour on local networks.",
    highlights: [
      "Scan common ports with timeouts",
      "Readable output + optional JSON export",
      "Targets restricted to localhost/private ranges",
    ],
    meta: {
      goal: "Understand socket basics and what port states actually mean.",
      learned: [
        "How timeouts and retries change results",
        "Difference between open/closed/filtered in practice",
      ],
      next: [
        "Build MVP for localhost scanning only",
        "Add threading carefully (limits + stability)",
        "Add input validation + safe defaults",
      ],
      time: "Planned",
      difficulty: "Medium",
    },
    links: [{ label: "Back to projects", href: "/projects" }],
  },

  {
    slug: "log-analyzer",
    title: "Log Analyzer",
    description: "A small tool that parses and filters system or web logs.",
    status: "Planned",
    tags: ["Python", "Logs", "Regex"],
    blurb:
      "A practical log tool to search events, summarise patterns, and export results.",
    highlights: [
      "Parse common formats",
      "Filter by time/keyword/severity",
      "Summaries and exports",
    ],
    meta: {
      goal: "Practice parsing + summarising messy real data.",
      learned: [
        "Regex is powerful but needs guardrails and test cases",
        "Good tools offer presets, not just raw filters",
      ],
      next: [
        "Start with a single log format (e.g., nginx access)",
        "Add unit tests with sample logs",
        "Add quick summary counts and top IPs/paths",
      ],
      time: "Planned",
      difficulty: "Medium",
    },
    links: [{ label: "Back to projects", href: "/projects" }],
  },

  {
    slug: "linux-hardening-checklist",
    title: "Linux Hardening Checklist",
    description:
      "A practical checklist and scripts for basic Linux system hardening.",
    status: "Planned",
    tags: ["Linux", "Security", "System basics"],
    blurb:
      "A checklist-style project for permissions, updates, services, firewall, and auditing.",
    highlights: [
      "Checklist-first approach (repeatable)",
      "Small scripts for checks",
      "Notes on why each step matters",
    ],
    meta: {
      goal: "Learn secure defaults and build a repeatable baseline for Linux machines.",
      learned: [
        "Hardening is mostly about reducing attack surface and maintaining updates",
        "Documentation matters because you’ll forget what you changed later",
      ],
      next: [
        "Draft checklist (services, users, SSH, firewall)",
        "Automate a few checks (unattended upgrades, UFW status)",
        "Create a “before/after” summary output",
      ],
      time: "Planned",
      difficulty: "Medium",
    },
    links: [{ label: "Back to projects", href: "/projects" }],
  },

  {
    slug: "networking-practice-lab",
    title: "Networking Practice Lab",
    description: "Local networking experiments using VMs and tools.",
    status: "Planned",
    tags: ["Networking", "Linux", "Virtualisation"],
    blurb:
      "A small lab setup to practice IP basics, DNS, HTTP, and capture traffic safely.",
    highlights: [
      "IP addressing and routing basics",
      "Packet capture with Wireshark",
      "Local DNS and HTTP testing",
    ],
    meta: {
      goal: "Build comfort with networking fundamentals using hands-on practice.",
      learned: [
        "Labs make concepts stick faster than reading alone",
        "Capturing traffic teaches you what’s actually happening",
      ],
      next: [
        "Create VM topology + document it briefly",
        "Do 3 repeatable exercises (DNS, HTTP, ping/traceroute)",
        "Add a checklist so it’s easy to revisit",
      ],
      time: "Planned",
      difficulty: "Medium",
    },
    links: [{ label: "Back to projects", href: "/projects" }],
  },

  {
    slug: "bash-automation-scripts",
    title: "Bash Automation Scripts",
    description: "Small scripts for everyday system tasks.",
    status: "Idea",
    tags: ["Bash", "Linux", "Automation"],
    blurb:
      "Tiny scripts for backups, quick checks, and routine tasks so I stop doing them manually.",
    highlights: [
      "Simple, practical scripts",
      "Safe defaults + clear output",
      "Doc comments for future-me",
    ],
    meta: {
      goal: "Build small automation habits that save time and reduce mistakes.",
      learned: [
        "Small automation beats big unfinished automation",
        "Readable output matters when you’re debugging",
      ],
      next: [
        "Pick 3 scripts: backups, updates, disk usage report",
        "Add flags and help text",
        "Put them in a repo with examples",
      ],
      time: "Idea",
      difficulty: "Easy",
    },
    links: [{ label: "Back to projects", href: "/projects" }],
  },

  {
    slug: "web-security-basics",
    title: "Web Security Basics",
    description: "Hands-on exploration of common web vulnerabilities.",
    status: "Idea",
    tags: ["Web security", "OWASP", "Fundamentals"],
    blurb:
      "A learning project exploring basic web security concepts in a safe lab setup.",
    highlights: [
      "Top OWASP categories overview",
      "Local lab only",
      "Notes on mitigations",
    ],
    meta: {
      goal: "Understand the basics of common web attacks and how they’re prevented.",
      learned: [
        "Understanding mitigations is more important than memorising attacks",
        "Safe lab environments keep learning ethical + controlled",
      ],
      next: [
        "Pick one category to start (e.g., injection basics)",
        "Use a local intentionally vulnerable app",
        "Write a short “mitigation first” summary",
      ],
      time: "Idea",
      difficulty: "Medium",
    },
    links: [{ label: "Back to projects", href: "/projects" }],
  },
];
