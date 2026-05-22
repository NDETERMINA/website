"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  CheckCircle2,
  ClipboardCheck,
  FileJson2,
  LockKeyhole,
  Radar,
  Terminal,
  TriangleAlert,
  UsersRound
} from "lucide-react";
import { useEffect, useState } from "react";

const runStages = [
  {
    icon: Radar,
    label: "Domain",
    state: "product pack selected",
    detail: "recs / search / agents",
    insight: "Each domain gives the run its target shape, scenario grammar, judge, and report language."
  },
  {
    icon: UsersRound,
    label: "Coverage",
    state: "seeded behavior trial",
    detail: "users, queries, tasks",
    insight: "The run uses repeatable user, query, or task coverage instead of one-off manual spot checks."
  },
  {
    icon: TriangleAlert,
    label: "Judge",
    state: "domain risks surfaced",
    detail: "specific failure language",
    insight: "Judged traces name the actual domain concern: trust collapse, freshness loss, or tool-use regression."
  },
  {
    icon: FileJson2,
    label: "Results",
    state: "release packet written",
    detail: "report + manifest",
    insight: "The run writes report.md, results.json, traces.jsonl, and a manifest for review."
  }
];

const artifacts = ["report.md", "results.json", "traces.jsonl", "run_manifest.json"];

export function LiveRunConsole() {
  const reduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const [manualStage, setManualStage] = useState(false);
  const activeStage = runStages[activeIndex];

  useEffect(() => {
    if (reduceMotion || manualStage) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % runStages.length);
    }, 2400);

    return () => window.clearInterval(timer);
  }, [manualStage, reduceMotion]);

  return (
    <div className="hero-console min-w-0" data-spirit-frame="">
      <div className="hero-console-header">
        <div className="workbench-title">
          <Terminal size={18} aria-hidden="true" />
          Determina results run
        </div>
        <div className="status-chip">
          <LockKeyhole size={14} aria-hidden="true" />
          DOMAIN PILOT
        </div>
      </div>

      <div className="hero-console-body">
        <div className="hero-command-line">
          <span className="mono text-[var(--accent)]">$</span>
          <code className="mono min-w-0 break-words">
            determina audit --domain agents --scenario current-info-tool-use --driver-config-path ./driver_config.json
          </code>
        </div>

        <section className="hero-proof-card hero-stage-card mt-3">
          <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="tiny-label">Run path</p>
              <p className="mt-1 text-sm font-semibold text-[var(--text)]">
                Domain {"->"} Coverage {"->"} Judge {"->"} Results
              </p>
            </div>
            <span className="status-chip">run-28a8a5cb16eb</span>
          </div>
          <div className="hero-stage-list">
            {runStages.map((stage, index) => {
              const Icon = stage.icon;
              const active = index === activeIndex;

              return (
                <motion.button
                  key={stage.label}
                  type="button"
                  aria-pressed={active}
                  onClick={() => {
                    setActiveIndex(index);
                    setManualStage(true);
                  }}
                  initial={false}
                  animate={
                    reduceMotion
                      ? undefined
                      : {
                          borderColor: active ? "var(--accent)" : "var(--line)"
                        }
                  }
                  className={active ? "hero-stage is-active" : "hero-stage"}
                >
                  <div className="hero-stage-icon">
                    <Icon size={16} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[var(--text)]">
                      {stage.label}
                    </p>
                    <p className="mt-1 text-xs theme-muted">{stage.state}</p>
                  </div>
                  <p className="text-right text-xs font-semibold theme-accent-strong">
                    {stage.detail}
                  </p>
                </motion.button>
              );
            })}
          </div>
          <motion.div
            key={activeStage.label}
            initial={reduceMotion ? false : { opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.22 }}
            className="hero-active-note"
          >
            <span>{activeStage.label} output</span>
            <strong>{activeStage.state}</strong>
            <p>{activeStage.insight}</p>
          </motion.div>
        </section>

        <div className="hero-console-footer">
          <div className="flex min-w-0 flex-wrap items-center gap-2">
            <ClipboardCheck size={17} className="shrink-0 theme-accent" aria-hidden="true" />
            {artifacts.map((artifact) => (
              <span key={artifact} className="mono rounded-md border px-2 py-1 text-xs theme-line">
                {artifact}
              </span>
            ))}
          </div>
          <div className="hidden items-center gap-2 text-sm font-semibold theme-accent-strong xl:flex">
            <CheckCircle2 size={16} aria-hidden="true" />
            Repeatable
          </div>
        </div>
      </div>
    </div>
  );
}
