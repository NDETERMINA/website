"use client";

import { useEffect } from "react";

const SCROLLED_ENTER_THRESHOLD = 72;
const SCROLLED_EXIT_THRESHOLD = 24;

export function HeaderScrollState() {
  useEffect(() => {
    let frame = 0;
    let isScrolled = window.scrollY > SCROLLED_ENTER_THRESHOLD;

    const updateScrolledState = () => {
      frame = 0;
      const shouldScroll =
        window.scrollY > SCROLLED_ENTER_THRESHOLD ||
        (isScrolled && window.scrollY > SCROLLED_EXIT_THRESHOLD);

      if (shouldScroll === isScrolled) {
        return;
      }

      isScrolled = shouldScroll;
      document.documentElement.toggleAttribute("data-home-scrolled", isScrolled);
    };

    const queueUpdate = () => {
      if (frame) {
        return;
      }

      frame = window.requestAnimationFrame(updateScrolledState);
    };

    document.documentElement.toggleAttribute("data-home-scrolled", isScrolled);
    window.addEventListener("scroll", queueUpdate, { passive: true });
    window.addEventListener("resize", queueUpdate);

    return () => {
      if (frame) {
        window.cancelAnimationFrame(frame);
      }

      window.removeEventListener("scroll", queueUpdate);
      window.removeEventListener("resize", queueUpdate);
      document.documentElement.removeAttribute("data-home-scrolled");
    };
  }, []);

  return null;
}
