// src/app/(main)/about/page.tsx
"use client";

import Link from "next/link";
import { useMemo } from "react";
import { motion } from "framer-motion";
import { PROJECTS } from "@/data/projects";
import { getStatusStyle } from "@/lib/projectColours";

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0 },
};

function cn(...classes: Array<string | false | undefined | null>) {
  return classes.filter(Boolean).join(" ");
}

function Pill({
  children,
  tone = "neutral",
}: {
  children: React.ReactNode;
  tone?: "neutral" | "sky" | "emerald" | "amber";
}) {
  const tones: Record<string, string> = {
    neutral: "border-white/10 bg-white/5 text-zinc-200",
    sky: "border-sky-400/20 bg-sky-500/10 text-sky-100",
    emerald: "border-emerald-400/20 bg-emerald-500/10 text-emerald-100",
    amber: "border-amber-400/20 bg-amber-500/10 text-amber-100",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs",
        tones[tone]
      )}
    >
      {children}
    </span>
  );
}

function SectionHeader({
  kicker,
  title,
  desc,
}: {
  kicker: string;
  title: string;
  desc?: string;
}) {
  return (
    <div className="mb-4">
      <div className="text-[11px] tracking-[0.18em] text-white/40">
        {kicker}
      </div>
      <div className="mt-1 text-lg font-semibold text-white/90">{title}</div>
      {desc ? <div className="mt-1 text-sm text-zinc-300">{desc}</div> : null}
    </div>
  );
}

function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-white/10 bg-white/[0.03]",
        "shadow-[0_0_0_1px_rgba(255,255,255,0.04)]",
        className
      )}
    >
      {children}
    </div>
  );
}

