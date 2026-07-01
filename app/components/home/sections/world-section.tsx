import { ArrowMark } from "@/app/components/system/system-page";
import { WorldInputsVisual } from "../visuals/world-inputs-visual";

export function WorldSection() {
  return (
    <section className="home-section world-section" id="how-it-works" aria-labelledby="world-title">
      <div className="home-section-copy">
        <p className="home-label section-eyebrow">02 / World Inputs</p>
        <h2 id="world-title" className="section-title-serif">
          Model the world your release will face.
        </h2>
        <p className="section-copy">
          Bring cohorts, source state, policies, tools, and events into one
          rehearsal world before the change touches users.
        </p>
        <a className="home-section-link" href="#observe">
          See world inputs in action
          <ArrowMark />
        </a>
      </div>
      <div className="world-stage">
        <WorldInputsVisual />
      </div>
    </section>
  );
}
