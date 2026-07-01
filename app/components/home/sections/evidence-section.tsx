import { ArrowMark } from "@/app/components/system/system-page";
import { siteLinks } from "@/app/lib/site";
import { EvidencePacketVisual } from "../visuals/evidence-packet-visual";

export function EvidenceSection() {
  return (
    <section className="home-section evidence-section" id="evidence" aria-labelledby="evidence-title">
      <div className="home-section-copy evidence-copy">
        <p className="home-label section-eyebrow">04 / Evidence Assembly</p>
        <h2 id="evidence-title" className="section-title-serif">
          Return proof your team can inspect.
        </h2>
        <p className="section-copy">
          Every finding links to artifacts: traces, lenses, diffs, verifier
          results, and the memory needed to rerun the case.
        </p>
        <div className="home-actions evidence-actions" aria-label="Evidence actions">
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
      <div className="evidence-layout">
        <EvidencePacketVisual />
      </div>
    </section>
  );
}
