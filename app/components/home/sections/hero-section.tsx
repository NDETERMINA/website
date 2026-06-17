"use client";

import { useState } from "react";
import { HeroCopy } from "../hero/hero-copy";
import { HeroInstrument } from "../hero/hero-instrument";
import { ProofStrip } from "../hero/proof-strip";
import { HeroSignal } from "../hero/hero-diagram/types";

export function HeroSection() {
  const [activeSignal, setActiveSignal] = useState<HeroSignal | null>(null);

  return (
    <section className="home-hero" id="system" aria-labelledby="home-hero-title">
      <HeroCopy />
      <HeroInstrument activeSignal={activeSignal} onSignal={setActiveSignal} />
      <ProofStrip activeSignal={activeSignal} onSignal={setActiveSignal} />
    </section>
  );
}
