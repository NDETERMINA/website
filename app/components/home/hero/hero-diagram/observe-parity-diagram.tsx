import { RehearsalEngineCore } from "../../visuals/rehearsal-engine/rehearsal-engine-core";

const fanLines = Array.from({ length: 43 }, (_, index) => {
  const y = 76 + index * 9.5;
  const bend = index - 21;
  const xStart = 0 + (index % 6) * 7;
  const pull = index % 4 === 0 ? 28 : index % 4 === 1 ? -16 : index % 4 === 2 ? 9 : -6;
  const endY = 260 + bend * 0.34;
  return {
    d: `M${xStart} ${y + bend * 0.82} C92 ${y - 84 + bend * 3.2 + pull} 206 ${y - 18 + bend * 1.22 - pull * 0.25} 288 ${endY}`,
    opacity: 0.035 + (index % 9) * 0.017
  };
});

const fanNodes = [
  [48, 136, 2.4, 0.12], [58, 158, 3, 0.18], [70, 332, 2.6, 0.1], [72, 176, 4, 0.18],
  [82, 388, 2.4, 0.1], [92, 286, 3, 0.38], [104, 238, 2.5, 0.18], [110, 214, 5, 0.45],
  [116, 338, 4, 0.28], [124, 112, 2.4, 0.12], [134, 188, 2.6, 0.22], [138, 265, 4, 0.54],
  [144, 356, 2.8, 0.14], [152, 392, 4, 0.22], [155, 190, 3, 0.3], [162, 142, 2.5, 0.12],
  [168, 312, 2.8, 0.24], [176, 235, 5, 0.52], [184, 410, 2.2, 0.1], [188, 358, 3, 0.24],
  [198, 303, 4, 0.38], [206, 250, 2.2, 0.18], [210, 170, 2.5, 0.18], [218, 438, 2.2, 0.09],
  [224, 156, 3, 0.22], [230, 342, 2.4, 0.2], [236, 124, 3, 0.18], [236, 216, 4, 0.46],
  [244, 386, 2.5, 0.14], [246, 296, 2.5, 0.28], [252, 268, 5, 0.58], [258, 184, 2.2, 0.18],
  [266, 327, 3, 0.24], [272, 224, 2.5, 0.22], [274, 376, 3, 0.2], [282, 150, 2.2, 0.12],
  [286, 198, 4, 0.48], [292, 284, 2.6, 0.3], [302, 242, 3, 0.32], [312, 320, 2.4, 0.2],
  [318, 284, 3, 0.42], [320, 232, 3, 0.3], [330, 258, 2.5, 0.36]
] as const;

const rankTracks = Array.from({ length: 9 }, (_, track) => ({
  y: 144 + track * 13,
  d: `M686 ${144 + track * 13} C742 ${134 + track * 7} 804 ${148 + track * 3} 946 ${136 + track * 10}`
}));

const rankMarkers = [
  [696, 144], [724, 166], [746, 138], [770, 180], [788, 154], [808, 198], [824, 128],
  [844, 174], [854, 142], [878, 206], [894, 150], [920, 218], [934, 176],
  [704, 176], [728, 202], [758, 170], [782, 222], [800, 186], [826, 214],
  [840, 178], [866, 236], [886, 192], [908, 228], [704, 206], [758, 216],
  [816, 210], [872, 226], [928, 232]
] as const;

const retrieveDocs = [
  [752, 350], [790, 324], [832, 360], [842, 318], [894, 348]
] as const;

const actGrid = Array.from({ length: 56 }, (_, index) => ({
  x: 792 + (index % 8) * 13,
  y: 444 + Math.floor(index / 8) * 11,
  opacity: index % 5 === 0 ? 0.26 : index % 3 === 0 ? 0.16 : 0.075
}));

function PipeCollars({ x, y }: { x: number; y: number }) {
  return (
    <g className="hero-pipe-collar">
      <rect x={x} y={y - 8} width="4.5" height="16" />
      <rect x={x + 7} y={y - 10} width="5.5" height="20" />
      <rect x={x + 15} y={y - 8} width="4.5" height="16" />
    </g>
  );
}

function Target({ x, y, active = false }: { x: number; y: number; active?: boolean }) {
  return (
    <g className="hero-target">
      {[34, 26, 18, 10].map((radius) => (
        <circle key={radius} cx={x} cy={y} r={radius} />
      ))}
      <circle className={active ? "is-active" : undefined} cx={x} cy={y} r="6" />
    </g>
  );
}

function DocumentIcon({ x, y }: { x: number; y: number }) {
  return (
    <g className="hero-doc-icon" transform={`translate(${x} ${y})`}>
      <path d="M0 0 H12 L16 4 V18 H0 Z" />
      <path d="M12 0 V4 H16" />
      <path d="M4 8 H12 M4 12 H10" />
    </g>
  );
}

