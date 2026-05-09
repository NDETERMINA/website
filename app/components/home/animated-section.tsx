"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

export function AnimatedSection({
  children,
  className = "",
  id
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      id={id}
      className={className}
      initial={reduceMotion ? false : { opacity: 1, y: 18 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
}
