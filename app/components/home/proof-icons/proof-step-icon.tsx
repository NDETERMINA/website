import { ReactElement } from "react";
import { DecideIcon } from "./decide-icon";
import { EvidenceIcon } from "./evidence-icon";
import { MemoryIcon } from "./memory-icon";
import { ObserveIcon } from "./observe-icon";
import { SimulateIcon } from "./simulate-icon";
import { ProofIconType } from "./proof-icon-types";

export function ProofStepIcon({ type }: { type: ProofIconType }) {
  const icons = {
    simulate: <SimulateIcon />,
    observe: <ObserveIcon />,
    evidence: <EvidenceIcon />,
    decide: <DecideIcon />,
    memory: <MemoryIcon />
  } satisfies Record<ProofIconType, ReactElement>;

  return icons[type];
}
