"use client";

import { usePathname } from "next/navigation";
import Shell from "@/components/Shell";

export default function LayoutShellClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const isNotFound =
    pathname === "/404" ||
    pathname === "/_not-found" ||
    pathname === undefined;

  // If Next rendered not-found.tsx, do NOT wrap in Shell
  if (isNotFound) {
    return <>{children}</>;
  }

  return <Shell>{children}</Shell>;
}
