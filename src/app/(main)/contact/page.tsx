"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

function cx(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export default function ContactPage() {
  // TODO: replace with your real details
  const EMAIL = "you@example.com";
  const GITHUB_URL = "https://github.com/";
  const LINKEDIN_URL = "https://www.linkedin.com/";

  const [copied, setCopied] = useState<null | "email" | "template" | "subject">(null);

  const template = useMemo(() => {
    return [
      "Hi Jaineel — I’m reaching out about [role/collab].",
      "",
      "Reason: [role / internship / collab / question]",
      "Timeframe: [when you need a response]",
      "Context: [short overview]",
      "Links: [GitHub / project / portfolio]",
      "",
      "Thanks,",
      "[name]",
    ].join("\n");
  }, []);

  const subjectIdeas = useMemo(
    () => [
      "Internship — [Company] — [Role]",
      "Entry-level role — [Role] — [Location/Remote]",
      "Collaboration — [Topic/Project]",
      "Question — [Project name / topic]",
      "URGENT — [Short reason]",
    ],
    []
  );

  async function copyToClipboard(text: string, kind: "email" | "template" | "subject") {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
    }
    setCopied(kind);
    window.setTimeout(() => setCopied(null), 1100);
  }

  function openEmailClient() {
    const subject = encodeURIComponent("Hello Jaineel — [Role/Collab]");
    const body = encodeURIComponent(template);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  }

  // ---- shared styles ----
  const wrap = "mx-auto w-full max-w-[1120px] px-4 sm:px-6 pt-10 sm:pt-12 pb-10";
  const panel =
    "rounded-3xl border border-white/10 bg-white/[0.03] shadow-[0_0_0_1px_rgba(255,255,255,0.04)] overflow-hidden";
  const colPad = "p-6 sm:p-7";
  const divider = "border-white/10";
  const label = "text-[11px] tracking-[0.18em] text-white/40";
  const title = "text-sm font-semibold text-white/90";
  const sub = "mt-1 text-xs text-white/45";
  const btn =
    "inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-200 hover:bg-white/10 hover:border-white/15 transition";
  const btnSm =
    "inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-zinc-200 hover:bg-white/10 hover:border-white/15 transition";
  const btnPrimary =
    "inline-flex items-center justify-center rounded-full bg-sky-500 px-5 py-2 text-sm font-medium text-black hover:bg-sky-400 transition";
  const pill =
    "inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200";

  // “section” rhythm: slightly tighter than before
  const section = "py-4 first:pt-0 last:pb-0";
  const sectionBorder = "border-t border-white/10";

  const card = "rounded-2xl border border-white/10 bg-black/10 p-4";
  const row = "rounded-2xl border border-white/10 bg-white/[0.02] px-3 py-2";

  return (
    <div className="relative w-full">
      <section className={wrap}>
        {/* HEADER */}
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white">
                Contact
              </h1>
              <span className={pill}>
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Open to opportunities
              </span>
            </div>

            <p className="mt-3 max-w-[78ch] text-sm text-zinc-200/90 leading-relaxed">
              Email is the best way to reach me. If you’re contacting me about a role,
              internship, or collaboration, include a short overview + links and I’ll get back to you.
            </p>
          </div>

          <Link href="/" className={cx(btn, "shrink-0")}>
            ← Home
          </Link>
        </div>

        {/* MAIN PANEL */}
        <div className={cx(panel, "mt-8")}>
          <div className="grid lg:grid-cols-2">
            {/* LEFT (ACTION) */}
            <div className={cx(colPad, "lg:border-r", divider)}>
              {/* Email CTA */}
              <div className={section}>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className={title}>Send a message</div>
                    <div className={label}>FASTEST RESPONSE</div>
                  </div>
                  <span className={pill}>Reply: 1–3 days</span>
                </div>

                <div className={cx(card, "mt-4")}>
                  <div className={label}>EMAIL</div>

                  <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div className="text-base font-semibold text-white">{EMAIL}</div>
                    <div className="flex flex-wrap gap-2">
                      <button type="button" onClick={() => copyToClipboard(EMAIL, "email")} className={btn}>
                        {copied === "email" ? "Copied ✓" : "Copy email"}
                      </button>
                      <button type="button" onClick={openEmailClient} className={btnPrimary}>
                        Email me
                      </button>
                    </div>
                  </div>

                  <div className={cx(sub, "mt-2")}>
                    Tip: short + specific beats long + vague.
                  </div>
                </div>

                {/* socials (small) */}
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  <span className={cx(label, "mr-1")}>ALSO FIND ME ON</span>
                  <a href={GITHUB_URL} target="_blank" rel="noreferrer" className={btnSm}>
                    GitHub ↗
                  </a>
                  <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className={btnSm}>
                    LinkedIn ↗
                  </a>
                </div>
              </div>

              {/* Template */}
              <div className={cx(section, sectionBorder)}>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className={title}>Quick message template</div>
                    <div className={sub}>Copy/paste into your email if you want</div>
                  </div>

                  <button
                    type="button"
                    onClick={() => copyToClipboard(template, "template")}
                    className={btn}
                  >
                    {copied === "template" ? "Copied ✓" : "Copy template"}
                  </button>
                </div>

                <pre className="mt-4 whitespace-pre-wrap rounded-2xl border border-white/10 bg-black/20 p-4 text-sm text-zinc-100/90 leading-relaxed">
{template}
                </pre>

                <div className="mt-3 flex flex-wrap gap-2">
                  <button type="button" onClick={openEmailClient} className={btn}>
                    Open in email
                  </button>
                  <Link href="/projects" className={btn}>
                    View projects
                  </Link>
                </div>
              </div>

              {/* Subject ideas (clean list, not big box grid) */}
              <div className={cx(section, sectionBorder)}>
                <div className={title}>Subject ideas</div>
                <div className={sub}>Helps your email stand out + sort correctly</div>

                <div className="mt-3 space-y-2">
                  {subjectIdeas.map((s) => (
                    <div key={s} className={cx(row, "flex items-center justify-between gap-3")}>
                      <span className="min-w-0 truncate text-sm text-zinc-200/90">{s}</span>
                      <button
                        type="button"
                        onClick={() => copyToClipboard(s, "subject")}
                        className={btnSm}
                      >
                        {copied === "subject" ? "✓" : "Copy"}
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* tiny note inside panel */}
              <div className={cx("mt-6 pt-4 border-t border-white/10 text-xs text-white/35")}>
                If something looks broken, start from Home or Projects.
              </div>
            </div>

            {/* RIGHT (INFO) */}
            <div className={colPad}>
              {/* TOP: what to include + status (compact stack) */}
              <div className={section}>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                  {/* What to include */}
                  <div className={card}>
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className={label}>WHAT TO INCLUDE</div>
                        <div className={cx(title, "mt-2")}>So I can reply fast</div>
                      </div>
                      <span className={pill}>
                        <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                        Quick
                      </span>
                    </div>

                    <ul className="mt-4 space-y-3 text-sm text-zinc-200/90">
                      {[
                        { t: "Reason", d: "role / internship / collab / question" },
                        { t: "Timeframe", d: "when you need a response by" },
                        { t: "Links", d: "GitHub / project / portfolio" },
                      ].map((x) => (
                        <li key={x.t} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/25" />
                          <div>
                            <div className="text-white/90 font-medium">{x.t}</div>
                            <div className="text-xs text-white/45">{x.d}</div>
                          </div>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.02] p-3 text-xs text-white/55">
                      If it’s urgent, put <span className="text-white/85 font-semibold">URGENT</span> in the subject.
                    </div>
                  </div>

                  {/* Status */}
                  <div className={card}>
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className={label}>STATUS</div>
                        <div className={cx(title, "mt-2")}>Current availability</div>
                      </div>
                      <span className={pill}>
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        Open
                      </span>
                    </div>

                    <div className="mt-4">
                      <div className="flex items-center justify-between text-xs text-white/55">
                        <span>Response</span>
                        <span>Usually 1–3 days</span>
                      </div>

                      <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-white/[0.06]">
                        <div className="h-full w-[70%] rounded-full bg-emerald-400/80" />
                      </div>

                      <div className="mt-3 text-xs text-white/45">
                        Best for: internships, entry-level roles, and small collabs.
                      </div>

                      <div className="mt-4 flex flex-wrap gap-2">
                        <Link href="/projects" className={btnSm}>
                          Browse work
                        </Link>
                        <button type="button" onClick={openEmailClient} className={btnSm}>
                          Email
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* How I work */}
              <div className={cx(section, sectionBorder)}>
                <div className={label}>HOW I WORK</div>
                <div className={cx(title, "mt-2")}>What you can expect</div>

                <div className="mt-4 space-y-3">
                  {[
                    { t: "Clear communication", d: "Short, direct updates — no overcomplicated explanations." },
                    { t: "Practical focus", d: "I prioritise solutions that actually work over theory-heavy answers." },
                    { t: "Honest timelines", d: "If something will take longer, I’ll say so early." },
                    { t: "Learning mindset", d: "I ask questions when needed and improve quickly." },
                  ].map((x) => (
                    <div key={x.t} className="rounded-2xl border border-white/10 bg-black/10 px-4 py-3">
                      <div className="text-white/90 font-medium">{x.t}</div>
                      <div className="mt-1 text-xs text-white/45 leading-relaxed">{x.d}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Best fit + Not fit (side-by-side, cleaner) */}
              <div className={cx(section, sectionBorder)}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className={card}>
                    <div className={label}>BEST FIT FOR</div>
                    <ul className="mt-3 space-y-2 text-sm text-zinc-200/90">
                      {[
                        "Entry-level cyber roles",
                        "Internships / grad pathways",
                        "Small collabs & learning projects",
                        "Questions about my work",
                      ].map((x) => (
                        <li key={x} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400/80" />
                          <span className="leading-relaxed">{x}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={card}>
                    <div className={label}>NOT THE BEST FIT FOR</div>
                    <ul className="mt-3 space-y-2 text-sm text-zinc-200/90">
                      {[
                        "Large unpaid builds with tight deadlines",
                        "Anything that involves sharing private data",
                        "Requests to bypass security / do anything sketchy",
                      ].map((x) => (
                        <li key={x} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-400/70" />
                          <span className="leading-relaxed">{x}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom nav */}
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Link href="/projects" className={btn}>
            View projects →
          </Link>
          <Link href="/" className="text-sm text-zinc-300 hover:text-white transition">
            ← Back to home
          </Link>
        </div>
      </section>
    </div>
  );
}
