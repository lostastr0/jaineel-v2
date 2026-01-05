"use client";

import { useTheme } from "@/lib/theme";

export default function ThemeToggle({ compact = false }: { compact?: boolean }) {
  const { theme, toggle } = useTheme();

  return (
    <button
      onClick={toggle}
      className={[
        "inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5",
        "px-3 py-2 text-xs text-white/80 hover:bg-white/10 transition",
        compact ? "px-2.5 py-2" : "",
      ].join(" ")}
      aria-label="Toggle theme"
      type="button"
    >
      <span className="text-sm">{theme === "dark" ? "🌙" : "☀️"}</span>
      <span>{theme === "dark" ? "Dark" : "Light"}</span>
    </button>
  );
}