export default function AboutPage() {
  const featured = useMemo(() => PROJECTS.slice(0, 3), []);

  return (
    <div className="relative w-full">
      <section className="mx-auto w-full max-w-[980px] px-2 sm:px-0 pt-10 sm:pt-12 pb-16">
        {/* HERO */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="flex items-start justify-between gap-4"
        >
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <h1 className="text-3xl sm:text-4xl font-semibold text-white">
                About
              </h1>
              <Pill tone="emerald">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Open to learning & opportunities
              </Pill>
            </div>

            <p className="mt-3 text-sm text-zinc-300 max-w-[75ch] leading-relaxed">
              I’m <span className="text-white/90 font-medium">Jaineel</span>{" "}
              (<span className="text-white/80">LostAstr0</span>) — focused on
              building practical cyber security skills through hands-on{" "}
              <span className="text-white/90 font-medium">projects</span>, labs,
              and consistent learning. I care about clear systems, clean UI, and
              shipping things that actually work.
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              <Pill tone="sky">Networking</Pill>
              <Pill tone="sky">Linux</Pill>
              <Pill tone="sky">Python</Pill>
              <Pill tone="sky">Web security</Pill>
              <Pill tone="neutral">Next.js</Pill>
              <Pill tone="neutral">TypeScript</Pill>
            </div>
          </div>

          <Link
            href="/#contact"
            className="shrink-0 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-200 hover:bg-white/10 hover:border-white/15 transition"
          >
            Get in touch
          </Link>
        </motion.div>

        {/* SNAPSHOT ROW */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.08 }}
          className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {[
            {
              label: "Right now",
              value: "Fundamentals + portfolio v2",
              hint: "projects + systems",
              dot: "bg-sky-400",
            },
            {
              label: "Core tools",
              value: "Linux • Python • Wireshark",
              hint: "plus web basics",
              dot: "bg-emerald-400",
            },
            {
              label: "Style",
              value: "Clean UI + clarity",
              hint: "minimal but not boring",
              dot: "bg-white/40",
            },
            {
              label: "Goal",
              value: "Entry-level cyber role",
              hint: "keep levelling up",
              dot: "bg-amber-300",
            },
          ].map((x) => (
            <Card key={x.label} className="p-4">
              <div className="flex items-center justify-between">
                <div className="text-xs text-white/45">{x.label}</div>
                <span className={cn("h-1.5 w-1.5 rounded-full", x.dot)} />
              </div>
              <div className="mt-2 text-sm font-semibold text-white/90">
                {x.value}
              </div>
              <div className="mt-1 text-xs text-zinc-400">{x.hint}</div>
            </Card>
          ))}
        </motion.div>

        {/* STORY + PRINCIPLES */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.14 }}
          className="mt-6"
        >
          <Card className="relative overflow-hidden">
            {/* subtle top hairline */}
            <div className="pointer-events-none absolute left-6 right-6 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

            <div className="p-6 sm:p-7 grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
              <div>
                <SectionHeader
                  kicker="JOURNEY"
                  title="Learning by building (and building by learning)"
                  desc="I don’t want “theory only”. I want proof — projects, tools, and clean explanations."
                />

                <div className="text-sm text-zinc-300 leading-relaxed space-y-3">
                  <p>
                    My focus is simple: pick a concept (networking, Linux, web
                    security), build a small project around it, and refine it
                    until the result feels usable and clear.
                  </p>
                  <p>
                    I’m also building this portfolio as a long-term system — not
                    just a page — so I can keep adding projects as my skills
                    grow.
                  </p>
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
                <div className="text-sm font-semibold text-white/90">
                  How I work
                </div>
                <div className="mt-1 text-[11px] tracking-[0.18em] text-white/40">
                  PRINCIPLES
                </div>

                <ul className="mt-4 space-y-3 text-sm text-zinc-200/90">
                  {[
                    ["Clarity first", "Make it readable + explainable."],
                    ["Small → solid", "Ship a small version, then polish it."],
                    ["Real tools", "Practice with the same tools used IRL."],
                    ["Consistency", "Progress comes from repetition."],
                  ].map(([t, d]) => (
                    <li key={t} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400/80" />
                      <div className="min-w-0">
                        <div className="text-white/90">{t}</div>
                        <div className="text-xs text-zinc-400">{d}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* SKILL MAP */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.18 }}
          className="mt-10"
        >
          <SectionHeader
            kicker="TOOLS & SKILLS"
            title="A practical skill map (what I’m actually using)"
            desc="No fluff — these are the areas I’m actively practising."
          />

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            {[
              {
                title: "Security basics",
                items: [
                  ["OWASP basics", "Learning"],
                  ["Threat thinking", "Learning"],
                  ["Auth concepts", "Learning"],
                ],
              },
              {
                title: "Networking",
                items: [
                  ["TCP/IP fundamentals", "Using"],
                  ["DNS + HTTP", "Using"],
                  ["Wireshark", "Using"],
                ],
              },
              {
                title: "Systems & scripting",
                items: [
                  ["Linux CLI", "Using"],
                  ["Bash", "Learning"],
                  ["Python", "Using"],
                ],
              },
            ].map((col) => (
              <Card key={col.title} className="p-5">
                <div className="text-sm font-semibold text-white/90">
                  {col.title}
                </div>
                <div className="mt-3 space-y-2">
                  {col.items.map(([label, level]) => (
                    <div
                      key={label}
                      className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3"
                    >
                      <div className="text-sm text-white/85">{label}</div>
                      <span
                        className={cn(
                          "rounded-full border px-3 py-1 text-xs",
                          level === "Using"
                            ? "border-emerald-400/25 bg-emerald-500/10 text-emerald-100"
                            : "border-white/10 bg-white/5 text-zinc-200"
                        )}
                      >
                        {level}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-3 text-xs text-white/35">
                  I update this as I ship more projects.
                </div>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* TIMELINE */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.22 }}
          className="mt-10"
        >
          <SectionHeader
            kicker="TIMELINE"
            title="Where I’m heading"
            desc="Simple and honest: current phase → next phase."
          />

          <Card className="p-5">
            <div className="space-y-3">
              {[
                {
                  when: "Now",
                  dot: "bg-sky-400",
                  text: "Building portfolio projects + strengthening fundamentals (networking, Linux, scripting).",
                },
                {
                  when: "2025–2026",
                  dot: "bg-emerald-400",
                  text: "Cert IV Cyber Security — labs, practical tooling, and a growing project portfolio.",
                },
                {
                  when: "2027–2030 (target)",
                  dot: "bg-amber-300",
                  text: "Bachelor of IT (Computer Science major) at QUT — deeper CS foundations + security engineering focus.",
                },
              ].map((x) => (
                <div
                  key={x.when}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-4"
                >
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-semibold text-white/90">
                      {x.when}
                    </div>
                    <span className={cn("h-1.5 w-1.5 rounded-full", x.dot)} />
                  </div>
                  <div className="mt-2 text-sm text-zinc-300 leading-relaxed">
                    {x.text}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* FEATURED PROJECTS */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.26 }}
          className="mt-10"
        >
          <SectionHeader
            kicker="FEATURED"
            title="A few things I’ve built"
            desc="Quick examples — the full list is on the Projects page."
          />

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {featured.map((p) => {
              const s = getStatusStyle(p.status);
              return (
                <Card key={p.slug} className="overflow-hidden">
                  <div className="relative h-20">
                    <div className={cn("absolute inset-0", s.banner)} />
                    <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] to-transparent" />
                    <div className="absolute left-4 top-4">
                      <Pill tone="neutral">
                        <span className={cn("h-1.5 w-1.5 rounded-full", s.dot)} />
                        {p.status}
                      </Pill>
                    </div>
                  </div>

                  <div className="p-5">
                    <div className="text-sm font-semibold text-white/90">
                      {p.title}
                    </div>
                    <div className="mt-2 text-xs text-zinc-400 line-clamp-2">
                      {p.description}
                    </div>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {(p.tags ?? []).slice(0, 3).map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-zinc-200"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="mt-4">
                      <Link
                        href="/projects"
                        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-zinc-200 hover:bg-white/10 hover:border-white/15 transition"
                      >
                        View in Projects <span className="text-white/35">→</span>
                      </Link>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center rounded-full bg-sky-500 px-5 py-2.5 text-sm font-medium text-black hover:bg-sky-400 transition"
            >
              View projects →
            </Link>
            <Link
              href="/"
              className="text-sm text-zinc-300 hover:text-white transition"
            >
              ← Back to home
            </Link>
          </div>

          <div className="mt-6 text-xs text-white/35">
            Last updated: <span className="text-white/55">this week</span>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
