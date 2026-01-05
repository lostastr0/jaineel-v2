"use client";

import { ReactNode } from "react";
import Sidebar from "@/components/Sidebar";
import MobileNav from "@/components/MobileNav";

export default function Shell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-[100dvh]">
      <Sidebar />
      <MobileNav />

      {/* Use margin-left so the content layout doesn’t “re-center” weirdly */}
      <main className="xl:ml-[324px]">
        {/* Your normal page padding + max width */}
        <div className="px-4 sm:px-6 xl:px-8">
          <div className="mx-auto max-w-[1100px]">{children}</div>
        </div>
      </main>
    </div>
  );
}
