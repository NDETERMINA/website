import Image from "next/image";

import { HeroSignal } from "./hero-diagram/types";

const signalGroups = {
  world: ["simulate", "world"],
  observe: ["observe", "rank", "retrieve", "act"],
  evidence: ["evidence", "policy"],
  decide: ["decide", "ship", "review", "block"],
  memory: ["memory"]
} satisfies Record<string, readonly HeroSignal[]>;

function isActive(group: keyof typeof signalGroups, activeSignal?: HeroSignal | null) {
  return activeSignal ? (signalGroups[group] as readonly HeroSignal[]).includes(activeSignal) : false;
}

export function HeroWorld({ activeSignal }: { activeSignal?: HeroSignal | null }) {
  return (
    <figure className="home-hero-world" aria-label="Determina release rehearsal lab">
      <div className="home-hero-world-image">
        <Image
          src="/marketing/clay-inspired-release-lab.webp"
          alt="A miniature release rehearsal lab with a simulation engine, signal paths, evidence packets, and decision gates."
          width={1672}
          height={941}
          priority
          sizes="(max-width: 720px) 405px, (max-width: 1180px) 952px, 769px"
          unoptimized
        />
      </div>
      <figcaption className="home-hero-world-caption" aria-label="Release rehearsal world">
        <span>Release rehearsal world</span>
      </figcaption>
      <p className="home-hero-world-plate" aria-hidden="true">
        Plate 01 &mdash; release rehearsal world &middot; det-9183
      </p>
      <div
        className="home-world-callout home-world-callout-engine"
        aria-label="World: conditions modeled"
        data-active={isActive("world", activeSignal) ? "true" : "false"}
      >
        <span>world</span>
        <strong>Conditions</strong>
      </div>
      <div
        className="home-world-callout home-world-callout-evidence"
        aria-label="Evidence: trace packet"
        data-active={isActive("evidence", activeSignal) ? "true" : "false"}
      >
        <span>evidence</span>
        <strong>Trace packet</strong>
      </div>
      <div
        className="home-world-callout home-world-callout-decision"
        aria-label="Decision: ship, review, or block"
        data-active={isActive("decide", activeSignal) ? "true" : "false"}
      >
        <span>decision</span>
        <strong>Ship / review / block</strong>
      </div>
      <div
        className="home-world-status"
        data-active={isActive("observe", activeSignal) ? "true" : "false"}
      >
        <span>observing</span>
        <strong>rank</strong>
        <strong>retrieve</strong>
        <strong>act</strong>
      </div>
      <div
        className="home-world-memory"
        aria-label="Memory saved"
        data-active={isActive("memory", activeSignal) ? "true" : "false"}
      >
        Memory saved
      </div>
    </figure>
  );
}
