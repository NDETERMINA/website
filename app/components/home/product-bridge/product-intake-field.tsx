export function ProductIntakeField() {
  return (
    <g className="product-intake-field">
      {Array.from({ length: 42 }, (_, index) => {
        const x = 64 + (index % 9) * 28 + Math.floor(index / 9) * 12;
        const y = 154 + (index % 8) * 18 + Math.floor(index / 9) * 16;
        const size = index % 5 === 0 ? 6 : index % 3 === 0 ? 4 : 3;

        return <rect key={`${x}-${y}`} x={x} y={y} width={size} height={size} />;
      })}
      <path d="M74 214 C172 166 254 178 356 212" />
      <path d="M68 244 C170 226 260 226 356 212" />
      <path d="M74 282 C172 322 258 302 356 212" />
      <text x="78" y="114">behavior enters</text>
    </g>
  );
}
