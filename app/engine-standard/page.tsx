import type { Metadata } from "next";
import { PublicHeader } from "@/app/components/system/system-page";
import { RehearsalEngineCore } from "@/app/components/home/visuals/rehearsal-engine/rehearsal-engine-core";

export const metadata: Metadata = {
  title: "Shared Engine Preview",
  robots: {
    index: false,
    follow: false
  }
};

export default function EngineStandardPage() {
  return (
    <main className="home-shell engine-standard-shell">
      <PublicHeader />
      <section className="engine-standard-page" aria-labelledby="engine-standard-title">
        <div className="engine-standard-copy">
          <p className="home-label">Shared Engine</p>
          <h1 id="engine-standard-title">One engine for the site.</h1>
          <p>
            This is the machine visual we can reuse across the site. Conditions go in.
            Determina watches what changes. Evidence comes out for the release decision.
          </p>
        </div>
        <div className="engine-standard-board" aria-label="Shared rehearsal engine preview">
          <svg className="engine-standard-svg" viewBox="0 0 900 620" role="img" aria-label="Shared rehearsal engine component">
            <RehearsalEngineCore cx={450} cy={310} scale={1.42} idPrefix="engine-standard-preview" />
          </svg>
        </div>
      </section>
    </main>
  );
}
