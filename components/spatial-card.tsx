"use client";

import Link from "next/link";
import type { FocusEvent, PointerEvent, ReactNode } from "react";

export function SpatialCard({
  href,
  className = "",
  children,
  ariaLabel,
}: {
  href: string;
  className?: string;
  children: ReactNode;
  ariaLabel: string;
}) {
  function handlePointerMove(event: PointerEvent<HTMLAnchorElement>) {
    if (
      event.pointerType !== "mouse" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const bounds = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;
    const rotateX = ((y / bounds.height) * 2 - 1) * -3.2;
    const rotateY = ((x / bounds.width) * 2 - 1) * 3.2;

    event.currentTarget.style.setProperty("--card-pointer-x", `${x}px`);
    event.currentTarget.style.setProperty("--card-pointer-y", `${y}px`);
    event.currentTarget.style.setProperty("--card-rotate-x", `${rotateX}deg`);
    event.currentTarget.style.setProperty("--card-rotate-y", `${rotateY}deg`);
  }

  function resetPointer(
    event: PointerEvent<HTMLAnchorElement> | FocusEvent<HTMLAnchorElement>,
  ) {
    event.currentTarget.style.setProperty("--card-rotate-x", "0deg");
    event.currentTarget.style.setProperty("--card-rotate-y", "0deg");
  }

  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      className={`spatial-card ${className}`}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
      onBlur={resetPointer}
    >
      <span className="spatial-card-glare" aria-hidden="true" />
      <span className="spatial-card-content">{children}</span>
    </Link>
  );
}
