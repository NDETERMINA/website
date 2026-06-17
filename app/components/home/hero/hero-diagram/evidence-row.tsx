import { HeroSignal, HeroSignalHandler } from "./types";
import { DiagramIcon } from "./diagram-icon";

type EvidenceRowProps = {
  detail: string;
  filled: readonly number[];
  ghost: readonly number[];
  icon: string;
  signal: HeroSignal;
  title: string;
  y: number;
  onSignal: HeroSignalHandler;
};

export function EvidenceRow({ detail, filled, ghost, icon, signal, title, y, onSignal }: EvidenceRowProps) {
  return (
    <g
      className="diagram-stream-row"
      data-signal={signal}
      role="group"
      aria-label={`${title}: ${detail}`}
      tabIndex={0}
      onBlur={() => onSignal(null)}
      onFocus={() => onSignal(signal)}
      onPointerEnter={() => onSignal(signal)}
      onPointerLeave={() => onSignal(null)}
    >
      <rect className="diagram-hit-area" x="536" y={y - 34} width="330" height="78" rx="4" />
      <circle className="diagram-stream-icon-ring" cx="562" cy={y - 2} r="23" />
      <DiagramIcon type={icon} x={562} y={y - 2} />
      <text className="diagram-stream-title" x="606" y={y - 8}>{title}</text>
      <text className="diagram-row-muted" x="606" y={y + 14}>{detail}</text>
      {[0, 1].map((row) => (
        <g key={row}>
          {Array.from({ length: 19 }, (_, index) => {
            const isFilled = filled.includes(index + row);
            const isGhost = ghost.includes(index + row);
            return (
              <rect
                className={isFilled ? "diagram-marker is-filled" : isGhost ? "diagram-marker is-ghost" : "diagram-marker"}
                key={`${row}-${index}`}
                x={606 + index * 11.5}
                y={y + 36 + row * 18}
                width="5"
                height="5"
              />
            );
          })}
        </g>
      ))}
      <path className="diagram-stream-arrow" d={`M826 ${y + 40} H852 M852 ${y + 40} L844 ${y + 36} M852 ${y + 40} L844 ${y + 44}`} />
    </g>
  );
}
