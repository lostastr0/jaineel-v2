// src/components/PasswordCheckerWidget.tsx
"use client";

import { useMemo, useState } from "react";
import { analyzePassword } from "@/lib/passwordChecker";

function levelStyle(level: string) {
  // Keep your aesthetic: subtle + readable, no rainbow.
  switch (level) {
    case "Very Strong":
      return { dot: "bg-emerald-400", bar: "bg-emerald-400/80", glow: "shadow-[0_0_18px_rgba(52,211,153,0.25)]" };
    case "Strong":
      return { dot: "bg-sky-400", bar: "bg-sky-400/80", glow: "shadow-[0_0_18px_rgba(56,189,248,0.25)]" };
    case "Medium":
      return { dot: "bg-yellow-300", bar: "bg-yellow-300/70", glow: "shadow-[0_0_18px_rgba(253,224,71,0.20)]" };
    case "Weak":
      return { dot: "bg-orange-300", bar: "bg-orange-300/70", glow: "shadow-[0_0_18px_rgba(253,186,116,0.20)]" };
    default:
      return { dot: "bg-rose-300", bar: "bg-rose-300/70", glow: "shadow-[0_0_18px_rgba(253,164,175,0.20)]" };
  }
}

export default function PasswordCheckerWidget() {
  const [pwd, setPwd] = useState("");
  const [show, setShow] = useState(false);

  const result = useMemo(() => analyzePassword(pwd), [pwd]);
  const ok = typeof (result as any).error === "undefined";

  const score = ok ? (result as any).strength_score as number : 0;
  const level = ok ? (result as any).strength_level as string : "Very Weak";
  const fb = ok ? ((result as any).feedback as string[]) : [];
  const s = levelStyle(level);

  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="text-[11px] tracking-[0.18em] text-white/40">TRY IT</div>
          <div className="mt-1 text-sm text-zinc-200">
            Test a password locally — nothing is saved or sent anywhere.
          </div>
        </div>

        <label className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200">
          <input
            type="checkbox"
            checked={show}
            onChange={(e) => setShow(e.target.checked)}
            className="h-4 w-4 accent-sky-400"
          />
          Show
        </label>
      </div>

      <div className="mt-4 flex flex-col gap-3">
        <input
          value={pwd}
          onChange={(e) => setPwd(e.target.value)}
          type={show ? "text" : "password"}
          placeholder="Type a password to analyze…"
          className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-zinc-100 placeholder:text-white/25 outline-none focus:border-white/20"
        />

        {/* score row */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200">
            <span className={`h-1.5 w-1.5 rounded-full ${s.dot} ${s.glow}`} />
            <span className="text-white/70">Strength:</span>
            <span className="text-white">{level}</span>
          </div>

          <div className="text-xs text-white/55">
            Score: <span className="text-white/90">{score}</span>/100
          </div>
        </div>

        {/* progress */}
        <div className="h-2 w-full overflow-hidden rounded-full bg-white/[0.06]">
          <div
            className={`h-full rounded-full ${s.bar} ${s.glow} transition-[width] duration-300`}
            style={{ width: `${Math.max(0, Math.min(100, score))}%` }}
          />
        </div>

        {/* quick flags */}
        {ok && (
          <div className="grid gap-2 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-3">
              <div className="text-[11px] tracking-[0.18em] text-white/40">LENGTH</div>
              <div className="mt-1 text-sm text-zinc-200">{(result as any).length} chars</div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-3">
              <div className="text-[11px] tracking-[0.18em] text-white/40">VARIETY</div>
              <div className="mt-1 text-sm text-zinc-200">
                {[
                  (result as any).has_lowercase ? "a-z" : null,
                  (result as any).has_uppercase ? "A-Z" : null,
                  (result as any).has_digits ? "0-9" : null,
                  (result as any).has_special ? "!@#" : null,
                ]
                  .filter(Boolean)
                  .join(" • ") || "—"}
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-3">
              <div className="text-[11px] tracking-[0.18em] text-white/40">FLAGS</div>
              <div className="mt-1 text-sm text-zinc-200">
                {(result as any).is_common ? "Common" : "Not common"}
                {((result as any).repeated_chars || (result as any).sequential_chars) ? " • Pattern" : ""}
              </div>
            </div>
          </div>
        )}

        {/* feedback */}
        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
          <div className="text-[11px] tracking-[0.18em] text-white/40">FEEDBACK</div>

          {!ok ? (
            <div className="mt-2 text-sm text-zinc-300">
              Type something to see feedback.
            </div>
          ) : (
            <ul className="mt-3 space-y-2 text-sm text-zinc-200/90">
              {fb.map((x) => (
                <li key={x} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/25" />
                  <span className="leading-relaxed">{x}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="text-xs text-white/35">
          Tip: longer passphrases usually beat complexity. Try 3–4 random words + one symbol.
        </div>
      </div>
    </div>
  );
}
