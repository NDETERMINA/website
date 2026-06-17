import { worldItems } from "./data";
import { DiagramIcon } from "./diagram-icon";
import { HeroSignalHandler } from "./types";

export function WorldInputs({ onSignal }: { onSignal: HeroSignalHandler }) {
  return (
    <g className="diagram-inputs">
      <text className="diagram-label" x="24" y="42">Production-like worlds</text>
      {worldItems.map((item) => (
        <g
          className="diagram-input-row"
          data-signal={item.signal}
          key={item.label}
          role="group"
          aria-label={`World input: ${item.label}`}
          tabIndex={0}
          onBlur={() => onSignal(null)}
          onFocus={() => onSignal(item.signal)}
          onPointerEnter={() => onSignal(item.signal)}
          onPointerLeave={() => onSignal(null)}
        >
          <rect className="diagram-hit-area" x="24" y={item.y - 18} width="174" height="32" rx="4" />
          <DiagramIcon type={item.icon} x={40} y={item.y} />
          <text className="diagram-row-text" x="72" y={item.y + 4}>{item.label}</text>
          <rect className="diagram-terminal" x="188" y={item.y - 3} width="6" height="6" />
        </g>
      ))}
    </g>
  );
}
