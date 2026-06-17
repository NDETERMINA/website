import { ArrowMark } from "@/app/components/system/system-page";
import { siteLinks } from "@/app/lib/site";
import { EvidencePacketVisual } from "../visuals/evidence-packet-visual";

export function EvidenceSection() {
  return (
    <section className="home-section evidence-section" id="evidence" aria-labelledby="evidence-title">
      <div className="home-section-copy evidence-copy">
        <p className="home-label">04 / Evidence Assembly</p>
        <h2 id="evidence-title">
          Evidence,{" "}
          <br />
          not vibes.
        </h2>
        <p>
          Every finding links to artifacts&mdash;traces, lenses, diffs, and verifier
          results&mdash;so your team can inspect, explain, and rerun with confidence.
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
