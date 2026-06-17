import { decisions } from "./data";
import { DiagramIcon } from "./diagram-icon";
import { HeroSignalHandler } from "./types";

export function DecisionRail({ onSignal }: { onSignal: HeroSignalHandler }) {
  return (
    <g className="diagram-decisions">
      <text className="diagram-label" x="838" y="56" textAnchor="middle">Decide</text>
      <path className="diagram-decision-axis" d="M838 76 V414" />
      {decisions.map(({ detail, icon, signal, title, y }) => (
        <g
          className="diagram-decision"
          data-signal={signal}
          role="group"
          aria-label={`Decision outcome: ${title}, ${detail}`}
          tabIndex={0}
          key={signal}
          onBlur={() => onSignal(null)}
          onFocus={() => onSignal(signal)}
          onPointerEnter={() => onSignal(signal)}
          onPointerLeave={() => onSignal(null)}
        >
          <rect className="diagram-hit-area" x="804" y={y - 36} width="152" height="72" rx="4" />
          <path className="diagram-decision-shelf" d={`M868 ${y} H944`} />
          <circle className="diagram-decision-circle" cx="838" cy={y} r="28" />
          <circle className="diagram-decision-dot" cx="838" cy={y - 42} r="2.2" />
          <DiagramIcon type={icon} x={838} y={y} />
          <text className="diagram-decision-title" x="880" y={y - 4}>{title}</text>
          <text className="diagram-row-muted" x="880" y={y + 18}>{detail}</text>
        </g>
      ))}
    </g>
  );
}
