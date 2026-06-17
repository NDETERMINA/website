import { RehearsalEngineCore } from "../../visuals/rehearsal-engine/rehearsal-engine-core";
import { HeroSignalHandler } from "./types";

export function RehearsalCore({ onSignal }: { onSignal: HeroSignalHandler }) {
  return (
    <g
      className="diagram-engine"
      role="group"
      aria-label="Rehearsal engine: simulate, compare, and measure"
      tabIndex={0}
      onBlur={() => onSignal(null)}
      onFocus={() => onSignal("simulate")}
      onPointerEnter={() => onSignal("simulate")}
      onPointerLeave={() => onSignal(null)}
    >
      <RehearsalEngineCore cx={410} cy={240} scale={0.82} idPrefix="hero-diagram-engine" />
      <text className="diagram-label" x="410" y="76" textAnchor="middle">Observe</text>
      <path className="diagram-arrow" d="M410 92 L406 84 H414 Z" />
      <text className="diagram-label" x="410" y="414" textAnchor="middle">Evidence</text>
      <path className="diagram-arrow" d="M410 394 L406 402 H414 Z" />
    </g>
  );
}
