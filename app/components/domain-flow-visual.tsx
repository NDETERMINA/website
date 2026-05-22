"use client";

import { motion, useReducedMotion } from "framer-motion";

const steps = ["Question", "System type", "Swarm", "Trace", "Judge", "Results"];

export function DomainFlowVisual({ compact = false }: { compact?: boolean }) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="overflow-hidden rounded-md border p-4 theme-panel">
      <div className={`grid gap-3 ${compact ? "sm:grid-cols-3" : "sm:grid-cols-6"}`}>
        {steps.map((step, index) => (
          <motion.div
            key={step}
            initial={reduceMotion ? false : { opacity: 1, y: 8 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.28, delay: index * 0.04 }}
            className="relative rounded-md border p-3 theme-panel-strong"
          >
            <div className="mb-2 flex h-7 w-7 items-center justify-center rounded-md text-xs font-semibold theme-soft">
              {index + 1}
            </div>
            <p className="text-sm font-semibold">{step}</p>
            {index < steps.length - 1 ? (
              <span className="absolute -right-2 top-1/2 hidden h-px w-4 bg-[var(--accent)] sm:block" />
            ) : null}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
