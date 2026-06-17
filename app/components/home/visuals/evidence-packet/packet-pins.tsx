const pinPositions = [
  [50, 48, 8, 3],
  [50, 250, 8, 3],
  [56, 400, 8, 3],
  [724, 58, 8, 3],
  [704, 240, 8, 3],
  [710, 408, 8, 3],
  [398, 76, 10, 3.5],
  [398, 398, 10, 3.5]
] as const;

export function PacketPins() {
  return (
    <g className="packet-pins">
      {pinPositions.map(([cx, cy, r]) => (
        <circle key={`pin-${cx}-${cy}`} cx={cx} cy={cy} r={r} />
      ))}
      {pinPositions.map(([cx, cy, , r]) => (
        <circle className="pin-core" key={`pin-core-${cx}-${cy}`} cx={cx} cy={cy} r={r} />
      ))}
    </g>
  );
}
