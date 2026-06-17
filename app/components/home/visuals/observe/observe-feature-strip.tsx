const featureItems = [
  ["instrument", "Multi-layer instrumentation"],
  ["shield", "Deterministic replay"],
  ["check", "Evidence you can trust"],
  ["text", "Better evidence. Better decisions."]
] as const;

function StripIcon({ type }: { type: (typeof featureItems)[number][0] }) {
  if (type === "shield") {
    return (
      <svg viewBox="0 0 28 28" aria-hidden="true">
        <path d="M14 3.5 L22 7 V13.4 C22 18.6 18.7 22.2 14 24.5 C9.3 22.2 6 18.6 6 13.4 V7 Z" />
        <path d="M11 14.2 L13.2 16.4 L17.4 11.6" />
      </svg>
    );
  }

  if (type === "check") {
    return (
      <svg viewBox="0 0 28 28" aria-hidden="true">
        <circle cx="14" cy="14" r="9.5" />
        <path d="M10.2 14.2 L12.9 16.8 L18 11.2" />
      </svg>
    );
  }

  if (type === "text") {
    return <span className="observe-strip-spacer" aria-hidden="true" />;
  }

  return (
    <svg viewBox="0 0 28 28" aria-hidden="true">
      <path d="M14 3 V8 M14 20 V25 M3 14 H8 M20 14 H25" />
      <circle cx="14" cy="14" r="1.7" />
      <circle cx="8.8" cy="8.8" r="1.3" />
      <circle cx="19.2" cy="8.8" r="1.3" />
      <circle cx="8.8" cy="19.2" r="1.3" />
      <circle cx="19.2" cy="19.2" r="1.3" />
    </svg>
  );
}

function Crosshair() {
  return (
    <svg className="observe-strip-crosshair" viewBox="0 0 36 36" aria-hidden="true">
      <circle cx="18" cy="18" r="8.5" />
      <path d="M18 1.5 V12 M18 24 V34.5 M1.5 18 H12 M24 18 H34.5" />
    </svg>
  );
}

export function ObserveFeatureStrip() {
  return (
    <div className="observe-feature-strip" aria-label="Determina observation features">
      <Crosshair />
      {featureItems.map(([icon, label]) => (
        <div className="observe-feature" key={label}>
          <StripIcon type={icon} />
          <span>{label}</span>
        </div>
      ))}
      <Crosshair />
    </div>
  );
}
