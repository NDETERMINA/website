export function DecisionPorts() {
  return (
    <>
      <g className="decision-port decision-port-left">
        <path className="decision-port-shadow" d="M252 212 H348" />
        <path className="decision-port-line" d="M252 212 H348" />
        <path className="decision-port-highlight" d="M252 208.5 H348" />
        <rect className="decision-port-collar" x="268" y="199" width="7" height="26" />
        <rect className="decision-port-collar is-wide" x="281" y="196" width="10" height="32" />
        <rect className="decision-port-collar" x="298" y="199" width="7" height="26" />
      </g>
      <g className="decision-port decision-port-right">
        <path className="decision-port-shadow" d="M512 212 H626" />
        <path className="decision-port-line" d="M512 212 H626" />
        <path className="decision-port-highlight" d="M512 208.5 H626" />
        <rect className="decision-port-collar" x="532" y="199" width="7" height="26" />
        <rect className="decision-port-collar is-wide" x="546" y="196" width="10" height="32" />
        <rect className="decision-port-collar" x="563" y="199" width="7" height="26" />
      </g>
      <g className="decision-port decision-port-top">
        <path className="decision-port-line" d="M430 116 V86" />
        <rect className="decision-port-collar" x="419" y="94" width="22" height="6" />
        <rect className="decision-port-collar is-wide" x="416" y="82" width="28" height="8" />
      </g>
      <g className="decision-port decision-port-bottom">
        <path className="decision-port-line" d="M430 308 V338" />
        <rect className="decision-port-collar" x="419" y="324" width="22" height="6" />
        <rect className="decision-port-collar is-wide" x="416" y="336" width="28" height="8" />
      </g>
    </>
  );
}
