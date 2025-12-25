"use client";

import { motion, useReducedMotion } from "framer-motion";

type Props = { children: React.ReactNode };

export default function Reveal({ children }: Props) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 14 }}
      animate={reduce ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
