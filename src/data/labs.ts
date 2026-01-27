// src/data/labs.ts

export type LabStatus = "Completed" | "In progress" | "Planned";

export type Lab = {
  slug: string;
  title: string;
  description: string;
  status: LabStatus;
  tags: string[];
  blurb?: string;
  highlights?: string[];
  links?: { label: string; href: string }[];
  // Optional meta used by your ProjectModal
  meta?: {
    time?: string;
    difficulty?: "Easy" | "Medium" | "Hard";
    goal?: string;
    learned?: string[];
    next?: string[];
  };
};

export const LABS: Lab[] = [
  {
    slug: "wireshark-traffic-basics",
    title: "Wireshark Traffic Basics",
    description:
      "Capture and inspect common traffic (DNS/HTTP/HTTPS), learn filters, and identify request/response patterns.",
    status: "In progress",
    tags: ["Wireshark", "Networking", "Analysis"],
    blurb:
      "A practical lab focused on reading packet captures: filtering noise, following streams, and understanding what “normal” looks like.",
    highlights: [
      "Display filters: dns, http, tls, ip.addr, tcp.port",
      "Follow TCP stream + reconstruct simple requests",
      "Spot common DNS patterns and suspicious spikes",
      "Export objects (when applicable) and document findings",
    ],
    meta: {
      time: "1–2 hrs",
      difficulty: "Easy",
      goal: "Get comfortable reading PCAPs and using Wireshark filters to quickly find what matters.",
      learned: [
        "How to reduce noise with display filters",
        "How DNS queries map to endpoints",
        "How to follow conversations and streams",
      ],
      next: [
        "Do the same on a larger PCAP",
        "Write a repeatable checklist of filters",
      ],
    },
  },
  {
    slug: "nmap-scan-basics",
    title: "Nmap Scan Basics",
    description:
      "Run safe scans against a local lab target and interpret ports, services, and fingerprints.",
    status: "Planned",
    tags: ["Nmap", "Recon", "Networking"],
    blurb:
      "A beginner recon lab using a local VM/network target (not public IPs). Focus is on reading output and understanding what Nmap is telling you.",
    highlights: [
      "SYN scan basics (-sS) and service detection (-sV)",
      "OS detection overview (-O) in lab conditions",
      "Output formats (-oN / -oX) for notes",
      "Common flags and when *not* to use them",
    ],
    meta: {
      time: "1 hr",
      difficulty: "Easy",
      goal: "Understand what open ports mean and how to interpret service detection output.",
      next: [
        "Create a small cheatsheet of commands you actually use",
        "Compare results across 2 different targets",
      ],
    },
  },
  {
    slug: "linux-permissions-hardening",
    title: "Linux Permissions + Hardening Basics",
    description:
      "Users/groups, file permissions, and a few simple hardening checks you can repeat.",
    status: "Planned",
    tags: ["Linux", "Hardening", "Basics"],
    blurb:
      "This lab is about building intuition: what permissions mean, why misconfigurations are dangerous, and how to spot them fast.",
    highlights: [
      "chmod/chown basics and common pitfalls",
      "SUID/SGID awareness (what it is, why it matters)",
      "SSH config sanity checks",
      "Basic auditing commands (who, last, journalctl)",
    ],
    meta: {
      time: "1–2 hrs",
      difficulty: "Medium",
      goal: "Be able to explain Linux permissions and run a quick hardening sanity check.",
    },
  },
  {
    slug: "log-review-auth",
    title: "Auth Log Review Practice",
    description:
      "Practice spotting brute-force patterns and suspicious login attempts in logs.",
    status: "Planned",
    tags: ["Blue team", "Logs", "Analysis"],
    blurb:
      "A small blue-team lab: look for failed logins, repeated IPs, odd timestamps, and build a simple investigation flow.",
    highlights: [
      "Recognize brute-force patterns",
      "Extract repeated IPs/users quickly",
      "Basic triage notes format",
    ],
    meta: {
      time: "45–90 mins",
      difficulty: "Medium",
      goal: "Build a repeatable log triage workflow you can apply to other systems.",
    },
  },
];
