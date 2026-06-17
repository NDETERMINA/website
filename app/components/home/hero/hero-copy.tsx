import { ArrowMark } from "@/app/components/system/system-page";
import { siteLinks } from "@/app/lib/site";

export function HeroCopy() {
  return (
    <div className="home-hero-copy">
      <p className="home-label">AI release rehearsal</p>
      <h1 id="home-hero-title">
        <span className="home-title-line">Rehearse AI</span>{" "}
        <span className="home-title-line">behavior</span>{" "}
        <span className="home-title-line">before release.</span>
      </h1>
      <p className="home-hero-lede">
        Run production-like simulations of your AI system. See what changes.
        Get evidence. Decide with confidence.
      </p>
      <div className="home-actions" aria-label="Primary actions">
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
  );
}
