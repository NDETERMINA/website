"use client";

import type { CSSProperties } from "react";
import { useEffect, useState } from "react";
import { ArrowMark } from "@/app/components/system/system-page";
import { routeStages } from "./content";

const ACTIVE_MARKER_RATIO = 0.38;
type RouteStageNumber = (typeof routeStages)[number]["number"];

function getCurrentStage(): RouteStageNumber {
  const marker = window.scrollY + window.innerHeight * ACTIVE_MARKER_RATIO;
  let current: RouteStageNumber = routeStages[0].number;

  for (const stage of routeStages) {
    const section = document.getElementById(stage.targetId);

    if (section && section.offsetTop <= marker) {
      current = stage.number;
    }
  }

  return current;
}

export function HomeProgressRail() {
  const [activeStage, setActiveStage] = useState<RouteStageNumber>(routeStages[0].number);
  const activeIndex = Math.max(
    0,
    routeStages.findIndex((stage) => stage.number === activeStage)
  );
  const nextStage = routeStages[Math.min(activeIndex + 1, routeStages.length - 1)];
  const progress = routeStages.length > 1 ? (activeIndex / (routeStages.length - 1)) * 100 : 0;
  const railStyle = { "--home-progress": `${progress}%` } as CSSProperties;

  useEffect(() => {
    const updateActiveStage = () => {
      setActiveStage(getCurrentStage());
    };

    updateActiveStage();

    window.addEventListener("scroll", updateActiveStage, { passive: true });
    window.addEventListener("resize", updateActiveStage);

    return () => {
      window.removeEventListener("scroll", updateActiveStage);
      window.removeEventListener("resize", updateActiveStage);
    };
  }, []);

  return (
    <nav className="home-progress-shell" aria-label="Homepage release route" style={railStyle}>
      <ol className="home-section-route home-progress-rail">
        {routeStages.map((stage, index) => {
          const isActive = stage.number === activeStage;
          const isComplete = index < activeIndex;

          return (
            <li
              key={stage.number}
              className={[
                isActive ? "is-active" : "",
                isComplete ? "is-complete" : ""
              ]
                .filter(Boolean)
                .join(" ")}
            >
              <a href={`#${stage.targetId}`} aria-current={isActive ? "step" : undefined}>
                <span>{stage.number}</span>
                <b>{stage.label}</b>
              </a>
            </li>
          );
        })}
        <li className="is-scroll">
          <a className="home-progress-scroll-cue" href={`#${nextStage.targetId}`}>
            Scroll
            <ArrowMark />
          </a>
        </li>
      </ol>
    </nav>
  );
}
