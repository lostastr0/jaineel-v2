"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import MobileNav from "@/components/MobileNav";
import CursorDot from "@/components/CursorDot";
import CursorQuote from "@/components/CursorQuote";

export default function Shell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-dvh w-full bg-black text-white overflow-x-hidden">
      {/* Cursor effects (your components can hide on mobile internally) */}
      <CursorDot />
      <CursorQuote />

      {/* Mobile topbar + drawer */}
      <MobileNav open={open} setOpen={setOpen} />

      {/* Layout frame */}
      <div className="mx-auto w-full max-w-[1240px] px-4 pb-12 pt-[96px] xl:px-6 xl:pt-6">
        <div className="grid grid-cols-1 gap-6 xl:grid-cols-[320px_1fr]">
          {/* Desktop sidebar */}
          <div className="hidden xl:block">
            <div className="sticky top-6 h-[calc(100vh-48px)]">
              <Sidebar />
            </div>
          </div>

          {/* Main */}
          <main className="w-full min-w-0">{children}</main>
        </div>
      </div>
    </div>
  );
}
