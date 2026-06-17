import { CohortArtifact } from "./artifacts/cohort-artifact";
import { DecisionArtifact } from "./artifacts/decision-artifact";
import { MemoryArtifact } from "./artifacts/memory-artifact";
import { StateDiffArtifact } from "./artifacts/state-diff-artifact";
import { TraceArtifact } from "./artifacts/trace-artifact";
import { VerifierArtifact } from "./artifacts/verifier-artifact";

export function ArtifactNotes() {
  return (
    <>
      <TraceArtifact />
      <CohortArtifact />
      <StateDiffArtifact />
      <VerifierArtifact />
      <DecisionArtifact />
      <MemoryArtifact />
    </>
  );
}
