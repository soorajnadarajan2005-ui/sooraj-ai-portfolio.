"use client";

import { useEffect } from "react";

export function CursorAura() {
  useEffect(() => {
    const query = window.matchMedia("(hover: hover) and (pointer: fine) and (min-width: 900px)");
    const aura = document.querySelector<HTMLElement>(".cursor-aura");
    if (!aura || !query.matches) return;

    const handlePointerMove = (event: PointerEvent) => {
      aura.style.setProperty("--cursor-x", `${event.clientX}px`);
      aura.style.setProperty("--cursor-y", `${event.clientY}px`);
      const interactive = event.target instanceof Element && Boolean(event.target.closest("a, button, .project-card"));
      aura.classList.toggle("is-active", interactive);
    };

    document.addEventListener("pointermove", handlePointerMove, { passive: true });
    return () => document.removeEventListener("pointermove", handlePointerMove);
  }, []);

  return <div className="cursor-aura" aria-hidden="true" />;
}
