"use client";

import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";

type Point = { u: number; branch: number; spread: number; drift: number; size: number };

function makePoints(count: number): Point[] {
  let seed = 9183;
  const random = () => {
    seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
    return seed / 4294967296;
  };
  return Array.from({ length: count }, () => ({
    u: random(), branch: Math.floor(random() * 3) - 1,
    spread: Math.sqrt(-2 * Math.log(Math.max(random(), 0.0001))) * Math.cos(random() * Math.PI * 2),
    drift: random() * Math.PI * 2, size: 0.65 + random() * 0.8
  }));
}

export function SignalField({ compact = false }: { compact?: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [available, setAvailable] = useState(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) { setAvailable(false); return; }
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const pointer = { x: -1, y: -1 };
    let points: Point[] = [];
    let width = 0, height = 0, frame = 0, time = 0, lastFrame = 0;
    let visible = true, reduced = preference.matches, stopped = false;
    setReducedMotion(reduced);

    const draw = () => {
      context.clearRect(0, 0, width, height);
      context.fillStyle = "#2143ff";
      const small = width < 650;
      for (const point of points) {
        const u = point.u;
        const path = Math.max(0, Math.min(1, (u - 0.11) / 0.74));
        const envelope = Math.pow(Math.sin(Math.pow(path, 0.82) * Math.PI), 1.7);
        const wave = Math.sin(path * Math.PI * 2 + time * 0.17) * envelope;
        const separation = point.branch * envelope * height * 0.385;
        const middle = point.branch === 0 ? -Math.sin(path * Math.PI * 2) * height * 0.09 : 0;
        let x = u * width;
        let y = height * 0.49 + separation + middle;
        const spread = 5 + envelope * (small ? 10 : 19) + Math.max(0, 0.11 - u, u - 0.85) * 250;
        y += point.spread * spread + wave * height * 0.012;
        y += Math.sin(point.drift + time * 0.3) * envelope * 2;
        if (pointer.x >= 0 && !reduced && !paused) {
          const dx = x - pointer.x, dy = y - pointer.y;
          const distance = Math.hypot(dx, dy);
          if (distance < 120 && distance > 0) {
            const force = Math.pow(1 - distance / 120, 2) * 13;
            x += dx / distance * force; y += dy / distance * force;
          }
        }
        context.beginPath();
        context.arc(x, y, point.size * (small ? 0.82 : 1), 0, Math.PI * 2);
        context.fill();
      }
    };
    const animate = (now: number) => {
      frame = 0;
      if (stopped || !visible || document.hidden || reduced || paused) return;
      if (now - lastFrame >= 32) {
        time += Math.min((now - lastFrame) / 1000, 0.05); lastFrame = now; draw();
      }
      frame = requestAnimationFrame(animate);
    };
    const start = () => {
      if (!frame && !stopped && visible && !document.hidden && !reduced && !paused) {
        lastFrame = performance.now(); frame = requestAnimationFrame(animate);
      }
    };
    const resize = () => {
      const box = canvas.getBoundingClientRect(); width = box.width; height = box.height;
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * ratio); canvas.height = Math.round(height * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      points = makePoints(width < 650 ? 9000 : 28000); draw();
    };
    const move = (event: PointerEvent) => {
      if (event.pointerType === "touch") return;
      const bounds = canvas.getBoundingClientRect();
      pointer.x = event.clientX - bounds.left; pointer.y = event.clientY - bounds.top;
    };
    const leave = () => { pointer.x = -1; pointer.y = -1; };
    const changePreference = () => {
      reduced = preference.matches; setReducedMotion(reduced);
      if (reduced) { cancelAnimationFrame(frame); frame = 0; draw(); } else start();
    };
    const changeVisibility = () => {
      if (document.hidden) { cancelAnimationFrame(frame); frame = 0; } else start();
    };
    const resizeObserver = new ResizeObserver(resize);
    const intersection = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) start(); else { cancelAnimationFrame(frame); frame = 0; }
    });
    resize(); resizeObserver.observe(canvas); intersection.observe(canvas);
    canvas.addEventListener("pointermove", move); canvas.addEventListener("pointerleave", leave);
    preference.addEventListener("change", changePreference);
    document.addEventListener("visibilitychange", changeVisibility); start();
    return () => {
      stopped = true; cancelAnimationFrame(frame); resizeObserver.disconnect(); intersection.disconnect();
      canvas.removeEventListener("pointermove", move); canvas.removeEventListener("pointerleave", leave);
      preference.removeEventListener("change", changePreference);
      document.removeEventListener("visibilitychange", changeVisibility);
    };
  }, [paused]);

  return <figure className={`lab-field${compact ? " lab-field-compact" : ""}`}>
    <div className="lab-field-surface" role="img" aria-label="Illustrative blue points branch into different paths and converge again, suggesting possible AI behavior.">
      <canvas ref={canvasRef} aria-hidden="true" />
      {!available && <div className="lab-field-fallback" aria-hidden="true"><span /><span /><span /></div>}
    </div>
    <figcaption>
      <span>An exploration of possible behavior.</span>
      {available && !reducedMotion && <button type="button" onClick={() => setPaused(!paused)} aria-label={paused ? "Play graphic motion" : "Pause graphic motion"}>
        {paused ? <Play size={12} aria-hidden="true" /> : <Pause size={12} aria-hidden="true" />}<span>{paused ? "Play" : "Pause"}</span>
      </button>}
    </figcaption>
  </figure>;
}