function ToolIcon({ x, y }: { x: number; y: number }) {
  return (
    <g className="hero-tool-icon" transform={`translate(${x} ${y})`}>
      <circle cx="13" cy="13" r="15" />
      <path d="M18.2 6.8 C16.4 6.2 14.4 6.7 13.1 8 C11.7 9.4 11.3 11.3 12 13 L7.1 17.9 C6.5 18.5 6.5 19.5 7.1 20.1 C7.7 20.7 8.7 20.7 9.3 20.1 L14.2 15.2 C15.9 15.9 17.8 15.5 19.2 14.1 C20.5 12.8 21 10.8 20.4 9 L17 12.4 L14.8 10.2 Z" />
    </g>
  );
}

export function HeroDiagram() {
  return (
    <div className="observe-parity-visual">
      <svg className="observe-parity-diagram" viewBox="0 0 1040 560" role="img" aria-label="Observed AI behavior rehearsal engine and behavior traces">
        <defs>
          <radialGradient id="heroEngineFace" cx="44%" cy="36%" r="70%">
            <stop offset="0%" stopColor="#171714" />
            <stop offset="46%" stopColor="#080808" />
            <stop offset="100%" stopColor="#010101" />
          </radialGradient>
          <radialGradient id="heroMetal" cx="38%" cy="30%" r="74%">
            <stop offset="0%" stopColor="#e4dfd2" />
            <stop offset="28%" stopColor="#a9a296" />
            <stop offset="54%" stopColor="#4b4d47" />
            <stop offset="76%" stopColor="#c6bdae" />
            <stop offset="100%" stopColor="#66665d" />
          </radialGradient>
          <linearGradient id="heroPipeMetal" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#3f403a" />
            <stop offset="35%" stopColor="#f0ead9" />
            <stop offset="55%" stopColor="#9b9687" />
            <stop offset="100%" stopColor="#4b4d45" />
          </linearGradient>
          <linearGradient id="heroPipeHighlight" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.78" />
            <stop offset="45%" stopColor="#ffffff" stopOpacity="0.24" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
          <filter id="heroSoftShadow" x="-20%" y="-20%" width="140%" height="150%">
            <feDropShadow dx="0" dy="16" stdDeviation="11" floodColor="#211f17" floodOpacity="0.18" />
          </filter>
          <filter id="heroHardwareShadow" x="-40%" y="-40%" width="180%" height="180%">
            <feDropShadow dx="0" dy="2" stdDeviation="1.4" floodColor="#11100c" floodOpacity="0.22" />
          </filter>
        </defs>

        <g className="hero-field-lines">
          <path d="M310 58 V480" />
          <path d="M268 260 H498" />
          <path d="M296 112 V438" strokeDasharray="2 7" />
          <path d="M250 108 h14 M257 101 v14 M250 456 h14 M257 449 v14 M326 112 h8 M330 108 v8 M326 432 h8 M330 428 v8" />
          <circle cx="408" cy="260" r="178" />
          <circle cx="408" cy="260" r="146" />
          <path d="M408 54 V104 M408 416 V476 M226 260 H286 M532 260 H590" />
          <text x="408" y="86" textAnchor="middle">REHEARSAL WORLD</text>
          <path d="M408 102 l-5 -8 h10 z" />
          <text x="408" y="504" textAnchor="middle">EVIDENCE ATTACHES</text>
          <path d="M408 518 l-5 -8 h10 z" />
        </g>

        <g className="hero-input-fan">
          {fanLines.map((line) => (
            <path key={line.d} d={line.d} opacity={line.opacity} />
          ))}
          {fanNodes.map(([x, y, size, opacity]) => (
            <rect key={`${x}-${y}`} x={x} y={y} width={size} height={size} opacity={opacity} />
          ))}
        </g>

        <g className="hero-engine">
          <RehearsalEngineCore cx={408} cy={260} scale={0.78} idPrefix="observe-parity-engine" />
        </g>

        <g className="hero-pipes">
          <path className="hero-pipe-shadow" d="M520 236 H566 C594 236 594 80 636 80 H704" />
          <path className="hero-pipe-line" d="M520 236 H566 C594 236 594 80 636 80 H704" />
          <path className="hero-pipe-highlight" d="M520 233 H566 C594 233 594 77 636 77 H704" />
          <PipeCollars x={556} y={236} />
          <PipeCollars x={650} y={80} />

          <path className="hero-pipe-shadow" d="M528 260 H620 C648 260 650 252 678 252 H704" />
          <path className="hero-pipe-line" d="M528 260 H620 C648 260 650 252 678 252 H704" />
          <path className="hero-pipe-highlight" d="M528 257 H620 C648 257 650 249 678 249 H704" />
          <PipeCollars x={564} y={260} />
          <PipeCollars x={650} y={252} />

          <path className="hero-pipe-shadow" d="M520 284 H562 C600 284 604 418 646 418 H704" />
          <path className="hero-pipe-line" d="M520 284 H562 C600 284 604 418 646 418 H704" />
          <path className="hero-pipe-highlight" d="M520 281 H562 C600 281 604 415 646 415 H704" />
          <PipeCollars x={556} y={284} />
          <PipeCollars x={662} y={418} />
        </g>

        <g className="hero-behavior hero-rank">
          <rect className="hero-module-bullet" x="712" y="76" width="7" height="7" />
          <text className="hero-module-title" x="732" y="84">RANK BEHAVIOR</text>
          <text className="hero-module-copy" x="732" y="108">Ranking shifts and candidate</text>
          <text className="hero-module-copy" x="732" y="124">movement over time.</text>
          <path className="hero-rank-main" d="M704 168 C738 142 762 176 796 150 C826 126 856 158 884 140 C918 112 944 136 970 136" />
          {rankTracks.map((track) => <path key={track.y} className="hero-rank-track" d={track.d} />)}
          {rankMarkers.map(([x, y], index) => (
            <rect key={`${x}-${y}`} className={index % 5 === 0 ? "is-olive" : undefined} x={x} y={y} width="4" height="4" />
          ))}
          {[704, 758, 810, 860, 920].map((x, index) => (
            <circle key={x} className={index === 3 ? "is-brass" : undefined} cx={x} cy={index === 3 ? 132 : 166 + (index % 2) * 16} r={index === 3 ? 5.2 : 3.2} />
          ))}
          <Target x={988} y={140} active />
          {["01", "02", "03", "04", "05", "..", "50"].map((label, index) => (
            <text key={label} className="hero-rank-number" x="1020" y={126 + index * 14}>{label}</text>
          ))}
        </g>

        <g className="hero-behavior hero-retrieve">
          <rect className="hero-module-bullet" x="712" y="246" width="7" height="7" />
          <text className="hero-module-title" x="732" y="254">RETRIEVE BEHAVIOR</text>
          <text className="hero-module-copy" x="732" y="278">Source paths, citations,</text>
          <text className="hero-module-copy" x="732" y="294">and context coverage.</text>
          <path className="hero-retrieve-path" d="M688 330 C728 316 754 354 790 330 C830 302 876 326 960 310" />
          <path className="hero-retrieve-path" d="M688 354 C724 370 770 328 810 356 C848 382 902 354 960 366" />
          <path className="hero-retrieve-path is-dashed" d="M688 376 C744 346 800 392 850 354 C890 324 920 348 960 342" />
          <path className="hero-retrieve-path is-muted" d="M694 314 C750 304 792 316 838 300 C884 284 922 296 962 286" />
          <path className="hero-retrieve-path is-muted" d="M700 392 C752 402 806 378 854 392 C896 404 928 392 962 386" />
          {[718, 754, 804, 836, 886, 914].map((x, index) => (
            <circle key={x} cx={x} cy={[332, 344, 360, 324, 356, 332][index]} r={index === 1 || index === 3 ? 4.2 : 3.1} />
          ))}
          <rect x="752" y="338" width="6" height="6" />
          <rect x="860" y="348" width="6" height="6" />
          {retrieveDocs.map(([x, y]) => <DocumentIcon key={`${x}-${y}`} x={x} y={y} />)}
          <Target x={984} y={336} />
        </g>

        <g className="hero-behavior hero-act">
          <rect className="hero-module-bullet" x="712" y="414" width="7" height="7" />
          <text className="hero-module-title" x="732" y="422">ACT BEHAVIOR</text>
          <text className="hero-module-copy" x="732" y="446">Tool calls, resources used,</text>
          <text className="hero-module-copy" x="732" y="462">and side effects.</text>
          <path className="hero-act-path" d="M688 494 C744 482 790 494 840 474 C894 452 932 462 970 450" />
          <path className="hero-act-path is-dashed" d="M688 512 C740 512 792 526 842 504 C884 486 916 498 958 490" />
          <path className="hero-act-path is-dashed" d="M688 530 C744 540 806 540 860 524 C904 510 936 516 970 512" />
          <path className="hero-act-path is-muted" d="M690 474 C748 454 802 466 858 450 C904 438 940 440 968 430" />
          {[744, 786, 804, 842, 866, 914].map((x, index) => (
            <rect key={x} x={x} y={[486, 506, 474, 520, 504, 488][index]} width={index % 2 === 0 ? "6" : "4.4"} height={index % 2 === 0 ? "6" : "4.4"} />
          ))}
          {actGrid.map((cell) => (
            <rect key={`${cell.x}-${cell.y}`} className="hero-act-cell" x={cell.x} y={cell.y} width="5" height="5" opacity={cell.opacity} />
          ))}
          <ToolIcon x={886} y={460} />
          <ToolIcon x={790} y={524} />
          <Target x={996} y={498} />
        </g>
      </svg>
    </div>
  );
}
