"use client";

import { useEffect, useRef } from "react";

export default function CursorDot() {
  const dotRef = useRef<HTMLDivElement | null>(null);

  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const raf = useRef<number | null>(null);

  useEffect(() => {
    // ⛔ Disable on touch devices (mobile / tablet)
    if (
      typeof window !== "undefined" &&
      ("ontouchstart" in window || navigator.maxTouchPoints > 0)
    ) {
      return;
    }

    const dot = dotRef.current;
    if (!dot) return;

    /**
     * 🔧 TUNING
     */
    const OFFSET_X = 22; // right of cursor
    const OFFSET_Y = 33; // below cursor
    const EASE = 0.1; // lower = more lag / float

    const onMove = (e: MouseEvent) => {
      target.current.x = e.clientX + OFFSET_X;
      target.current.y = e.clientY + OFFSET_Y;
    };

    const tick = () => {
      current.current.x += (target.current.x - current.current.x) * EASE;
      current.current.y += (target.current.y - current.current.y) * EASE;

      dot.style.transform = `
        translate3d(${current.current.x}px, ${current.current.y}px, 0)
        translate(-50%, -50%)
      `;

      raf.current = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });

    // start centered to avoid jump
    target.current.x = window.innerWidth / 2;
    target.current.y = window.innerHeight / 2;
    current.current.x = target.current.x;
    current.current.y = target.current.y;

    raf.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <div
      ref={dotRef}
      className="
        pointer-events-none fixed left-0 top-0 z-[60]
        h-3 w-3 rounded-full
        bg-sky-400
        opacity-90
        shadow-[0_0_20px_rgba(56,189,248,0.55)]
      "
    />
  );
}
