import type { Metadata } from "next";
import { PublicFooter, PublicHeader } from "@/app/components/system/system-page";
import { RehearsalEngineCore } from "@/app/components/home/visuals/rehearsal-engine/rehearsal-engine-core";

export const metadata: Metadata = {
  title: "The Rehearsal Engine",
  description:
    "The instrument at the center of every Determina rehearsal: conditions in, behavior observed, evidence out."
};

export default function EngineStandardPage() {
  return (
    <main className="home-shell engine-standard-shell">
      <PublicHeader />
      <section className="engine-standard-page" aria-labelledby="engine-standard-title">
        <div className="engine-standard-copy">
          <p className="home-label">the rehearsal engine</p>
          <h1 id="engine-standard-title">The instrument at the center of every rehearsal.</h1>
          <p>
            Every Determina run passes through the same engine. World conditions go in,
            behavior is recorded while the release runs, and evidence comes out attached
            to a decision. The dial you see across this site is that machine: run, watch,
            decide.
          </p>
        </div>
        <div className="engine-standard-board" aria-label="The rehearsal engine">
          <svg className="engine-standard-svg" viewBox="0 0 900 620" role="img" aria-label="The Determina rehearsal engine dial">
            <RehearsalEngineCore cx={450} cy={310} scale={1.42} idPrefix="engine-standard-preview" />
          </svg>
        </div>
      </section>
      <PublicFooter />
    </main>
  );
}
