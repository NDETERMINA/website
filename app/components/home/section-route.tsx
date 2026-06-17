import { ArrowMark } from "@/app/components/system/system-page";

import { routeStages } from "./content";

export function SectionRoute({ active, showScroll = false }: { active: string; showScroll?: boolean }) {
  const stages = routeStages;

  return (
    <ol className={showScroll ? "home-section-route is-scroll-route" : "home-section-route"} aria-label="Homepage product flow">
      {stages.map((stage) => (
        <li key={stage.number} className={stage.number === active ? "is-active" : undefined}>
          <span>{stage.number}</span>
          {stage.label}
        </li>
      ))}
      {showScroll ? (
        <li className="is-scroll">
          Scroll
          <ArrowMark />
        </li>
      ) : null}
    </ol>
  );
}
