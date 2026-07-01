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
      <figcaption className="home-hero-world-caption">
        <span>Release rehearsal world</span>
        <p>Production-like conditions before production users.</p>
      </figcaption>
      <div
        className="home-world-callout home-world-callout-engine"
        data-active={isActive("world", activeSignal) ? "true" : "false"}
      >
        <span>world</span>
        <strong>Conditions modeled</strong>
        <p>Population, tools, policies, source state, events.</p>
      </div>
      <div
        className="home-world-callout home-world-callout-evidence"
        data-active={isActive("evidence", activeSignal) ? "true" : "false"}
      >
        <span>evidence packet</span>
        <strong>Traceable proof</strong>
        <p>Diffs, verifier results, and run memory.</p>
      </div>
      <div
        className="home-world-callout home-world-callout-decision"
        data-active={isActive("decide", activeSignal) ? "true" : "false"}
      >
        <span>decision gate</span>
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
        data-active={isActive("memory", activeSignal) ? "true" : "false"}
      >
        Reusable memory saved
      </div>
    </figure>
  );
}
