"use client";

import { motion, useReducedMotion } from "framer-motion";
import { FileJson2, SearchCheck } from "lucide-react";

import { artifactList, evidenceCards } from "@/app/lib/home";

export function EvidenceDossier() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="workbench" data-spirit-frame="">
      <div className="workbench-header">
        <div className="workbench-title">
          <SearchCheck size={18} aria-hidden="true" />
          Launch evidence dossier
        </div>
        <span className="status-chip">run_id run-28a8a5cb16eb</span>
      </div>

      <div className="workbench-body">
        <div className="grid gap-3 sm:grid-cols-2">
          {evidenceCards.map(([title, text], index) => (
            <motion.div
              key={title}
              initial={reduceMotion ? false : { opacity: 1, y: 8 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.04 }}
              className="data-row"
            >
              <p className="tiny-label">{title}</p>
              <p className="text-sm font-semibold">{text}</p>
            </motion.div>
          ))}
        </div>

        <div className="data-card mt-4 p-4">
          <div className="mb-3 flex items-center gap-2 text-sm font-semibold theme-accent">
            <FileJson2 size={16} aria-hidden="true" />
            Artifact bundle
          </div>
          <div className="grid gap-2 sm:grid-cols-2">
            {artifactList.map((artifact) => (
              <div key={artifact} className="mono rounded-md border px-3 py-2 text-xs theme-line">
                {artifact}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
