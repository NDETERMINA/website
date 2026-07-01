import { ArrowMark } from "@/app/components/system/system-page";
import { siteLinks } from "@/app/lib/site";
import { DecisionMemoryVisual } from "../visuals/decision-memory-visual";

export function DecisionSection() {
  return (
    <section className="home-section decision-section" id="decision" aria-labelledby="decision-title">
      <div className="decision-layout">
        <div className="home-section-copy decision-copy">
          <p className="home-label section-eyebrow">05 / Decide &amp; Remember</p>
          <h2 id="decision-title" className="section-title-serif">
            Decide what ships, and remember why.
          </h2>
          <p className="section-copy">
            Ship, review, or block with bounded evidence. The decision stays
            human-owned, and the lesson becomes reusable coverage.
          </p>
          <div className="home-actions decision-actions" aria-label="Decision actions">
            <a className="home-button home-button-primary" href={siteLinks.pilot}>
              Request pilot
              <ArrowMark />
            </a>
            <a className="home-inline-link" href="#how-it-works">
              See how it works
              <ArrowMark />
            </a>
          </div>
        </div>
        <DecisionMemoryVisual />
      </div>
    </section>
  );
}
