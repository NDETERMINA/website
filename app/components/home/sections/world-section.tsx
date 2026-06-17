import { ArrowMark } from "@/app/components/system/system-page";
import { WorldInputsVisual } from "../visuals/world-inputs-visual";

export function WorldSection() {
  return (
    <section className="home-section world-section" id="how-it-works" aria-labelledby="world-title">
      <div className="home-section-copy">
        <p className="home-label">02 / World Inputs</p>
        <h2 id="world-title">
          Build a production-
          <br />
          like world around
          <br />
          your system.
        </h2>
        <p>
          Determina recreates the conditions
          <br />
          that make behavior change in production.
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
