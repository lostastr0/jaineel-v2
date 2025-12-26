"use client";

import { usePathname } from "next/navigation";
import { useActiveSection } from "@/hooks/useActiveSection";
import {
  HiOutlineHome,
  HiOutlineFolder,
  HiOutlineUser,
  HiOutlineMail,
  HiOutlineDocumentText,
  HiOutlineCube,
  HiOutlineLogin,
  HiOutlineLightningBolt,
  HiOutlineMoon,
  HiOutlineSearch,
} from "react-icons/hi";

type NavItem = {
  label: string;
  href: string;
  id?: "top" | "projects" | "about" | "contact" | "writeups" | "stack";
  icon: React.ReactNode;
};

const MAIN_NAV: NavItem[] = [
  { label: "Home", href: "#top", id: "top", icon: <HiOutlineHome /> },
  { label: "Works", href: "#projects", id: "projects", icon: <HiOutlineFolder /> },
  { label: "About", href: "#about", id: "about", icon: <HiOutlineUser /> },
  { label: "Contact", href: "#contact", id: "contact", icon: <HiOutlineMail /> },
];

const RESOURCES_NAV: NavItem[] = [
  { label: "Notes", href: "#writeups", id: "writeups", icon: <HiOutlineDocumentText /> },
  { label: "Journey", href: "#stack", id: "stack", icon: <HiOutlineCube /> },
];

export default function Sidebar() {
  const pathname = usePathname();
  const activeSection = useActiveSection([
    "top",
    "projects",
    "about",
    "contact",
    "writeups",
    "stack",
  ]);

  const isHome = pathname === "/";

  return (
    <aside
      className="
        h-full w-full rounded-3xl
        border border-white/10
        bg-gradient-to-b from-white/[0.04] to-white/[0.02]
        backdrop-blur-xl
        shadow-[0_20px_60px_rgba(0,0,0,0.6)]
        flex flex-col
      "
    >
      {/* PROFILE */}
      <div className="px-6 pt-6">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-sky-400 to-blue-600" />
          <div className="min-w-0">
            <div className="truncate text-sm font-semibold text-white">
              Jaineel
            </div>
            <div className="flex items-center gap-2 text-xs text-zinc-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Open for opportunities
            </div>
          </div>
        </div>
      </div>

      {/* MAIN NAV */}
      <nav className="mt-6 px-4 space-y-1">
        {MAIN_NAV.map((item) => {
          const active = isHome && item.id === activeSection;

          return (
            <a
              key={item.label}
              href={item.href}
              className={[
                "flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm transition",
                active
                  ? "bg-white/10 text-white"
                  : "text-zinc-300 hover:bg-white/5 hover:text-white",
              ].join(" ")}
            >
              <span className="text-lg">{item.icon}</span>
              <span className="truncate">{item.label}</span>

              {active && (
                <span className="ml-auto h-1.5 w-1.5 rounded-full bg-sky-400 shadow-[0_0_18px_rgba(56,189,248,0.6)]" />
              )}
            </a>
          );
        })}
      </nav>

      {/* RESOURCES */}
      <div className="mt-6 px-6 text-xs uppercase tracking-wider text-zinc-500">
        Resources
      </div>

      <nav className="mt-2 px-4 space-y-1">
        {RESOURCES_NAV.map((item) => {
          const active = isHome && item.id === activeSection;

          return (
            <a
              key={item.label}
              href={item.href}
              className={[
                "flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm transition",
                active
                  ? "bg-white/10 text-white"
                  : "text-zinc-300 hover:bg-white/5 hover:text-white",
              ].join(" ")}
            >
              <span className="text-lg">{item.icon}</span>
              <span className="truncate">{item.label}</span>

              {active && (
                <span className="ml-auto h-1.5 w-1.5 rounded-full bg-sky-400 shadow-[0_0_18px_rgba(56,189,248,0.6)]" />
              )}
            </a>
          );
        })}
      </nav>

      <div className="flex-1" />

      {/* CTA */}
      <div className="px-6 pb-4">
        <a
          href="#contact"
          className="
            w-full rounded-xl
            bg-gradient-to-r from-sky-500 to-blue-600
            py-2.5 text-sm font-medium text-black
            hover:from-sky-400 hover:to-blue-500 transition
            flex items-center justify-center gap-2
          "
        >
          <HiOutlineLightningBolt />
          Get in touch
        </a>
      </div>

      {/* FOOTER */}
      <div className="flex items-center justify-between px-6 pb-5 text-zinc-400">
        <button className="hover:text-white transition">
          <HiOutlineMoon />
        </button>
        <button className="hover:text-white transition">
          <HiOutlineSearch />
        </button>
        <button className="hover:text-white transition">
          <HiOutlineLogin />
        </button>
      </div>
    </aside>
  );
}
