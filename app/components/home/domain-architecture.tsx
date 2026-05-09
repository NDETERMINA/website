"use client";

import { motion, useReducedMotion } from "framer-motion";

import { domainNodes } from "@/app/lib/home";

export function DomainArchitecture() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="workbench" data-spirit-frame="">
      <div className="workbench-header">
        <div className="workbench-title">Platform stack</div>
        <span className="status-chip">shared core + domain modules</span>
      </div>
      <div className="workbench-body">
        <div className="grid gap-3 md:grid-cols-5">
          {domainNodes.map(([title, text], index) => (
            <motion.div
              key={title}
              initial={reduceMotion ? false : { opacity: 1, y: 10 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.06 }}
              className="relative rounded-md border p-4 theme-line bg-[var(--panel)]"
            >
              <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-md text-sm font-semibold theme-soft">
                {index + 1}
              </div>
              <p className="text-base font-semibold">{title}</p>
              <p className="mt-2 text-sm leading-6 theme-muted">{text}</p>
              {index < domainNodes.length - 1 ? (
                <span className="absolute -right-3 top-8 hidden h-px w-6 bg-[var(--accent)] md:block" />
              ) : null}
            </motion.div>
          ))}
        </div>
        <div className="mt-4 overflow-hidden rounded-md border p-3 theme-line bg-[var(--panel)]">
          <div className="relative h-3">
            <span className="motion-packet absolute h-3 w-14 rounded-full bg-[var(--accent)] opacity-70" />
            <span className="motion-packet absolute h-3 w-14 rounded-full bg-[var(--link)] opacity-55" />
            <span className="motion-packet absolute h-3 w-14 rounded-full bg-[var(--warning)] opacity-50" />
          </div>
        </div>
      </div>
    </div>
  );
}
