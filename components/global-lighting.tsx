"use client";

import { useEffect } from "react";

const sectionLight: Record<string, [string, string]> = {
  top: ["rgba(64, 119, 224, .105)", "rgba(127, 103, 211, .055)"],
  about: ["rgba(94, 135, 190, .07)", "rgba(116, 131, 173, .035)"],
  projects: ["rgba(57, 111, 213, .085)", "rgba(135, 91, 201, .06)"],
  workflow: ["rgba(90, 135, 201, .07)", "rgba(107, 108, 188, .04)"],
  expertise: ["rgba(59, 116, 208, .075)", "rgba(122, 99, 197, .045)"],
  education: ["rgba(90, 135, 201, .07)", "rgba(107, 108, 188, .04)"],
  github: ["rgba(59, 116, 208, .075)", "rgba(122, 99, 197, .045)"],
  resume: ["rgba(59, 116, 208, .075)", "rgba(122, 99, 197, .045)"],
  dashboard: ["rgba(60, 128, 231, .095)", "rgba(88, 105, 199, .055)"],
  contact: ["rgba(190, 204, 231, .07)", "rgba(91, 129, 200, .045)"],
};

const lightTargets = ".project-card, .hero-link, .main-nav-link, .ai-assistant-button";

export function GlobalLighting() {
  useEffect(() => {
    const root = document.documentElement;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    let activeTarget: HTMLElement | null = null;

    function handlePointerMove(event: PointerEvent) {
      root.style.setProperty("--pointer-x", `${event.clientX}px`);
      root.style.setProperty("--pointer-y", `${event.clientY}px`);
      root.style.setProperty("--spotlight-opacity", "1");

      const target = event.target instanceof Element ? event.target.closest<HTMLElement>(lightTargets) : null;
      if (target !== activeTarget) {
        activeTarget?.classList.remove("has-pointer-light");
        activeTarget = target;
        activeTarget?.classList.add("has-pointer-light");
      }
      if (target) {
        const bounds = target.getBoundingClientRect();
        target.style.setProperty("--local-x", `${event.clientX - bounds.left}px`);
        target.style.setProperty("--local-y", `${event.clientY - bounds.top}px`);
      }
    }

    function handlePointerLeave() {
      root.style.setProperty("--spotlight-opacity", "0");
      activeTarget?.classList.remove("has-pointer-light");
      activeTarget = null;
    }

    if (finePointer && !reducedMotion) {
      window.addEventListener("pointermove", handlePointerMove, { passive: true });
      window.addEventListener("pointerleave", handlePointerLeave);
      window.addEventListener("blur", handlePointerLeave);
      root.style.setProperty("--spotlight-opacity", "0");
    }

    const observer = new IntersectionObserver(entries => {
      const visible = entries
        .filter(entry => entry.isIntersecting)
        .sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0];
      if (!visible) return;
      const sectionId = (visible.target as HTMLElement).id;
      const [primary, secondary] = sectionLight[sectionId] ?? sectionLight.about;
      root.style.setProperty("--ambient-primary", primary);
      root.style.setProperty("--ambient-secondary", secondary);
      visible.target.classList.add("is-lit");
    }, { rootMargin: "-18% 0px -48% 0px", threshold: [0, 0.12, 0.3, 0.55] });

    document.querySelectorAll("main section[id]").forEach(section => observer.observe(section));

    return () => {
      observer.disconnect();
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
      window.removeEventListener("blur", handlePointerLeave);
      activeTarget?.classList.remove("has-pointer-light");
      ["--pointer-x", "--pointer-y", "--spotlight-opacity", "--ambient-primary", "--ambient-secondary"].forEach(property => root.style.removeProperty(property));
    };
  }, []);

  return <div className="global-lighting" aria-hidden="true" />;
}