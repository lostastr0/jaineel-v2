"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "@/components/ThemeToggle";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="h-full px-6 py-6 flex flex-col">
      {/* Header */}
      <div>
        <div className="text-sm font-semibold text-white/90">Jaineel</div>
        <div className="mt-1 text-xs text-zinc-400">
          Cyber security student
        </div>

        {/* Status */}
        <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          Open to learning & opportunities
        </div>
      </div>

      {/* Nav */}
      <nav className="mt-8 space-y-1">
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
                "flex items-center justify-between rounded-2xl px-3 py-2 text-sm transition",
                active
                  ? "bg-white/10 text-white"
                  : "text-zinc-300 hover:bg-white/5 hover:text-white",
              ].join(" ")}
            >
              <span>{item.label}</span>
              {active && (
                <span className="h-1.5 w-1.5 rounded-full bg-[rgb(var(--accent))]" />
              )}
            </Link>
          );
        })}
      </nav>

      {/* Focus */}
      <div className="mt-6">
        <div className="text-[11px] tracking-[0.22em] text-white/35">
          FOCUS
        </div>

        <div className="mt-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
          <div className="text-sm font-medium text-white/90">
            Cyber security fundamentals
          </div>

          <p className="mt-1 text-xs text-zinc-400 leading-relaxed">
            Hands-on projects, labs, and practical skill building.
          </p>
        </div>
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Footer */}
      <div className="space-y-3">
        <Link
          href="/contact"
          className="primaryBtn block w-full rounded-2xl px-4 py-3 text-center text-sm font-medium"
        >
          Get in touch
        </Link>

        <div className="flex items-center justify-between">
          <ThemeToggle />
          <div className="text-xs text-white/35">v2</div>
        </div>
      </div>
    </aside>
  );
}
