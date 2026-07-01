import { ArrowMark } from "@/app/components/system/system-page";
import { siteLinks } from "@/app/lib/site";

export function PilotCopy() {
  return (
    <div className="pilot-copy">
      <p className="home-label section-eyebrow">pilot intake</p>
      <h2 id="pilot-title" className="section-title-serif">Bring one AI release that needs proof.</h2>
      <p className="section-copy">
        This is the pilot intake checklist: send one system, one planned
        change, and one rollout concern. Determina returns the rehearsal world,
        evidence packet, and decision trail.
      </p>
      <div className="pilot-actions" aria-label="Pilot actions">
        <a className="home-button home-button-primary" href={siteLinks.waitlist}>
          Request pilot
          <ArrowMark />
        </a>
        <a className="home-inline-link" href="#how-it-works">
          See how it works
          <ArrowMark />
        </a>
      </div>
    </div>
  );
}
