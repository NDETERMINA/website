import { HeroSignalHandler } from "./types";

export function ReviewMark({ onSignal }: { onSignal: HeroSignalHandler }) {
  return (
    <g
      className="diagram-stamp"
      role="group"
      aria-label="Decision before release: review"
      tabIndex={0}
      onBlur={() => onSignal(null)}
      onFocus={() => onSignal("decide")}
      onPointerEnter={() => onSignal("decide")}
      onPointerLeave={() => onSignal(null)}
      transform="rotate(-6 840 466)"
    >
      <rect className="diagram-hit-area" x="728" y="426" width="224" height="78" rx="10" />
      <path className="diagram-stamp-box" d="M742 438 C766 431 910 432 932 440 C944 448 942 486 928 494 C898 503 778 502 748 494 C734 486 731 449 742 438 Z" />
      <path className="diagram-stamp-box is-inner" d="M758 448 C786 444 892 444 918 450 C928 456 926 480 916 486 C884 493 792 493 762 486 C752 480 750 456 758 448 Z" />
      <path className="diagram-stamp-rule" d="M770 462 H910" />
      <text className="diagram-stamp-small" x="840" y="456" textAnchor="middle">Decision before release</text>
      <text className="diagram-stamp-main" x="840" y="486" textAnchor="middle">Review</text>
    </g>
  );
}
