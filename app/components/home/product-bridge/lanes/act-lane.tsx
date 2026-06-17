export function ActLane() {
  return (
    <g className="product-lane product-lane-act">
      <path className="product-pipe-line" d="M506 256 H592 C636 256 632 336 686 336 H756" />
      <text x="588" y="338">act behavior</text>
      <path d="M690 356 C750 340 790 354 842 374 C878 388 908 378 942 352" />
      <path d="M690 382 C756 392 814 394 878 382" />
      <circle cx="828" cy="348" r="22" />
      <circle cx="828" cy="348" r="38" />
      <rect x="900" y="326" width="44" height="28" />
      <path d="M820 340 L836 356" />
      <path d="M836 340 L820 356" />
      <text className="product-lane-note" x="690" y="410">tool effect contained</text>
    </g>
  );
}
