import { ArrowRight, CheckCircle2, TriangleAlert, XCircle } from "lucide-react";

const deterministicSteps = ["input", "function", "assert", "pass"];

const behaviorRows = [
  ["aggregate metric", "passes"],
  ["low-patience user", "trust collapse"],
  ["time-sensitive query", "freshness gap"],
  ["agent task", "tool-use risk"],
  ["candidate compare", "needs review"]
];

export function TestingGapVisual() {
  return (
    <div className="workbench" data-spirit-frame="">
      <div className="workbench-header">
        <div className="workbench-title">
          <TriangleAlert size={18} aria-hidden="true" />
          Testing gap
        </div>
        <span className="status-chip">aggregate pass can hide behavior risk</span>
      </div>

      <div className="workbench-body grid gap-4 lg:grid-cols-[0.86fr_1.14fr]">
        <div className="data-card p-5">
          <div className="mb-4 flex items-center gap-2 text-sm font-semibold theme-accent-strong">
            <CheckCircle2 size={18} aria-hidden="true" />
            Deterministic test shape
          </div>
          <div className="grid gap-3">
            {deterministicSteps.map((step, index) => (
              <div key={step} className="flex items-center gap-3">
                <div className="mono w-28 rounded-md border px-3 py-2 text-xs theme-line bg-[var(--panel)]">
                  {step}
                </div>
                {index < deterministicSteps.length - 1 ? (
                  <ArrowRight size={16} className="theme-muted" aria-hidden="true" />
                ) : (
                  <CheckCircle2 size={16} className="theme-accent" aria-hidden="true" />
                )}
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm leading-6 theme-muted">
            Same input, same output. The test can be exact.
          </p>
        </div>

        <div className="data-card p-5">
          <div className="mb-4 flex items-center gap-2 text-sm font-semibold theme-warning">
            <TriangleAlert size={18} aria-hidden="true" />
            AI behavior shape
          </div>
          <div className="grid gap-2">
            {behaviorRows.map(([label, value], index) => (
              <div
                key={label}
                className="grid grid-cols-[1fr_auto] items-center gap-3 rounded-md border px-3 py-2 theme-line bg-[var(--panel)]"
              >
                <span className="text-sm font-semibold">{label}</span>
                <span
                  className={`rounded-md border px-2.5 py-1 text-xs font-semibold ${
                    index === 0 ? "theme-soft" : "theme-line theme-muted"
                  }`}
                >
                  {value}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-4 flex items-center gap-2 rounded-md border p-3 theme-line bg-[var(--panel)]">
            <XCircle size={16} className="theme-warning" aria-hidden="true" />
            <p className="text-sm leading-6 theme-muted">
              The average can pass while a user journey fails.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
