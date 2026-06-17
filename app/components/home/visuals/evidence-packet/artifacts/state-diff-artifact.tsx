export function StateDiffArtifact() {
  return (
    <g className="artifact artifact-diff">
      <path className="artifact-paper" d="M56 402 C126 396 228 402 318 400 L314 504 C224 508 126 502 56 506 Z" />
      <path className="artifact-fold" d="M286 400 L318 432 L286 432 Z" />
      <text x="82" y="434">state diff</text>
      <path d="M82 454 H292" />
      <path d="M82 480 H292" />
      <text className="artifact-small" x="100" y="472">{"rank 7 -> 1"}</text>
      <text className="artifact-small" x="208" y="472">policy changed</text>
    </g>
  );
}
