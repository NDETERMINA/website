import { proofSteps } from "../content";
import { ProofStepIcon } from "../proof-step-icon";
import { HeroSignal, HeroSignalHandler } from "./hero-diagram/types";

const proofSignals = {
  simulate: "simulate",
  observe: "observe",
  evidence: "evidence",
  decide: "decide",
  memory: "memory"
} satisfies Record<(typeof proofSteps)[number]["icon"], HeroSignal>;

const proofActiveSignals = {
  simulate: ["simulate", "world"],
  observe: ["observe", "rank", "retrieve", "act"],
  evidence: ["evidence", "policy"],
  decide: ["decide", "ship", "review", "block"],
  memory: ["memory"]
} satisfies Record<(typeof proofSteps)[number]["icon"], readonly HeroSignal[]>;

function isProofStepActive(icon: (typeof proofSteps)[number]["icon"], activeSignal?: HeroSignal | null) {
  return activeSignal ? (proofActiveSignals[icon] as readonly HeroSignal[]).includes(activeSignal) : false;
}

type ProofStripProps = {
  activeSignal?: HeroSignal | null;
  onSignal?: HeroSignalHandler;
};

export function ProofStrip({ activeSignal, onSignal }: ProofStripProps) {
  return (
    <div className="home-proof-strip" aria-label="Determina release rehearsal loop">
      <p>Built for teams shipping AI systems that impact real users.</p>
      {proofSteps.map(({ icon, title, body }) => (
        <article
          key={title}
          data-active={isProofStepActive(icon, activeSignal) ? "true" : "false"}
          onBlur={() => onSignal?.(null)}
          onFocus={() => onSignal?.(proofSignals[icon])}
          onPointerEnter={() => onSignal?.(proofSignals[icon])}
          onPointerLeave={() => onSignal?.(null)}
          tabIndex={0}
        >
          <span className={`home-proof-icon home-proof-icon-${icon}`} aria-hidden="true">
            <ProofStepIcon type={icon} />
          </span>
          <h2>{title}</h2>
          <p>{body}</p>
        </article>
      ))}
    </div>
  );
}
