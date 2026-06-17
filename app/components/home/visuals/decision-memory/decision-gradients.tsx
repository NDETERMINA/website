export function DecisionGradients() {
  return (
    <defs>
      <radialGradient id="decisionGateFace" cx="38%" cy="28%" r="78%">
        <stop offset="0%" stopColor="#5f6540" />
        <stop offset="48%" stopColor="#323820" />
        <stop offset="100%" stopColor="#15180f" />
      </radialGradient>
      <linearGradient id="decisionGateMetal" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fff8ea" stopOpacity="0.92" />
        <stop offset="24%" stopColor="#a9a293" stopOpacity="0.78" />
        <stop offset="48%" stopColor="#4c4d44" stopOpacity="0.62" />
        <stop offset="72%" stopColor="#c2b28e" stopOpacity="0.82" />
        <stop offset="100%" stopColor="#f7f0df" stopOpacity="0.88" />
      </linearGradient>
      <linearGradient id="decisionPipeMetal" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#3f4038" />
        <stop offset="32%" stopColor="#f2ead7" />
        <stop offset="56%" stopColor="#9c9686" />
        <stop offset="100%" stopColor="#46483f" />
      </linearGradient>
      <filter id="decisionHardwareShadow" x="-35%" y="-35%" width="170%" height="170%">
        <feDropShadow dx="0" dy="5" stdDeviation="4" floodColor="#211f17" floodOpacity="0.16" />
      </filter>
    </defs>
  );
}
