export function DecisionPacket() {
  return (
    <g className="decision-packet">
      <path className="packet-shadow" d="M102 126 H244 L284 164 V298 H102 Z" />
      <path className="packet-back is-third" d="M94 116 H236 L276 154 V290 H94 Z" />
      <path className="packet-back" d="M86 108 H228 L268 146 V282 H86 Z" />
      <path className="packet-front" d="M76 96 H218 L258 134 V272 H76 Z" />
      <path className="packet-fold" d="M218 96 V134 H258" />
      <path className="packet-fold-edge" d="M224 106 L248 130" />
      <text x="102" y="132">evidence packet</text>
      <text className="decision-packet-id" x="102" y="173">R-047</text>
      <path className="packet-rule" d="M102 194 H218" />
      <path className="packet-rule" d="M102 214 H232" />
      <path className="packet-rule" d="M102 234 H206" />
      <path className="packet-rule is-light" d="M102 252 H226" />
      <path className="packet-metadata-line" d="M236 178 H292" />
      <path className="packet-metadata-line" d="M236 198 H312" />
      <path className="packet-metadata-line" d="M236 218 H294" />
      <rect className="packet-dot" x="282" y="174" width="5" height="5" />
      <rect className="packet-dot" x="304" y="194" width="5" height="5" />
      <rect className="packet-dot" x="284" y="214" width="5" height="5" />
      <circle className="packet-micro-dot" cx="114" cy="186" r="1.6" />
      <circle className="packet-micro-dot" cx="124" cy="186" r="1.6" />
      <circle className="packet-micro-dot" cx="134" cy="186" r="1.6" />
      <text className="decision-packet-small" x="102" y="213">rank trace</text>
      <text className="decision-packet-small" x="102" y="235">diffs and verifier</text>
      <g className="decision-packet-socket">
        <path className="packet-socket-shadow" d="M254 212 H286" />
        <path className="packet-socket-line" d="M254 212 H286" />
        <rect x="250" y="200" width="7" height="24" />
        <rect className="is-wide" x="262" y="197" width="10" height="30" />
        <rect x="278" y="200" width="7" height="24" />
      </g>
    </g>
  );
}
