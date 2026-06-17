const artifactRoute = [
  ["01", "trace", "behavior path"],
  ["02", "lens", "who and where"],
  ["03", "diff", "what changed"],
  ["04", "verifier", "policy checks"],
  ["05", "decision", "review / ship / block"],
  ["06", "memory", "future reruns"]
] as const;

export function ArtifactRoute() {
  return (
    <g className="artifact-route">
      {artifactRoute.map(([number, label, detail], index) => {
        const x = 98 + index * 146;

        return (
          <g key={number}>
            <circle cx={x} cy="536" r="18" />
            {index < artifactRoute.length - 1 ? <path d={`M${x + 28} 536 H${x + 112}`} /> : null}
            <text className="artifact-route-number" x={x + 34} y="528">{number}</text>
            <text x={x + 34} y="548">{label}</text>
            <text className="artifact-route-detail" x={x + 34} y="566">{detail}</text>
          </g>
        );
      })}
    </g>
  );
}
