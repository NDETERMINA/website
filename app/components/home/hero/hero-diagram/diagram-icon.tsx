type DiagramIconProps = {
  type: string;
  x: number;
  y: number;
};

export function DiagramIcon({ type, x, y }: DiagramIconProps) {
  const content = {
    users: (
      <>
        <circle cx={x - 5} cy={y - 4} r="3" />
        <circle cx={x + 5} cy={y - 4} r="3" />
        <path d={`M${x - 12} ${y + 8} C${x - 10} ${y + 1} ${x - 1} ${y + 1} ${x} ${y + 8}`} />
        <path d={`M${x} ${y + 8} C${x + 1} ${y + 1} ${x + 10} ${y + 1} ${x + 12} ${y + 8}`} />
      </>
    ),
    database: (
      <>
        <ellipse cx={x} cy={y - 7} rx="9" ry="4" />
        <path d={`M${x - 9} ${y - 7} V${y + 7} C${x - 9} ${y + 12} ${x + 9} ${y + 12} ${x + 9} ${y + 7} V${y - 7}`} />
        <path d={`M${x - 9} ${y} C${x - 9} ${y + 5} ${x + 9} ${y + 5} ${x + 9} ${y}`} />
      </>
    ),
    code: (
      <>
        <path d={`M${x - 5} ${y - 10} L${x - 14} ${y} L${x - 5} ${y + 10}`} />
        <path d={`M${x + 5} ${y - 10} L${x + 14} ${y} L${x + 5} ${y + 10}`} />
        <path d={`M${x + 1} ${y - 12} L${x - 1} ${y + 12}`} />
      </>
    ),
    shield: (
      <>
        <path d={`M${x} ${y - 13} L${x + 10} ${y - 8} V${y + 1} C${x + 9} ${y + 9} ${x + 3} ${y + 13} ${x} ${y + 14} C${x - 3} ${y + 13} ${x - 9} ${y + 9} ${x - 10} ${y + 1} V${y - 8} Z`} />
        <path d={`M${x - 5} ${y} L${x - 1} ${y + 4} L${x + 7} ${y - 5}`} />
      </>
    ),
    pulse: <path d={`M${x - 14} ${y} H${x - 6} L${x - 2} ${y - 10} L${x + 3} ${y + 10} L${x + 8} ${y} H${x + 14}`} />,
    calendar: (
      <>
        <rect x={x - 11} y={y - 10} width="22" height="20" rx="1.5" />
        <path d={`M${x - 11} ${y - 3} H${x + 11} M${x - 5} ${y - 14} V${y - 7} M${x + 5} ${y - 14} V${y - 7}`} />
        <path d={`M${x - 5} ${y + 2} H${x - 2} M${x + 3} ${y + 2} H${x + 6}`} />
      </>
    ),
    chart: (
      <>
        <path d={`M${x - 10} ${y + 10} H${x + 12}`} />
        <path d={`M${x - 6} ${y + 8} V${y + 1} M${x} ${y + 8} V${y - 7} M${x + 6} ${y + 8} V${y - 2}`} />
      </>
    ),
    search: (
      <>
        <circle cx={x - 2} cy={y - 2} r="8" />
        <path d={`M${x + 4} ${y + 4} L${x + 12} ${y + 12}`} />
      </>
    ),
    wrench: (
      <>
        <path d={`M${x + 8} ${y - 10} C${x + 2} ${y - 11} ${x - 2} ${y - 7} ${x - 1} ${y - 1} L${x - 11} ${y + 9} L${x - 7} ${y + 13} L${x + 3} ${y + 3} C${x + 9} ${y + 4} ${x + 13} ${y} ${x + 12} ${y - 6}`} />
      </>
    ),
    check: <path d={`M${x - 10} ${y} L${x - 2} ${y + 8} L${x + 12} ${y - 10}`} />,
    minus: <path d={`M${x - 12} ${y} H${x + 12}`} />,
    x: (
      <>
        <path d={`M${x - 10} ${y - 10} L${x + 10} ${y + 10}`} />
        <path d={`M${x + 10} ${y - 10} L${x - 10} ${y + 10}`} />
      </>
    )
  }[type];

  return <g className="diagram-icon">{content}</g>;
}
