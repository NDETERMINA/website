export function RankInstrument() {
  return (
    <g className="rank-instrument">
      <text x="704" y="78">rank behavior</text>
      <path d="M704 128 C736 114 762 102 790 118 C820 136 844 90 874 102 C904 114 924 118 960 98" />
      <path d="M700 168 C760 162 818 164 978 160" />
      <path d="M700 186 C760 180 818 182 978 178" />
      <path d="M700 204 C760 198 818 200 978 196" />
      {[724, 774, 824, 876, 932].map((x, index) => (
        <circle key={x} cx={x} cy={[120, 108, 132, 98, 110][index]} r={index === 3 ? 7 : 5} />
      ))}
      <circle cx="972" cy="102" r="24" />
      <circle cx="972" cy="102" r="38" />
      <text className="axis-label" x="1000" y="104">01</text>
    </g>
  );
}
