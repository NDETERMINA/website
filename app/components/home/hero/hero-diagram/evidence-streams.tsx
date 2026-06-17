import { evidenceRows } from "./data";
import { EvidenceRow } from "./evidence-row";
import { HeroSignalHandler } from "./types";

export function EvidenceStreams({ onSignal }: { onSignal: HeroSignalHandler }) {
  return (
    <g className="diagram-streams">
      <text className="diagram-label" x="606" y="56">Evidence streams</text>
      {evidenceRows.map((row) => (
        <EvidenceRow key={row.signal} {...row} onSignal={onSignal} />
      ))}
    </g>
  );
}
