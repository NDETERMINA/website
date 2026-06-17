export function RankLane() {
  return (
    <g className="product-lane product-lane-rank">
      <path className="product-pipe-line" d="M506 172 H592 C636 172 632 104 686 104 H756" />
      <text x="588" y="78">rank behavior</text>
      <path d="M686 118 C728 92 760 126 800 96 C832 72 866 86 912 66" />
      <path d="M686 146 H912" />
      <circle cx="746" cy="108" r="5" />
      <circle cx="836" cy="82" r="7" />
      <circle cx="914" cy="66" r="22" />
      <circle cx="914" cy="66" r="36" />
      <text className="product-lane-note" x="690" y="176">candidate order moves</text>
    </g>
  );
}
