"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
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

export default function Sidebar() {
  const pathname = usePathname();

  return (
    // FIXED = cannot overflow with the page anymore
    <aside className="hidden xl:block fixed left-0 top-0 z-40 p-3 h-[100dvh] w-[324px]">
      <div
        className={[
          "w-[300px] h-[calc(100dvh-24px)] rounded-[28px]",

          // panel
          "bg-white/[0.06]",
          "border border-white/15 ring-1 ring-white/10",

          // IMPORTANT: stop inner rounding leaks
          "overflow-hidden",

          // layout
          "flex flex-col",
        ].join(" ")}
      >
        {/* TOP */}
        <div className="p-4 pb-3">
          <div className="flex items-start gap-3 px-1 pt-1">
            <div className="h-10 w-10 rounded-full bg-[rgb(var(--accent))]" />
            <div className="min-w-0">
              <div className="text-sm font-semibold text-white">Jaineel</div>
              <div className="mt-1 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300">
                <span className="h-1.5 w-1.5 rounded-full bg-[rgb(var(--good))]" />
                Open for opportunities
              </div>
            </div>
          </div>

          <nav className="mt-4 space-y-1">
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

        {/* MIDDLE (scrolls INSIDE panel only) */}
        <div className="flex-1 min-h-0 overflow-y-auto px-4">
          <div className="px-1 pb-4">
            <div className="mt-2 text-[11px] tracking-[0.28em] text-white/35">
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

        {/* BOTTOM */}
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

          <div className="mt-2 flex items-center justify-between text-xs text-white/35">
            <span>v2</span>
            <span />
          </div>
        </div>
      </div>
    </aside>
  );
}
