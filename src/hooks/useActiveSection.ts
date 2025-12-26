"use client";

import { useEffect, useState } from "react";

type SectionId = "top" | "projects" | "about" | "contact" | "writeups" | "stack";

const DEFAULT_SECTIONS: SectionId[] = ["top", "projects", "about", "contact"];

export function useActiveSection(
  ids: SectionId[] = DEFAULT_SECTIONS,
  opts?: { rootMargin?: string }
) {
  const [active, setActive] = useState<SectionId>("top");

  useEffect(() => {
    if (typeof window === "undefined") return;

    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the most visible intersecting section
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0));

        if (visible[0]?.target?.id) {
          setActive(visible[0].target.id as SectionId);
        }
      },
      {
        threshold: [0.15, 0.25, 0.35, 0.5, 0.65],
        // This makes it feel correct with your fixed topbar
        rootMargin: opts?.rootMargin ?? "-20% 0px -65% 0px",
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [ids, opts?.rootMargin]);

  return active;
}
