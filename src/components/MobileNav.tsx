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
  { href: "/writeups", label: "Notes" },
  { href: "/stack", label: "Stack" },
];

export default function MobileNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  /* lock scroll when drawer open */
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

  /* close on route change */
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <div className="xl:hidden">
      {/* ================= TOP BAR ================= */}
      <div className="sticky top-0 z-40 border-b border-white/10 bg-black/35 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1100px] items-center justify-between px-4 py-2.5">
          {/* Menu button */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white/85 hover:bg-white/10 hover:border-white/15 transition"
            aria-label="Open menu"
          >
            <span className="text-lg leading-none">☰</span>
          </button>

          {/* Center identity */}
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2">
            <span className="text-sm font-semibold text-white/90">Jaineel</span>
            <span className="h-1 w-1 rounded-full bg-white/20" />
            <span className="inline-flex items-center gap-2 text-[11px] text-zinc-200/90">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Studying
            </span>
          </div>

          {/* Theme toggle */}
          <div className="inline-flex h-10 items-center rounded-2xl border border-white/10 bg-white/5 px-2 hover:bg-white/10 hover:border-white/15 transition">
            <ThemeToggle compact />
          </div>
        </div>
      </div>

      {/* ================= DRAWER ================= */}
      {open && (
        <div className="fixed inset-0 z-50">
          {/* backdrop */}
          <button
            aria-label="Close menu"
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setOpen(false)}
            type="button"
          />

          {/* panel */}
          <div className="absolute left-3 top-3 bottom-3 w-[320px] max-w-[85vw]">
            <div className="h-full rounded-[28px] overflow-hidden flex flex-col bg-white/[0.06] border border-white/15 ring-1 ring-white/10 shadow-[0_18px_60px_rgba(0,0,0,0.45)]">
              {/* header */}
              <div className="p-4 flex items-start justify-between">
                <div>
                  <div className="text-sm font-semibold text-white">
                    Jaineel
                  </div>
                  <div className="mt-1 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    Studying + building
                  </div>
                </div>

                <button
                  onClick={() => setOpen(false)}
                  className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/80 hover:bg-white/10 transition"
                >
                  Close
                </button>
              </div>

              {/* nav */}
              <div className="px-4">
                <nav className="space-y-1">
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
                        <span className="w-5 text-center text-white/60 group-hover:text-white/80 transition">
                          {item.icon}
                        </span>
                        <span className="flex-1">{item.label}</span>
                        {active && (
                          <span className="absolute right-3 h-1.5 w-1.5 rounded-full bg-sky-400" />
                        )}
                      </Link>
                    );
                  })}
                </nav>
              </div>

              {/* extras */}
              <div className="flex-1 overflow-y-auto px-4 py-4">
                <div className="text-[11px] tracking-[0.28em] text-white/35">
                  EXTRAS
                </div>

                <div className="mt-2 space-y-1">
                  {EXTRAS.map((x) => (
                    <Link
                      key={x.href}
                      href={x.href}
                      className="flex items-center justify-between rounded-xl px-3 py-2 text-sm text-zinc-300 hover:bg-white/5 hover:text-white transition"
                    >
                      <span>{x.label}</span>
                      <span className="text-white/35">↗</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* footer */}
              <div className="p-4">
                <Link
                  href="/contact"
                  className="block w-full rounded-2xl bg-sky-500 px-4 py-3 text-center text-sm font-medium text-black hover:bg-sky-400 transition"
                >
                  Get in touch
                </Link>

                <div className="mt-4 flex items-center justify-between">
                  <ThemeToggle />
                  <div className="text-xs text-white/35">v2</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
