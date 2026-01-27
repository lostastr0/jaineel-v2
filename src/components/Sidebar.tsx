"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

type NavItem = { href: string; label: string };

const NAV: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/labs", label: "Labs" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function MobileNav({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const pathname = usePathname();

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <div
          className="
            fixed inset-0 z-[9999]
            isolate
          "
          aria-modal="true"
          role="dialog"
        >
          {/* Backdrop (solid, no blur) */}
          <motion.button
            type="button"
            aria-label="Close menu"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
              absolute inset-0
              bg-black/85
              [backdrop-filter:none]
            "
          />

          {/* Drawer (FORCED opaque + no blur) */}
          <motion.aside
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="
              absolute left-0 top-0 h-full w-[86%] max-w-[360px]
              flex flex-col
              border-r border-white/10
              shadow-[0_20px_80px_rgba(0,0,0,0.70)]
              bg-[#0b0d10]
              opacity-100
              [backdrop-filter:none]
            "
            style={{
              backgroundColor: "#0b0d10",
              opacity: 1,
            }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-4 border-b border-white/10">
              <div>
                <div className="text-sm font-semibold text-white">Jaineel</div>
                <div className="mt-1 text-xs text-zinc-400">
                  Cyber security student
                </div>
              </div>

              <button
                onClick={onClose}
                className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-300 hover:bg-white/10 transition"
              >
                Close
              </button>
            </div>

            {/* Nav (scrollable) */}
            <div className="min-h-0 flex-1 overflow-y-auto px-3 py-4">
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
                      onClick={onClose}
                      className={[
                        "flex items-center justify-between rounded-xl px-3 py-3 transition",
                        active
                          ? "bg-white/10 text-white"
                          : "text-zinc-300 hover:bg-white/5",
                      ].join(" ")}
                    >
                      <span className="text-sm">{item.label}</span>
                      {active && (
                        <span className="h-2 w-2 rounded-full bg-sky-400" />
                      )}
                    </Link>
                  );
                })}
              </nav>

              {/* Optional: small “status” block */}
              <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.03] p-3">
                <div className="text-xs text-white/70">Status</div>
                <div className="mt-1 text-xs text-zinc-400">
                  Open to learning & opportunities.
                </div>
              </div>
            </div>

            {/* Footer actions (sticks to bottom now) */}
            <div className="px-4 py-4 border-t border-white/10">
              <Link
                href="/contact"
                onClick={onClose}
                className="block w-full rounded-full bg-sky-500 py-2 text-center text-sm font-medium text-black hover:bg-sky-400 transition"
              >
                Get in touch
              </Link>

              <div className="mt-3 text-xs text-zinc-500 text-center">
                v2 • LostAstr0
              </div>
            </div>
          </motion.aside>
        </div>
      )}
    </AnimatePresence>
  );
}
