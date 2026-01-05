"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

type Theme = "dark" | "light";

type ThemeContextValue = {
  theme: Theme;
  setTheme: (t: Theme) => void;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

function applyThemeToHtml(theme: Theme) {
  const html = document.documentElement;
  html.dataset.theme = theme;

  // Optional: if you also want Tailwind "dark:" variants later
  if (theme === "dark") html.classList.add("dark");
  else html.classList.remove("dark");
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("dark");

  // Load saved theme (or system preference) on mount
  useEffect(() => {
    const saved = window.localStorage.getItem("theme") as Theme | null;
    if (saved === "dark" || saved === "light") {
      setThemeState(saved);
      applyThemeToHtml(saved);
      return;
    }

    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    const initial: Theme = prefersDark ? "dark" : "light";
    setThemeState(initial);
    applyThemeToHtml(initial);
    window.localStorage.setItem("theme", initial);
  }, []);

  const setTheme = (t: Theme) => {
    setThemeState(t);
    applyThemeToHtml(t);
    window.localStorage.setItem("theme", t);
  };

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  const value = useMemo(() => ({ theme, setTheme, toggleTheme }), [theme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used inside <ThemeProvider />");
  return ctx;
}
