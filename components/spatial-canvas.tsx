"use client";

import { useEffect, useRef } from "react";

type Point = {
  x: number;
  y: number;
  z: number;
  radius: number;
  phase: number;
};

type Edge = [number, number];

const colors = ["99, 102, 241", "139, 92, 246", "6, 182, 212"];

function random(seed: number) {
  const value = Math.sin(seed * 127.1 + 311.7) * 43758.5453;
  return value - Math.floor(value);
}

function createField(count: number) {
  const points: Point[] = Array.from({ length: count }, (_, index) => ({
    x: random(index + 1),
    y: random(index + 101),
    z: random(index + 201),
    radius: 0.7 + random(index + 301) * 1.25,
    phase: random(index + 401) * Math.PI * 2,
  }));
  const edges: Edge[] = [];

  points.forEach((point, index) => {
    const nearest = points
      .map((candidate, candidateIndex) => ({
        candidateIndex,
        distance:
          (point.x - candidate.x) ** 2 + (point.y - candidate.y) ** 2,
      }))
      .filter(({ candidateIndex, distance }) => candidateIndex !== index && distance < 0.035)
      .sort((first, second) => first.distance - second.distance)
      .slice(0, 3);

    nearest.forEach(({ candidateIndex }) => {
      if (candidateIndex > index) edges.push([index, candidateIndex]);
    });
  });

  return { points, edges };
}

export function SpatialCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d", { alpha: true });
    if (!canvas || !context) return;

    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointerQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    let width = 0;
    let height = 0;
    let pixelRatio = 1;
    let animationFrame = 0;
    let scrollProgress = 0;
    let targetScroll = 0;
    let pointerX = 0;
    let pointerY = 0;
    let targetPointerX = 0;
    let targetPointerY = 0;
    let points: Point[] = [];
    let edges: Edge[] = [];

    const animate = () =>
      !reducedMotionQuery.matches &&
      finePointerQuery.matches &&
      !document.hidden;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      pixelRatio = Math.min(window.devicePixelRatio || 1, 1.35);
      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      const field = createField(width < 700 ? 72 : 148);
      points = field.points;
      edges = field.edges;
      render(0);
    };

    const updateScroll = () => {
      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      targetScroll = scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0;
    };

    const handlePointerMove = (event: PointerEvent) => {
      targetPointerX = (event.clientX / window.innerWidth - 0.5) * 2;
      targetPointerY = (event.clientY / window.innerHeight - 0.5) * 2;
    };

    const render = (time: number) => {
      if (!context || !width || !height) return;

      const moving = animate();
      const seconds = moving ? time * 0.00012 : 0;
      pointerX += (targetPointerX - pointerX) * 0.045;
      pointerY += (targetPointerY - pointerY) * 0.045;
      scrollProgress += (targetScroll - scrollProgress) * 0.035;

      context.clearRect(0, 0, width, height);
      const projected = points.map((point) => {
        const depth = 0.78 + point.z * 0.48;
        const driftX = moving ? Math.sin(seconds + point.phase) * 7 : 0;
        const driftY = moving ? Math.cos(seconds * 0.8 + point.phase) * 6 : 0;
        return {
          x:
            width / 2 +
            (point.x - 0.5) * width * depth +
            pointerX * 18 * depth +
            driftX,
          y:
            height / 2 +
            (point.y - 0.5) * height * depth +
            pointerY * 14 * depth -
            scrollProgress * height * 0.12 +
            driftY,
          radius: point.radius * depth,
          alpha: 0.18 + point.z * 0.32,
          z: point.z,
          phase: point.phase,
        };
      });

      edges.forEach(([firstIndex, secondIndex], edgeIndex) => {
        const first = projected[firstIndex];
        const second = projected[secondIndex];
        const dx = first.x - second.x;
        const dy = first.y - second.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance > 190) return;

        const color = colors[edgeIndex % colors.length];
        context.beginPath();
        context.moveTo(first.x, first.y);
        context.lineTo(second.x, second.y);
        context.strokeStyle = `rgba(${color}, ${(1 - distance / 190) * 0.16})`;
        context.lineWidth = 0.7;
        context.stroke();
      });

      projected.forEach((point, index) => {
        const color = colors[index % colors.length];
        const pulse = moving
          ? 0.65 + Math.sin(seconds * 3 + point.phase) * 0.2
          : 0.75;
        context.beginPath();
        context.arc(point.x, point.y, point.radius, 0, Math.PI * 2);
        context.fillStyle = `rgba(${color}, ${point.alpha * pulse})`;
        context.fill();
      });

      if (moving) animationFrame = window.requestAnimationFrame(render);
    };

    const refreshAnimation = () => {
      window.cancelAnimationFrame(animationFrame);
      animationFrame = 0;
      if (animate()) animationFrame = window.requestAnimationFrame(render);
      else render(0);
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(document.documentElement);
    window.addEventListener("resize", resize, { passive: true });
    window.addEventListener("scroll", updateScroll, { passive: true });
    finePointerQuery.addEventListener("change", refreshAnimation);
    reducedMotionQuery.addEventListener("change", refreshAnimation);
    document.addEventListener("visibilitychange", refreshAnimation);
    if (finePointerQuery.matches) {
      window.addEventListener("pointermove", handlePointerMove, { passive: true });
    }

    updateScroll();
    resize();
    refreshAnimation();

    return () => {
      window.cancelAnimationFrame(animationFrame);
      resizeObserver.disconnect();
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", updateScroll);
      window.removeEventListener("pointermove", handlePointerMove);
      finePointerQuery.removeEventListener("change", refreshAnimation);
      reducedMotionQuery.removeEventListener("change", refreshAnimation);
      document.removeEventListener("visibilitychange", refreshAnimation);
    };
  }, []);

  return <canvas ref={canvasRef} className="spatial-canvas" aria-hidden="true" />;
}
