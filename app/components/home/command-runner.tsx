"use client";

import { motion, useReducedMotion } from "framer-motion";
import { FileJson2, Play, ShieldCheck } from "lucide-react";
import { useState } from "react";

import { artifactList, liveCommands } from "@/app/lib/home";

const outputs = [
  {
    id: "recommender",
    title: "Recommender evidence",
    rows: ["slate repetition high", "low-patience cohort risk", "trust_delta -0.31"]
  },
  {
    id: "search",
    title: "Search evidence",
    rows: ["freshness percentile low", "ambiguous intent preserved", "top bucket relevance 0.82"]
  },
  {
    id: "agents",
    title: "Agent evidence",
    rows: ["tool sequence matched", "grounding checked", "refusal calibrated"]
  },
  {
    id: "compare",
    title: "Regression result",
    rows: ["overall_direction no material change", "exit_code 0", "variance confidence low"]
  },
  {
    id: "run-swarm",
    title: "Generated recommender coverage",
    rows: ["scenario_pack provider", "population_pack fixture", "run_plan saved"]
  }
];

export function CommandRunner() {
  const reduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(1);
  const active = liveCommands[activeIndex];
  const output = outputs.find((item) => item.id === active.id) ?? outputs[0];

  return (
    <div className="workbench min-w-0" data-spirit-frame="">
      <div className="workbench-header">
        <div className="workbench-title">
          <Play size={16} aria-hidden="true" />
          Command surface
        </div>
        <span className="status-chip">public domains: recommender, search, agents</span>
      </div>

      <div className="workbench-body grid min-w-0 gap-4">
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-5">
          {liveCommands.map((command, index) => (
            <button
              key={command.id}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`rounded-md border px-3 py-3 text-left text-sm font-semibold transition theme-line ${
                index === activeIndex
                  ? "bg-[var(--accent-soft)] text-[var(--accent-strong)]"
                  : "bg-[color-mix(in_srgb,var(--panel-strong)_82%,transparent)] text-[var(--muted)] hover:text-[var(--text)]"
              }`}
            >
              <span className="flex items-center gap-2">
                <Play size={14} aria-hidden="true" />
                {command.label}
              </span>
            </button>
          ))}
        </div>

        <motion.div
          key={active.id}
          initial={reduceMotion ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.28 }}
          className="grid min-w-0 gap-4 lg:grid-cols-[1.05fr_0.95fr] lg:items-start"
        >
          <div className="data-card min-w-0 p-4">
            <div className="mb-3 flex items-center gap-2 text-sm font-semibold theme-accent-strong">
              <ShieldCheck size={17} aria-hidden="true" />
              Repeatable run
            </div>
            <pre className="mono max-w-full whitespace-pre-wrap break-words rounded-md border p-4 text-xs leading-6 theme-code">
              {active.command}
            </pre>
          </div>

          <div className="data-card min-w-0 p-4">
            <div className="mb-3 flex items-center gap-2 text-sm font-semibold theme-accent-strong">
              <FileJson2 size={17} aria-hidden="true" />
              {output.title}
            </div>
            <div className="grid gap-2">
              {output.rows.map((row) => (
                <div
                  key={row}
                  className="rounded-md border px-3 py-2 text-sm theme-line bg-[var(--panel)]"
                >
                  {row}
                </div>
              ))}
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {artifactList.map((artifact) => (
                <span
                  key={artifact}
                  className="rounded-md border px-2.5 py-1 text-xs font-semibold theme-line theme-muted"
                >
                  {artifact}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
