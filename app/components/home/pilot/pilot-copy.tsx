import { ArrowMark } from "@/app/components/system/system-page";
import { siteLinks } from "@/app/lib/site";

export function PilotCopy() {
  return (
    <div className="pilot-copy">
      <p className="home-label">pilot intake</p>
      <h2 id="pilot-title">Bring the release your team is nervous to ship.</h2>
      <p>
        Send one system and one planned change. Determina rehearses the behavior,
        returns the evidence, and leaves your team with a reviewable decision.
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
