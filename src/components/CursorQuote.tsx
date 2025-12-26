"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Point = { x: number; y: number };

export default function CursorQuote() {
  const [pos, setPos] = useState<Point>({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  const rafRef = useRef<number | null>(null);
  const idleRef = useRef<number | null>(null);
  const hideRef = useRef<number | null>(null);

  // Offset so it appears near the “tail” of the cursor
  const offset = useMemo(() => ({ x: 28, y: 36 }), []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // ✅ Disable on touch devices (mobile/tablet)
    if ("ontouchstart" in window || navigator.maxTouchPoints > 0) return;

    // ✅ Show once per *page load* (refresh shows again)
    let shownThisPageLoad = false;

    const onMove = (e: MouseEvent) => {
      // track position efficiently
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        setPos({ x: e.clientX, y: e.clientY });
      });

      // moving hides it
      setVisible(false);

      // reset timers
      if (idleRef.current) window.clearTimeout(idleRef.current);
      if (hideRef.current) window.clearTimeout(hideRef.current);

      // show after idle
      idleRef.current = window.setTimeout(() => {
        if (shownThisPageLoad) return; // only once per load
        shownThisPageLoad = true;

        setVisible(true);

        // auto-hide after a moment
        hideRef.current = window.setTimeout(() => {
          setVisible(false);
        }, 5200);
      }, 1600);
    };

    window.addEventListener("mousemove", onMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", onMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (idleRef.current) window.clearTimeout(idleRef.current);
      if (hideRef.current) window.clearTimeout(hideRef.current);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="pointer-events-none fixed z-[60] select-none"
          style={{
            left: pos.x + offset.x,
            top: pos.y + offset.y,
          }}
          initial={{ opacity: 0, y: 6, filter: "blur(2px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: 6, filter: "blur(2px)" }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          <div className="text-xs sm:text-sm text-white/70">
            The future isn&apos;t set.
          </div>
          <div className="mt-0.5 text-[10px] text-white/35">— Aerith</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
