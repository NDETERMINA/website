import { ArrowMark } from "@/app/components/system/system-page";
import { siteLinks } from "@/app/lib/site";

export function HeroCopy() {
  return (
    <div className="home-hero-copy">
      <p className="home-label section-eyebrow">AI release rehearsal</p>
      <h1 id="home-hero-title" className="hero-title">
        <span className="home-title-line">Rehearse AI</span>{" "}
        <span className="home-title-line">changes</span>{" "}
        <span className="home-title-line">before</span>{" "}
        <span className="home-title-line">release.</span>
      </h1>
      <p className="home-hero-lede section-copy">
        Run production-like worlds around recommender, search, and agent
        changes. Catch behavior regressions before users do, return evidence,
        and decide what ships.
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
