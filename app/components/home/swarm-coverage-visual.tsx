import { Boxes, FileJson2, Sparkles, Workflow } from "lucide-react";

const coverageSteps = [
  ["Question", "what could fail before launch?"],
  ["Domain", "recommender, search, or agents"],
  ["Swarm", "users, queries, or tasks"],
  ["Run plan", "seeded and replayable"]
];

const traceRows = [
  ["agent-7", "low patience", "abandonment risk"],
  ["query-12", "time sensitive", "freshness gap"],
  ["task-21", "tool use", "grounding check"],
  ["candidate", "baseline compare", "no material change"]
];

export function SwarmCoverageVisual() {
  return (
    <div className="workbench" data-spirit-frame="">
      <div className="workbench-header">
        <div className="workbench-title">
          <Workflow size={18} aria-hidden="true" />
          Swarm coverage builder
        </div>
        <span className="status-chip">seeded, replayable, domain-aware</span>
      </div>

      <div className="workbench-body grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="data-card p-5">
          <div className="mb-4 flex items-center gap-2 text-sm font-semibold theme-accent-strong">
            <Sparkles size={18} aria-hidden="true" />
            Swarm shaped from a release question
          </div>
          <div className="grid gap-3 md:grid-cols-4">
            {coverageSteps.map(([title, detail], index) => (
              <div
                key={title}
                className="relative rounded-md border p-4 theme-line bg-[var(--panel)]"
              >
                <div className="mb-3 flex h-7 w-7 items-center justify-center rounded-md text-xs font-semibold theme-soft">
                  {index + 1}
                </div>
                <p className="text-sm font-semibold">{title}</p>
                <p className="mt-2 text-xs leading-5 theme-muted">{detail}</p>
                {index < coverageSteps.length - 1 ? (
                  <span className="absolute -right-3 top-8 hidden h-px w-6 bg-[var(--accent)] md:block" />
                ) : null}
              </div>
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

        <div className="data-card p-5">
          <div className="mb-4 flex items-center gap-2 text-sm font-semibold theme-accent-strong">
            <Workflow size={18} aria-hidden="true" />
            Swarm trace preview
          </div>
          <div className="grid gap-2">
            {traceRows.map(([agent, cohort, signal]) => (
              <div
                key={`${agent}-${cohort}`}
                className="grid gap-2 rounded-md border p-3 theme-line bg-[var(--panel)] sm:grid-cols-[0.8fr_1fr_1fr]"
              >
                <span className="mono text-xs">{agent}</span>
                <span className="text-xs font-semibold theme-accent">{cohort}</span>
                <span className="text-xs theme-muted">{signal}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 grid gap-2 sm:grid-cols-2">
            <div className="rounded-md border p-3 theme-line bg-[var(--panel)]">
            <Boxes size={16} className="theme-accent" aria-hidden="true" />
              <p className="mt-2 text-sm font-semibold">domain-shaped</p>
            </div>
            <div className="rounded-md border p-3 theme-line bg-[var(--panel)]">
              <FileJson2 size={16} className="theme-accent" aria-hidden="true" />
              <p className="mt-2 text-sm font-semibold">artifact-backed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
