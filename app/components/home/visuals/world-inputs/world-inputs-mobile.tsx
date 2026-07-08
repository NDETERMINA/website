import { worldInputRows } from "./world-input-rows";

export function WorldInputsMobile() {
  return (
    <div className="world-inputs-mobile" aria-label="World intake: the nine inputs Determina models around a release">
      <p className="world-inputs-mobile-heading tech-label">World intake</p>
      <ol className="world-inputs-mobile-list">
        {worldInputRows.map((row) => (
          <li key={row.number} className="world-inputs-mobile-row">
            <span className="world-inputs-mobile-num">{row.number}</span>
            <span className="world-inputs-mobile-label">{row.label}</span>
            <span className="world-inputs-mobile-detail">{row.detail.join(" ")}</span>
          </li>
        ))}
      </ol>
      <div className="world-inputs-mobile-engine">
        <span className="world-inputs-mobile-engine-dot" />
        Rehearsal engine
      </div>
    </div>
  );
}
