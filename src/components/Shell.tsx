"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Sidebar from "@/components/Sidebar";
import ThemeToggle from "@/components/ThemeToggle";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Shell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <div className="min-h-screen w-full">
      {/* Desktop sidebar */}
      <div className="hidden xl:block fixed left-0 top-0 h-screen w-[340px]">
        <div className="h-full border-r border-white/10 bg-[rgb(var(--bg))]">
          <Sidebar />
        </div>
      </div>

      {/* Content area */}
      <div className="w-full xl:pl-[340px]">
        {/* Mobile topbar (FIXED: no shadow, no box-in-box for theme toggle) */}
        <div className="xl:hidden sticky top-0 z-40">
          <div className="border-b border-white/10 bg-[rgb(var(--bg))]/70 backdrop-blur-md">
            <div className="mx-auto w-full max-w-[1100px] px-4">
              <div className="grid h-12 grid-cols-[auto_1fr_auto] items-center">
                {/* Left: menu */}
                <button
                  onClick={() => setOpen(true)}
                  type="button"
                  aria-label="Open menu"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 hover:bg-white/10 transition"
                >
                  {/* simple icon */}
                  <span className="text-base leading-none">☰</span>
                </button>

                {/* Center */}
                <div className="justify-self-center">
                  <div className="inline-flex items-center gap-2 text-sm text-white/85">
                    <span className="font-medium">Jaineel</span>
                    <span className="h-1 w-1 rounded-full bg-white/30" />
                    <span className="inline-flex items-center gap-1.5 text-xs text-zinc-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      Studying
                    </span>
                  </div>
                </div>

                {/* Right: theme toggle (NO wrapper box) */}
                <div className="justify-self-end">
                  <ThemeToggle compact />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main content */}
        <main className="mx-auto w-full max-w-[1100px] px-4 pb-16 pt-8 xl:px-8 xl:pt-6">
          {children}
        </main>

        {/* FOOTER — kept exactly as you had it */}
        <footer className="pb-10">
          <div className="mx-auto w-full max-w-[1100px] px-4 xl:px-8">
            <div
              className="
                rounded-3xl border border-white/10
                bg-white/[0.03]
                shadow-[0_0_0_1px_rgba(255,255,255,0.04)]
                overflow-hidden
              "
            >
              {/* Top */}
              <div className="p-6">
                <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <div className="text-sm font-semibold text-white/90">
                      LostAstr0 <span className="text-white/40">by Jaineel</span>
                    </div>
                    <p className="mt-2 max-w-[70ch] text-sm text-zinc-300">
                      Building cyber security skills through hands-on projects,
                      clean write-ups, and practical learning.
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      <Link
                        href="/projects"
                        className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white hover:bg-white/10 transition"
                      >
                        Projects
                      </Link>
                      <Link
                        href="/about"
                        className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white hover:bg-white/10 transition"
                      >
                        About
                      </Link>
                      <Link
                        href="/contact"
                        className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white hover:bg-white/10 transition"
                      >
                        Contact
                      </Link>
                      <Link
                        href="https://github.com/"
                        target="_blank"
                        className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white hover:bg-white/10 transition"
                      >
                        GitHub ↗
                      </Link>
                    </div>
                  </div>

                  {/* Theme pill */}
                  <div className="shrink-0 flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2">
                    <span className="text-xs text-white/60">Theme</span>
                    <ThemeToggle />
                  </div>
                </div>
              </div>

              <div className="border-t border-white/10" />

              {/* Bottom */}
              <div className="flex items-center justify-between px-6 py-4">
                <div className="text-xs text-white/35">
                  © {new Date().getFullYear()} · v2
                </div>
                <div className="text-xs text-white/35">
                  Built with Next.js + Tailwind
                </div>
              </div>
            </div>
          </div>
        </footer>

        {/* Mobile Drawer */}
        {open && (
          <div className="xl:hidden fixed inset-0 z-50">
            <button
              aria-label="Close menu"
              className="absolute inset-0 bg-black/60"
              onClick={() => setOpen(false)}
              type="button"
            />

            <div
              className="
                absolute left-3 top-3 h-[calc(100vh-24px)] w-[320px]
                overflow-hidden rounded-[28px]
                border border-white/15 bg-white/[0.06]
                shadow-[0_14px_40px_rgba(0,0,0,0.45)]
                ring-1 ring-white/5
              "
            >
              <div className="flex h-full flex-col">
                <div className="flex items-center justify-between p-4">
                  <div className="text-sm font-semibold text-white/90">Jaineel</div>
                  <button
                    onClick={() => setOpen(false)}
                    className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/80 hover:bg-white/10 transition"
                    type="button"
                  >
                    Close
                  </button>
                </div>

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
                            "relative flex items-center justify-between rounded-2xl px-3 py-2 text-sm transition",
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
                </div>

                <div className="mt-auto p-4">
                  <Link
                    href="/contact"
                    className="primaryBtn block w-full rounded-2xl px-4 py-3 text-center text-sm font-medium"
                  >
                    Get in touch
                  </Link>

                  <div className="mt-3 flex items-center justify-between">
                    <ThemeToggle />
                    <div className="text-xs text-white/35">v2</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
