import {
  Check,
  ClipboardCheck,
  Database,
  FileText,
  ShieldAlert,
  X
} from "lucide-react";
import type { CSSProperties } from "react";

const packetRows = [
  ["Trace", "rank drift under personalization"],
  ["Diff", "+0.370 score movement"],
  ["Verifier", "policy support present"]
] as const;

const thresholds = [
  ["Policy", "passed", "92"],
  ["Quality", "above bar", "86"],
  ["Risk", "review", "54"]
] as const;

const outputStates = [
  {
    label: "Ship",
    Icon: Check,
    copy: "Meets release thresholds."
  },
  {
    label: "Review",
    Icon: ClipboardCheck,
    copy: "Needs human sign-off."
  },
  {
    label: "Block",
    Icon: X,
    copy: "Violates a guardrail."
  }
] as const;

function EvidencePacket() {
  return (
    <article className="decision-flow-card decision-flow-evidence">
      <p className="decision-flow-kicker">Evidence Packet</p>
      <div className="decision-flow-file">
        <FileText size={28} strokeWidth={1.35} />
        <div>
          <strong>R-047</strong>
          <span>Captured 05 / 14 / 25</span>
        </div>
      </div>
      <div className="decision-flow-rows">
        {packetRows.map(([label, detail], index) => (
          <div key={label} className="decision-flow-row">
            <span>{String(index + 1).padStart(2, "0")}</span>
            <div>
              <strong>{label}</strong>
              <p>{detail}</p>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}

function DecisionGate() {
  return (
    <article className="decision-flow-card decision-flow-gate">
      <p className="decision-flow-kicker">Decision Gate</p>
      <div className="decision-flow-gate-core">
        <ShieldAlert size={34} strokeWidth={1.25} />
        <strong>Release Decision</strong>
        <span>ship / review / block</span>
      </div>
      <div className="decision-flow-thresholds">
        {thresholds.map(([label, state, value]) => (
          <div key={label}>
            <p>
              <span>{label}</span>
              <em>{state}</em>
            </p>
            <i style={{ "--decision-threshold": `${value}%` } as CSSProperties} />
          </div>
        ))}
      </div>
    </article>
  );
}

function OutputStates() {
  return (
    <div className="decision-flow-outcomes">
      {outputStates.map(({ label, Icon, copy }) => (
        <article key={label} className={`decision-flow-outcome is-${label.toLowerCase()}`}>
          <span>
            <Icon size={19} strokeWidth={1.6} />
          </span>
          <div>
            <h3>{label}</h3>
            <p>{copy}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

function MemoryEntry() {
  return (
    <article className="decision-flow-memory">
      <p className="decision-flow-kicker">Reusable Memory</p>
      <div className="decision-flow-memory-body">
        <Database size={27} strokeWidth={1.35} />
        <div>
          <strong>Regression case</strong>
          <span>rank drift under personalization</span>
          <em>Future reruns inherit the failure case.</em>
        </div>
      </div>
      <span className="decision-flow-memory-pin" />
    </article>
  );
}

function FlowLines() {
  return (
    <svg className="decision-flow-lines" viewBox="0 0 1110 650" aria-hidden="true">
      <path d="M336 272 H405" />
      <path d="M704 178 H752" />
      <path d="M704 286 H752" />
      <path d="M704 394 H752" />
      <path d="M552 438 V488" />
      <path className="is-soft" d="M820 420 C780 500 706 536 632 536 H574" />
      <path className="is-dashed" d="M420 536 H214 C166 536 144 514 144 470 V432" />
      <path className="is-arrow" d="M746 172 L756 178 L746 184" />
      <path className="is-arrow" d="M746 280 L756 286 L746 292" />
      <path className="is-arrow" d="M746 388 L756 394 L746 400" />
      <circle cx="336" cy="272" r="3.5" />
      <circle cx="552" cy="488" r="3.5" />
      <circle cx="574" cy="536" r="3.5" />
    </svg>
  );
}

export function DecisionMemoryVisual() {
  return (
    <div className="decision-visual" aria-hidden="true">
      <div className="decision-stage decision-stage-calm">
        <FlowLines />
        <EvidencePacket />
        <DecisionGate />
        <OutputStates />
        <MemoryEntry />
      </div>
    </div>
  );
}
