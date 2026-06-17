import { DecisionRail } from "./decision-rail";
import { EvidenceStreams } from "./evidence-streams";
import { HeroFlowField } from "./hero-flow-field";
import { RehearsalCore } from "./rehearsal-core";
import { ReviewMark } from "./review-mark";
import { HeroSignal, HeroSignalHandler } from "./types";
import { WorldInputs } from "./world-inputs";

type HeroDiagramProps = {
  activeSignal: HeroSignal | null;
  onSignal: HeroSignalHandler;
};

export function HeroDiagram({ activeSignal, onSignal }: HeroDiagramProps) {
  return (
    <div className="home-hero-visual">
      <svg className="hero-diagram" data-active={activeSignal ?? "none"} viewBox="0 0 980 520" role="group" aria-label="AI release rehearsal diagram">
        <HeroFlowField />
        <WorldInputs onSignal={onSignal} />
        <RehearsalCore onSignal={onSignal} />
        <EvidenceStreams onSignal={onSignal} />
        <DecisionRail onSignal={onSignal} />
        <ReviewMark onSignal={onSignal} />
      </svg>
    </div>
  );
}
