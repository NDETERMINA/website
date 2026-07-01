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

function isFooterRouteVisible(): boolean {
  const footer = document.getElementById("site-footer");

  if (!footer) {
    return false;
  }

  const rect = footer.getBoundingClientRect();

  return rect.top < window.innerHeight * 0.68 && rect.bottom > window.innerHeight * 0.18;
}

function getSectionExitProgress(targetId: string, exitStart: number, exitDistance: number): number {
  const section = document.getElementById(targetId);

  if (!section) {
    return 0;
  }

  const rect = section.getBoundingClientRect();

  return Math.min(1, Math.max(0, (-rect.top + exitStart) / exitDistance));
}

export function HomeProgressRail() {
  const [activeStage, setActiveStage] = useState<RouteStageNumber>(routeStages[0].number);
  const [footerVisible, setFooterVisible] = useState(false);
  const activeIndex = Math.max(
    0,
    routeStages.findIndex((stage) => stage.number === activeStage)
  );
  const nextStage = routeStages[Math.min(activeIndex + 1, routeStages.length - 1)];
  const progress = routeStages.length > 1 ? (activeIndex / (routeStages.length - 1)) * 100 : 0;
  const railStyle = { "--home-progress": `${progress}%` } as CSSProperties;

  useEffect(() => {
    const updateActiveStage = () => {
      const footerIsVisible = isFooterRouteVisible();
      const currentStage = getCurrentStage();
      const worldExitProgress = getSectionExitProgress("how-it-works", -240, 300);
      const decisionExitProgress = getSectionExitProgress("decision", -20, 150);

      setActiveStage(currentStage);
      setFooterVisible(footerIsVisible);
      document.documentElement.dataset.homeActiveStage = currentStage;
      document.documentElement.toggleAttribute("data-home-footer-visible", footerIsVisible);
      document.documentElement.style.setProperty(
        "--home-decision-exit",
        decisionExitProgress.toFixed(3)
      );
      document.documentElement.style.setProperty("--home-world-exit", worldExitProgress.toFixed(3));
      document.documentElement.toggleAttribute(
        "data-home-decision-exiting",
        decisionExitProgress > 0.02
      );
    };

    updateActiveStage();

    window.addEventListener("scroll", updateActiveStage, { passive: true });
    window.addEventListener("resize", updateActiveStage);

    return () => {
      window.removeEventListener("scroll", updateActiveStage);
      window.removeEventListener("resize", updateActiveStage);
      delete document.documentElement.dataset.homeActiveStage;
      document.documentElement.removeAttribute("data-home-footer-visible");
      document.documentElement.removeAttribute("data-home-decision-exiting");
      document.documentElement.style.removeProperty("--home-decision-exit");
      document.documentElement.style.removeProperty("--home-world-exit");
    };
  }, []);

  return (
    <nav
      className="home-progress-shell"
      aria-label="Homepage release route"
      data-active-stage={activeStage}
      data-footer-visible={footerVisible ? "true" : undefined}
      style={railStyle}
    >
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
