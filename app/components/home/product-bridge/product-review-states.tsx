export function ProductReviewStates() {
  return (
    <g className="product-review-states">
      <circle cx="80" cy="340" r="14" />
      <path d="M74 340 l5 6 l11 -15" />
      <text x="106" y="345">ship</text>
      <circle cx="170" cy="340" r="14" />
      <path d="M164 340 H176" />
      <text x="196" y="345">review</text>
      <circle cx="286" cy="340" r="14" />
      <path d="M280 334 L292 346" />
      <path d="M292 334 L280 346" />
      <text x="312" y="345">block</text>
    </g>
  );
}
