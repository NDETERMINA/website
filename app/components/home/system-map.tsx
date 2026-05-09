"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const nodePositions = [
  [-2.4, 0.7, 0],
  [-1.25, -0.35, 0.25],
  [-0.15, 0.48, -0.15],
  [1.05, -0.22, 0.2],
  [2.25, 0.64, 0]
] as const;

function cssColor(name: string, fallback: string) {
  const value = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  return value || fallback;
}

export function SystemMap() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      preserveDrawingBuffer: true
    });
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
    const group = new THREE.Group();
    const particles = new THREE.Group();
    let frame = 0;
    let animationFrame = 0;
    let width = 1;
    let height = 1;

    const applySize = () => {
      const rect = canvas.getBoundingClientRect();
      width = Math.max(1, rect.width);
      height = Math.max(1, rect.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    const buildScene = () => {
      group.clear();
      particles.clear();

      const accent = cssColor("--accent", "#83d7a4");
      const accentStrong = cssColor("--accent-strong", "#bfe9c5");
      const link = cssColor("--link", "#9fbfff");
      const line = cssColor("--line", "#34453b");

      const nodeMaterial = new THREE.MeshBasicMaterial({
        color: accent,
        transparent: true,
        opacity: 0.48
      });
      const coreMaterial = new THREE.MeshBasicMaterial({
        color: accentStrong,
        transparent: true,
        opacity: 0.54
      });
      const lineMaterial = new THREE.LineBasicMaterial({
        color: line,
        transparent: true,
        opacity: 0.48
      });

      nodePositions.forEach((position, index) => {
        const geometry = new THREE.SphereGeometry(index === 2 ? 0.072 : 0.054, 24, 24);
        const node = new THREE.Mesh(geometry, index === 2 ? coreMaterial : nodeMaterial);
        node.position.set(position[0], position[1], position[2]);
        node.userData.baseY = position[1];
        group.add(node);
      });

      for (let index = 0; index < nodePositions.length - 1; index += 1) {
        const curve = new THREE.CatmullRomCurve3([
          new THREE.Vector3(...nodePositions[index]),
          new THREE.Vector3(
            (nodePositions[index][0] + nodePositions[index + 1][0]) / 2,
            index % 2 === 0 ? 0.95 : -0.7,
            0.12
          ),
          new THREE.Vector3(...nodePositions[index + 1])
        ]);
        const lineGeometry = new THREE.BufferGeometry().setFromPoints(curve.getPoints(40));
        group.add(new THREE.Line(lineGeometry, lineMaterial));
      }

      const particleMaterial = new THREE.PointsMaterial({
        color: link,
        size: 0.018,
        transparent: true,
        opacity: 0.5
      });
      const positions = new Float32Array(80 * 3);
      for (let index = 0; index < 80; index += 1) {
        positions[index * 3] = (Math.random() - 0.5) * 6;
        positions[index * 3 + 1] = (Math.random() - 0.5) * 2.8;
        positions[index * 3 + 2] = (Math.random() - 0.5) * 1.6;
      }
      const particleGeometry = new THREE.BufferGeometry();
      particleGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
      particles.add(new THREE.Points(particleGeometry, particleMaterial));

      scene.add(group);
      scene.add(particles);
    };

    camera.position.set(0, 0, 5.6);
    group.position.x = 0.78;
    particles.position.x = 0.78;
    buildScene();
    applySize();

    const render = () => {
      frame += 1;
      if (!reduceMotion) {
        group.rotation.y = Math.sin(frame / 170) * 0.13;
        group.rotation.x = Math.cos(frame / 220) * 0.05;
        particles.rotation.z += 0.0009;
        group.children.forEach((child, index) => {
          if (child instanceof THREE.Mesh) {
            child.position.y = child.userData.baseY + Math.sin(frame / 38 + index) * 0.035;
          }
        });
      }
      renderer.render(scene, camera);
      if (!reduceMotion) {
        animationFrame = requestAnimationFrame(render);
      }
    };

    render();

    const observer = new ResizeObserver(applySize);
    observer.observe(canvas);
    const mutationObserver = new MutationObserver(() => {
      buildScene();
      renderer.render(scene, camera);
    });
    mutationObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"]
    });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
      cancelAnimationFrame(animationFrame);
      renderer.dispose();
      scene.clear();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="system-map-canvas pointer-events-none absolute inset-0 h-full w-full"
    />
  );
}
