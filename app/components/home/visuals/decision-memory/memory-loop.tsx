export function MemoryLoop() {
  return (
    <g className="memory-loop">
      <path className="memory-return-path" d="M518 304 C446 356 316 358 206 326 C176 316 154 306 138 290" />
      <path className="memory-arrow" d="M138 290 l19 4 l-13 15" />
      <path className="memory-tag-shadow" d="M282 334 H548 L582 362 L548 390 H282 L248 362 Z" />
      <path className="memory-tag" d="M270 326 H536 L568 358 L536 386 H270 L238 358 Z" />
      <circle cx="520" cy="358" r="6" />
      <path className="memory-divider" d="M294 365 H506" />
      <path className="memory-divider is-soft" d="M294 348 H450" />
      <text x="334" y="352">memory entry</text>
      <text className="memory-small" x="334" y="374">rank drift regression case</text>
      <text x="426" y="314">reusable memory</text>
    </g>
  );
}
