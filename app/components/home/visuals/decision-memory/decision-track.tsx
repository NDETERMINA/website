export function DecisionTrack() {
  return (
    <>
      <g className="decision-track">
        <path d="M86 212 H254" />
        <path className="decision-right-pipe-shadow" d="M512 212 H626 C654 212 668 126 704 126" />
        <path className="decision-right-pipe" d="M512 212 H626 C654 212 668 126 704 126" />
        <path className="decision-right-pipe-highlight" d="M512 208.5 H626 C654 208.5 668 122.5 704 122.5" />
        <path className="decision-right-pipe-shadow" d="M512 212 H624 C656 212 668 212 704 212" />
        <path className="decision-right-pipe" d="M512 212 H624 C656 212 668 212 704 212" />
        <path className="decision-right-pipe-highlight" d="M512 208.5 H624 C656 208.5 668 208.5 704 208.5" />
        <path className="decision-right-pipe-shadow" d="M512 212 H624 C654 212 668 316 704 316" />
        <path className="decision-right-pipe" d="M512 212 H624 C654 212 668 316 704 316" />
        <path className="decision-right-pipe-highlight" d="M512 208.5 H624 C654 208.5 668 312.5 704 312.5" />
        <path d="M286 212 C346 132 500 132 560 212" />
        <path d="M560 212 C500 294 342 294 286 212" />
        <path d="M500 302 C420 372 278 374 178 334" />
        <g className="decision-right-coupling">
          <rect x="618" y="115" width="7" height="22" />
          <rect className="is-wide" x="630" y="112" width="10" height="28" />
          <rect x="646" y="115" width="7" height="22" />
          <rect x="636" y="201" width="7" height="22" />
          <rect className="is-wide" x="648" y="198" width="10" height="28" />
          <rect x="664" y="201" width="7" height="22" />
          <rect x="618" y="305" width="7" height="22" />
          <rect className="is-wide" x="630" y="302" width="10" height="28" />
          <rect x="646" y="305" width="7" height="22" />
        </g>
      </g>
      <g className="decision-motion-tokens" aria-hidden="true">
        <rect width="8" height="8" x="-4" y="-4">
          <animateMotion dur="8.5s" repeatCount="indefinite" path="M86 212 H254" />
        </rect>
        <circle r="4">
          <animateMotion
            dur="10.5s"
            begin="1.4s"
            repeatCount="indefinite"
            path="M500 302 C420 372 278 374 178 334"
          />
        </circle>
      </g>
    </>
  );
}
