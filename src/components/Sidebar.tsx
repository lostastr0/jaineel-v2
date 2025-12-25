"use client";

import { motion } from "framer-motion";

const nav = [
  { label: "Home", href: "#top" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const resources = [
  { label: "Writeups", href: "#writeups" },
  { label: "Stack", href: "#stack" },
];

type Props = {
  variant?: "fixed" | "drawer";
  onClose?: () => void;
};

export default function Sidebar({ variant = "fixed", onClose }: Props) {
  const Wrapper =
    variant === "fixed" ? "aside" : ("div" as unknown as "aside");

  const wrapperClass =
    variant === "fixed"
      ? "fixed left-0 top-0 h-screen w-[280px] p-4 hidden lg:block"
      : "h-full w-full p-4";

  return (
    <Wrapper className={wrapperClass}>
      <div className="h-full rounded-3xl border border-white/10 bg-white/5 backdrop-blur px-4 py-5">
        {/* header row */}
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-white/80 to-white/20" />
          <div className="min-w-0">
            <div className="text-sm font-semibold leading-tight truncate">
              LostAstr0
            </div>
            <div className="text-xs text-zinc-400 truncate">
              open for opportunities
            </div>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-emerald-400/80" />
            {variant === "drawer" && (
              <button
                onClick={onClose}
                className="rounded-full border border-white/10 bg-white/10 px-2 py-1 text-xs text-zinc-200 hover:bg-white/15 transition"
                aria-label="Close menu"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* nav */}
        <div className="mt-6">
          <div className="px-2 text-[11px] tracking-[0.22em] text-zinc-500">
            NAV
          </div>
          <nav className="mt-2 space-y-1">
            {nav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={variant === "drawer" ? onClose : undefined}
                className="flex items-center justify-between rounded-2xl px-3 py-2 text-sm text-zinc-200 hover:bg-white/5 transition"
              >
                <span>{item.label}</span>
                <span className="text-xs text-zinc-500">↵</span>
              </a>
            ))}
          </nav>
        </div>

        {/* resources */}
        <div className="mt-6">
          <div className="px-2 text-[11px] tracking-[0.22em] text-zinc-500">
            RESOURCES
          </div>
          <nav className="mt-2 space-y-1">
            {resources.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={variant === "drawer" ? onClose : undefined}
                className="flex items-center justify-between rounded-2xl px-3 py-2 text-sm text-zinc-200 hover:bg-white/5 transition"
              >
                <span>{item.label}</span>
                <span className="text-xs text-zinc-500">↗</span>
              </a>
            ))}
          </nav>
        </div>

        {/* bottom */}
        <div className="mt-auto pt-6">
          <motion.a
            whileTap={{ scale: 0.98 }}
            href="#contact"
            onClick={variant === "drawer" ? onClose : undefined}
            className="mt-6 flex items-center justify-between rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-zinc-100 hover:bg-white/15 transition"
          >
            <span>Get in touch</span>
            <span className="text-xs text-zinc-300">⚡</span>
          </motion.a>

          <div className="mt-3 flex items-center justify-between text-xs text-zinc-500">
            <span>v2</span>
            <span>dark</span>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
