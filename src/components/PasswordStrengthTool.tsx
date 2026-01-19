// src/components/PasswordStrengthTool.tsx
"use client";

import { useMemo, useState } from "react";
import { analyzePassword, PasswordAnalysis } from "@/lib/passwordChecker";

function scoreLabel(score: number) {
  if (score >= 80) return "Very Strong";
  if (score >= 60) return "Strong";
  if (score >= 40) return "Medium";
  if (score >= 20) return "Weak";
  return "Very Weak";
}

export default function PasswordStrengthTool() {
  const [value, setValue] = useState("");
  const [show, setShow] = useState(false);

  const result = useMemo(() => {
    const r = analyzePassword(value);
    return r;
  }, [value]);

  const analysis = (result as any)?.error ? null : (result as PasswordAnalysis);

  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 sm:p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-[11px] tracking-[0.22em] text-white/40">
            TRY IT
          </div>
          <div className="mt-1 text-sm text-zinc-300">
            Runs locally in your browser — nothing is saved.
          </div>
        </div>

        <button
          type="button"
          onClick={() => {
            setValue("");
            setShow(false);
          }}
          className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-zinc-200 hover:bg-white/10 transition"
        >
          Clear
        </button>
      </div>

      <div className="mt-4 flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            type={show ? "text" : "password"}
            placeholder="Enter a password to test…"
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-zinc-200 placeholder:text-white/35 outline-none focus:border-white/20"
            autoComplete="off"
          />
          <button
            type="button"
            onClick={() => setShow((v) => !v)}
            className="shrink-0 rounded-2xl border border-white/10 bg-white/5 px-3 py-3 text-sm text-zinc-200 hover:bg-white/10 transition"
            aria-label={show ? "Hide password" : "Show password"}
          >
            {show ? "🙈" : "👁️"}
          </button>
        </div>

        {/* Score bar */}
        <div className="mt-2">
          <div className="flex items-center justify-between text-xs text-zinc-400">
            <span>Score</span>
            <span className="text-zinc-200">
              {analysis ? `${analysis.score}/100 · ${scoreLabel(analysis.score)}` : "—"}
            </span>
          </div>

          <div className="mt-2 h-2 w-full rounded-full bg-white/[0.06] overflow-hidden">
            <div
              className="h-full rounded-full bg-sky-500/80 transition-[width] duration-300"
              style={{ width: `${analysis ? analysis.score : 0}%` }}
            />
          </div>
        </div>

        {/* Checks */}
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
            <div className="text-[11px] tracking-[0.22em] text-white/40">
              CHECKS
            </div>

            <ul className="mt-3 space-y-2 text-sm text-zinc-200/90">
              <li className="flex items-center justify-between gap-3">
                <span>Length (8+)</span>
                <span className={analysis?.length >= 8 ? "text-emerald-300" : "text-zinc-400"}>
                  {analysis ? (analysis.length >= 8 ? "✅" : "⚠️") : "—"}
                </span>
              </li>
              <li className="flex items-center justify-between gap-3">
                <span>Upper + lower</span>
                <span className={(analysis?.hasUppercase && analysis?.hasLowercase) ? "text-emerald-300" : "text-zinc-400"}>
                  {analysis ? ((analysis.hasUppercase && analysis.hasLowercase) ? "✅" : "⚠️") : "—"}
                </span>
              </li>
              <li className="flex items-center justify-between gap-3">
                <span>Numbers</span>
                <span className={analysis?.hasDigits ? "text-emerald-300" : "text-zinc-400"}>
                  {analysis ? (analysis.hasDigits ? "✅" : "⚠️") : "—"}
                </span>
              </li>
              <li className="flex items-center justify-between gap-3">
                <span>Special chars</span>
                <span className={analysis?.hasSpecial ? "text-emerald-300" : "text-zinc-400"}>
                  {analysis ? (analysis.hasSpecial ? "✅" : "⚠️") : "—"}
                </span>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
            <div className="text-[11px] tracking-[0.22em] text-white/40">
              WARNINGS
            </div>

            <ul className="mt-3 space-y-2 text-sm text-zinc-200/90">
              <li className="flex items-center justify-between gap-3">
                <span>Common password</span>
                <span className={analysis?.isCommon ? "text-red-300" : "text-emerald-300"}>
                  {analysis ? (analysis.isCommon ? "🚨" : "✅") : "—"}
                </span>
              </li>
              <li className="flex items-center justify-between gap-3">
                <span>Repeated chars</span>
                <span className={analysis?.repeatedChars ? "text-orange-300" : "text-emerald-300"}>
                  {analysis ? (analysis.repeatedChars ? "⚠️" : "✅") : "—"}
                </span>
              </li>
              <li className="flex items-center justify-between gap-3">
                <span>Sequential pattern</span>
                <span className={analysis?.sequentialChars ? "text-orange-300" : "text-emerald-300"}>
                  {analysis ? (analysis.sequentialChars ? "⚠️" : "✅") : "—"}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Feedback */}
        <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
          <div className="text-[11px] tracking-[0.22em] text-white/40">
            FEEDBACK
          </div>

          <div className="mt-2 text-sm text-zinc-200/90">
            {!value ? (
              <span className="text-zinc-400">Type a password above to see suggestions.</span>
            ) : (result as any)?.error ? (
              <span className="text-zinc-400">{(result as any).error}</span>
            ) : (
              <ul className="space-y-2">
                {analysis!.feedback.map((f, idx) => (
                  <li key={`${f}-${idx}`} className="leading-relaxed">
                    {f}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="text-xs text-white/35 mt-1">
          Tip: test a <span className="text-white/55">dummy password</span> (don’t paste real ones).
        </div>
      </div>
    </div>
  );
}
