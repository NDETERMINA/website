import { worldInputRows } from "./world-input-rows";

const spineX = 400;
const numberX = 426;
const rowTextX = 454;
const laneStartX = 520;
const enginePortX = 932;
const enginePortY = 278;
const laneOffsets = [-14, -5, 5, 14];

function laneStart(rowIndex: number, laneIndex: number) {
  return laneStartX + ((rowIndex * 11 + laneIndex * 17) % 24);
}

function markerX(rowIndex: number, laneIndex: number, markerIndex: number) {
  return laneStart(rowIndex, laneIndex) + 12 + ((rowIndex * 37 + laneIndex * 61 + markerIndex * 43) % 214);
}

function markerOpacity(rowIndex: number, laneIndex: number, markerIndex: number) {
  return [0.24, 0.34, 0.52, 0.72][(rowIndex + laneIndex + markerIndex) % 4];
}

export function WorldRowPaths() {
  const incomingLines = Array.from({ length: 84 }, (_, index) => {
    const row = worldInputRows[index % worldInputRows.length];
    const startY = 328 + (index % 17) * 7 - Math.floor(index / 17) * 10;
    const targetY = row.y + ((index % 7) - 3) * 3.2;
    const startX = 2 + (index % 10) * 9;
    const controlX = 136 + (index % 10) * 15;

    return (
      <path
        className="world-incoming-line"
        key={`incoming-${index}`}
        d={`M${startX} ${startY} C${controlX} ${startY - 26} ${spineX - 92} ${targetY} ${spineX - 20} ${targetY}`}
      />
    );
  });

  return (
    <g className="world-row-paths">
      <path className="world-spine" d={`M${spineX} 42 V518`} />
      {incomingLines}
      <rect className="world-label-shield" x="418" y="44" width="202" height="482" rx="16" />
      {worldInputRows.map((row, rowIndex) => (
        <g className="world-input-row" key={row.number}>
          <path
            className="world-node-lead"
            d={`M${spineX - 88} ${row.y} C${spineX - 54} ${row.y - 2} ${spineX - 28} ${row.y} ${spineX - 18} ${row.y}`}
          />
          <circle className="world-node-ring is-outer" cx={spineX} cy={row.y} r="22" />
          <circle className="world-node-ring" cx={spineX} cy={row.y} r="14" />
          <circle className="world-node-core" cx={spineX} cy={row.y} r="5.6" />
          <text className="world-row-number" x={numberX} y={row.y - 13}>{row.number}</text>
          <text className="world-row-title" x={rowTextX} y={row.y - 13}>{row.label}</text>
          {row.detail.map((line, lineIndex) => (
            <text className="world-small" key={line} x={rowTextX} y={row.y + 5 + lineIndex * 11}>
              {line}
            </text>
          ))}
          {laneOffsets.map((offset, laneIndex) => {
            const laneY = row.y + offset;
            const laneX = laneStart(rowIndex, laneIndex);
            const endX = 758 + ((rowIndex * 23 + laneIndex * 19) % 112);
            const mergeY = enginePortY + (row.y - enginePortY) * 0.2 + (laneIndex - 1.5) * 6;
            const portY = enginePortY + (row.y - enginePortY) * 0.055 + (laneIndex - 1.5) * 2.6;
            const portX = enginePortX + (laneIndex % 2) * 5;

            return (
              <g key={`${row.number}-lane-${laneIndex}`}>
                <path className="world-data-lane" d={`M${laneX} ${laneY} C${laneX + 74} ${laneY + (laneIndex - 1.5) * 0.9} ${endX - 84} ${laneY} ${endX} ${laneY}`} />
                <path
                  className="world-output-line"
                  d={`M${endX} ${laneY} C${endX + 70} ${laneY} ${enginePortX - 88} ${mergeY} ${portX} ${portY}`}
                />
                {Array.from({ length: 5 }, (_, markerIndex) => {
                  const size = (rowIndex + laneIndex + markerIndex) % 4 === 0 ? 4.4 : 2.8;
                  const x = markerX(rowIndex, laneIndex, markerIndex);
                  const y = laneY - size / 2 + (((rowIndex + markerIndex) % 3) - 1) * 0.8;

                  return (
                    <rect
                      className="world-lane-marker"
                      key={`${row.number}-${laneIndex}-${markerIndex}`}
                      x={x}
                      y={y}
                      width={size}
                      height={size}
                      style={{ opacity: markerOpacity(rowIndex, laneIndex, markerIndex) }}
                    />
                  );
                })}
              </g>
            );
          })}
        </g>
      ))}
    </g>
  );
}
