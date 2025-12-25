"use client";

import { AnimatePresence, motion } from "framer-motion";

export default function MobileNav({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (v: boolean) => void;
}) {
  return (
    <div className="xl:hidden">
      {/* TOPBAR WRAP (this is the missing “bar”) */}
      <div className="fixed left-0 right-0 top-0 z-40">
        <div className="px-4 pt-4">
          <div className="rounded-2xl border border-white/10 bg-black/30 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.45)]">
            <div className="flex items-center justify-between px-3 py-2">
              {/* Avatar */}
              <button
                onClick={() => setOpen(true)}
                className="h-11 w-11 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 shadow-[0_10px_30px_rgba(0,0,0,0.45)]"
                aria-label="Open menu"
              />

              {/* Icons */}
              <div className="flex items-center gap-2">
                <button
                  className="h-11 w-11 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition"
                  aria-label="Search"
                >
                  🔍
                </button>
                <button
                  className="h-11 w-11 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition"
                  aria-label="Theme"
                >
                  🌙
                </button>
                <button
                  onClick={() => setOpen(true)}
                  className="h-11 w-11 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition"
                  aria-label="Menu"
                >
                  ☰
                </button>
              </div>
            </div>

            {/* tiny bottom fade like Carl */}
            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          </div>
        </div>
      </div>

      {/* DRAWER */}
      <AnimatePresence>
        {open && (
          <>
            <motion.button
              className="fixed inset-0 z-40 bg-black/60"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              aria-label="Close overlay"
            />

            <motion.aside
              className="fixed left-4 top-4 bottom-4 z-50 w-[280px] rounded-3xl border border-white/10 bg-zinc-950/70 backdrop-blur p-4 shadow-[0_20px_80px_rgba(0,0,0,0.65)]"
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -30, opacity: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 30 }}
            >
              <div className="flex items-center justify-between">
                <div className="text-sm font-semibold">LostAstr0</div>
                <button
                  onClick={() => setOpen(false)}
                  className="h-9 w-9 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition"
                  aria-label="Close menu"
                >
                  ✕
                </button>
              </div>

              <div className="mt-4 text-xs text-zinc-400">NAV</div>
              <nav className="mt-2 space-y-1">
                {["Home", "Projects", "About", "Contact"].map((t) => (
                  <a
                    key={t}
                    href={t === "Home" ? "#" : `#${t.toLowerCase()}`}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between rounded-xl px-3 py-2 text-sm text-zinc-200 hover:bg-white/5"
                  >
                    {t} <span className="text-zinc-500">↗</span>
                  </a>
                ))}
              </nav>

              <div className="mt-6 text-xs text-zinc-400">RESOURCES</div>
              <nav className="mt-2 space-y-1">
                {["Writeups", "Stack"].map((t) => (
                  <a
                    key={t}
                    href={`#${t.toLowerCase()}`}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between rounded-xl px-3 py-2 text-sm text-zinc-200 hover:bg-white/5"
                  >
                    {t} <span className="text-zinc-500">↗</span>
                  </a>
                ))}
              </nav>

              <div className="mt-auto pt-6">
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold hover:bg-white/10 transition"
                >
                  Get in touch <span>⚡</span>
                </a>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
