"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import MobileNav from "@/components/MobileNav";

export default function Shell({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-zinc-100 overflow-x-hidden">
      {/* Desktop sidebar */}
      <div className="hidden xl:block fixed left-6 top-6 bottom-6 w-[280px]">
        <Sidebar />
      </div>

      {/* Mobile / half-screen nav */}
      <MobileNav open={menuOpen} setOpen={setMenuOpen} />

      {/* Content wrapper */}
      <main className="relative min-h-screen pt-28 pb-20 xl:pt-10 xl:pl-[340px] overflow-x-clip">
        {/* WIDTH CONSTRAINT */}
        <div className="mx-auto w-full max-w-[1100px] px-4 sm:px-6">
          {children}
        </div>
      </main>
    </div>
  );
}
