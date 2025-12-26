"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useActiveSection } from "@/hooks/useActiveSection";
import {
  HiOutlineMenuAlt2,
  HiOutlineSearch,
  HiOutlineMoon,
  HiOutlineX,
  HiOutlineHome,
  HiOutlineFolder,
  HiOutlineUser,
  HiOutlineMail,
  HiOutlineDocumentText,
  HiOutlineCube,
  HiOutlineLightningBolt,
} from "react-icons/hi";

type Props = {
  open: boolean;
  setOpen: (v: boolean) => void;
};

const NAV = [
  { label: "Home", href: "#top", id: "top", Icon: HiOutlineHome },
  { label: "Works", href: "#projects", id: "projects", Icon: HiOutlineFolder },
  { label: "About", href: "#about", id: "about", Icon: HiOutlineUser },
  { label: "Contact", href: "#contact", id: "contact", Icon: HiOutlineMail },
];

const RESOURCES = [
  { label: "Notes", href: "#writeups", id: "writeups", Icon: HiOutlineDocumentText },
  { label: "Journey", href: "#stack", id: "stack", Icon: HiOutlineCube },
];

function NavRow({
  label,
  href,
  Icon,
  active,
  onClick,
}: {
  label: string;
  href: string;
  Icon: React.ComponentType<{ className?: string }>;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={[
        "flex items-center gap-3 rounded-2xl px-3 py-2.5 text-sm transition",
        active
          ? "bg-white/10 text-white"
          : "text-zinc-300 hover:bg-white/[0.04] hover:text-white",
      ].join(" ")}
    >
      <Icon className="h-5 w-5 text-white/70" />
      <span className="font-medium">{label}</span>
      {active && (
        <span className="ml-auto h-1.5 w-1.5 rounded-full bg-sky-400 shadow-[0_0_18px_rgba(56,189,248,0.6)]" />
      )}
    </a>
  );
}

export default function MobileNav({ open, setOpen }: Props) {
  const activeSection = useActiveSection([
    "top",
    "projects",
    "about",
    "contact",
    "writeups",
    "stack",
  ]);

  return (
    <div className="xl:hidden">
      {/* TOPBAR */}
      <div className="fixed left-0 right-0 top-0 z-50 px-4 pt-4">
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl px-3 py-2 flex items-center justify-between">
          <button
            onClick={() => setOpen(true)}
            className="h-11 w-11 rounded-full bg-gradient-to-br from-sky-500 to-blue-600"
          />

          <div className="flex items-center gap-2">
            <button className="h-11 w-11 rounded-full border border-white/10 bg-white/[0.03] grid place-items-center">
              <HiOutlineSearch className="h-5 w-5 text-white/70" />
            </button>
            <button className="h-11 w-11 rounded-full border border-white/10 bg-white/[0.03] grid place-items-center">
              <HiOutlineMoon className="h-5 w-5 text-white/70" />
            </button>
            <button
              onClick={() => setOpen(true)}
              className="h-11 w-11 rounded-full border border-white/10 bg-white/[0.03] grid place-items-center"
            >
              <HiOutlineMenuAlt2 className="h-6 w-6 text-white/80" />
            </button>
          </div>
        </div>
      </div>

      {/* DRAWER */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black/60"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            <motion.aside
              className="fixed left-4 top-4 bottom-4 z-50 w-[300px] rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-4"
              initial={{ x: -28, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -28, opacity: 0 }}
            >
              <div className="flex h-full flex-col">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-sky-500 to-blue-600" />
                  <div className="min-w-0">
                    <div className="text-sm font-semibold text-white">
                      Jaineel
                    </div>
                    <div className="text-xs text-zinc-400">
                      Open for opportunities
                    </div>
                  </div>
                  <button
                    onClick={() => setOpen(false)}
                    className="ml-auto h-9 w-9 rounded-full border border-white/10 grid place-items-center"
                  >
                    <HiOutlineX className="h-5 w-5 text-white/80" />
                  </button>
                </div>

                <div className="my-4 h-px bg-white/10" />

                {NAV.map((item) => (
                  <NavRow
                    key={item.label}
                    {...item}
                    active={activeSection === item.id}
                    onClick={() => setOpen(false)}
                  />
                ))}

                <div className="mt-5 text-xs uppercase tracking-wider text-zinc-500">
                  Resources
                </div>

                {RESOURCES.map((item) => (
                  <NavRow
                    key={item.label}
                    {...item}
                    active={activeSection === item.id}
                    onClick={() => setOpen(false)}
                  />
                ))}

                <div className="flex-1" />

                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="mt-4 rounded-2xl bg-gradient-to-r from-sky-500 to-blue-600 py-3 text-sm font-semibold text-black text-center"
                >
                  <span className="inline-flex items-center gap-2 justify-center">
                    <HiOutlineLightningBolt /> Get in touch
                  </span>
                </a>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
