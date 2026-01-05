"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";

const NAV = [
  { href: "/", label: "Home", icon: "⌂" },
  { href: "/projects", label: "Projects", icon: "▢" },
  { href: "/about", label: "About", icon: "👤" },
  { href: "/contact", label: "Contact", icon: "✉" },
];

const EXTRAS = [
  { href: "/writeups", label: "Writeups" },
  { href: "/stack", label: "Stack" },
];

export default function MobileNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    // close drawer on route change
    setOpen(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <div className="xl:hidden">
      {/* Top bar */}
      <div className="sticky top-0 z-40 border-b border-white/10 bg-black/40 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80 hover:bg-white/10"
          >
            Menu
          </button>

          <div className="text-sm font-semibold text-white/80">LostAstr0</div>

          <ThemeToggle compact />
        </div>
      </div>

      {/* Drawer */}
      {open && (
        <div className="fixed inset-0 z-50">
          {/* Backdrop (stronger so page doesn’t look messy behind) */}
          <button
            aria-label="Close menu"
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setOpen(false)}
            type="button"
          />

          {/* Panel */}
          <div className="absolute left-3 top-3 bottom-3 w-[320px] max-w-[85vw]">
            <div
              className={[
                "h-full rounded-[28px] overflow-hidden flex flex-col",
                "bg-white/[0.06] border border-white/15 ring-1 ring-white/10",
                "shadow-[0_18px_60px_rgba(0,0,0,0.45)]",
              ].join(" ")}
            >
              {/* Header */}
              <div className="p-4 pb-3 flex items-start justify-between">
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-full bg-[rgb(var(--accent))]" />
                  <div>
                    <div className="text-sm font-semibold text-white">Jaineel</div>
                    <div className="mt-1 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-[rgb(var(--good))]" />
                      Open for opportunities
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/80 hover:bg-white/10"
                >
                  Close
                </button>
              </div>

              {/* Nav */}
              <div className="px-4">
                <nav className="mt-1 space-y-1">
                  {NAV.map((item) => {
                    const active =
                      item.href === "/"
                        ? pathname === "/"
                        : pathname?.startsWith(item.href);

                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={[
                          "group relative flex items-center gap-3 rounded-2xl px-3 py-2 text-sm transition",
                          active
                            ? "bg-white/10 text-white"
                            : "text-zinc-300 hover:bg-white/5 hover:text-white",
                        ].join(" ")}
                      >
                        <span className="text-white/60 group-hover:text-white/80 transition w-5 text-center">
                          {item.icon}
                        </span>
                        <span className="flex-1">{item.label}</span>
                        {active && (
                          <span className="absolute right-3 h-1.5 w-1.5 rounded-full bg-[rgb(var(--accent))]" />
                        )}
                      </Link>
                    );
                  })}
                </nav>

                {/* Search */}
                <div className="mt-4">
                  <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-3 py-2">
                    <span className="text-white/40">🔎</span>
                    <input
                      placeholder="Search"
                      className="w-full bg-transparent text-sm text-zinc-200 placeholder:text-white/35 outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Scroll area */}
              <div className="flex-1 min-h-0 overflow-y-auto px-4">
                <div className="px-1 py-4">
                  <div className="text-[11px] tracking-[0.28em] text-white/35">
                    EXTRAS
                  </div>

                  <div className="mt-2 space-y-1">
                    {EXTRAS.map((x) => (
                      <Link
                        key={x.href}
                        href={x.href}
                        className="flex items-center justify-between rounded-xl px-2 py-2 text-sm text-zinc-300 hover:bg-white/5 hover:text-white transition"
                      >
                        <span>{x.label}</span>
                        <span className="text-white/35">↗</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="p-4 pt-3">
                <Link
                  href="/contact"
                  className="primaryBtn block w-full rounded-2xl px-4 py-3 text-center text-sm font-medium"
                >
                  Get in touch
                </Link>

                <div className="mt-4 flex items-center justify-between">
                  <ThemeToggle />
                  <div className="text-xs text-white/35">LostAstr0 by Jaineel</div>
                </div>

                <div className="mt-2 text-xs text-white/35">v2</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
