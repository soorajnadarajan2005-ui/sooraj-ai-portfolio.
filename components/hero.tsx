"use client";

import { motion } from "motion/react";
import type { FocusEvent, PointerEvent } from "react";
import { ArrowDownRight, ArrowUpRight, Download } from "lucide-react";
import { SpatialArtifact } from "@/components/spatial-artifact";

function moveMagneticTarget(event: PointerEvent<HTMLAnchorElement>) {
  if (
    event.pointerType !== "mouse" ||
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    return;
  }

  const bounds = event.currentTarget.getBoundingClientRect();
  const x = (event.clientX - bounds.left - bounds.width / 2) * 0.12;
  const y = (event.clientY - bounds.top - bounds.height / 2) * 0.12;
  event.currentTarget.style.setProperty("--magnetic-x", `${x}px`);
  event.currentTarget.style.setProperty("--magnetic-y", `${y}px`);
}

function resetMagneticTarget(
  event: PointerEvent<HTMLAnchorElement> | FocusEvent<HTMLAnchorElement>,
) {
  event.currentTarget.style.setProperty("--magnetic-x", "0px");
  event.currentTarget.style.setProperty("--magnetic-y", "0px");
}

export function Hero() {
  return (
    <section id="top" className="hero-stage relative flex min-h-[100svh] flex-col justify-center overflow-hidden">
      <div className="hero-content section relative z-10">
        <div className="hero-copy">
          <motion.div
            className="hero-availability"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="availability-dot" aria-hidden="true" />
            <span>System online</span>
            <span className="availability-divider" aria-hidden="true" />
            <span>Available for AI engineering roles</span>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="section-kicker mb-6"
          >
            AI/ML ENGINEER · FULL-STACK DEVELOPER
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="hero-name"
          >
            <span>SOORAJ</span>
            <span className="hero-name-secondary">NADARAJAN</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.22 }}
            className="hero-support"
          >
            <div>
              <h2 className="hero-statement">
                Engineering intelligent systems for a more useful world.
              </h2>
              <p className="hero-role">
                Machine Learning <span>/</span> Generative AI <span>/</span> Python
              </p>
            </div>
            <div className="hero-actions">
              <a
                href="#projects"
                className="hero-link magnetic-link"
                onPointerMove={moveMagneticTarget}
                onPointerLeave={resetMagneticTarget}
                onBlur={resetMagneticTarget}
              >
                View projects <ArrowDownRight size={17} strokeWidth={1.6} aria-hidden="true" />
              </a>
              <a
                href="/Sooraj-Nadarajan-Resume.pdf"
                download
                className="hero-link magnetic-link"
                onPointerMove={moveMagneticTarget}
                onPointerLeave={resetMagneticTarget}
                onBlur={resetMagneticTarget}
              >
                Download resume <Download size={15} aria-hidden="true" />
              </a>
            </div>
          </motion.div>
          <div className="hero-socials">
            <a href="https://github.com/soorajnadarajan2005-ui" target="_blank" rel="noreferrer">
              GitHub <ArrowUpRight size={13} aria-hidden="true" />
            </a>
            <a href="https://www.linkedin.com/in/sooraj-nadarajan-8510273b3/" target="_blank" rel="noreferrer">
              LinkedIn <ArrowUpRight size={13} aria-hidden="true" />
            </a>
            <span>Kochi, Kerala, India</span>
          </div>
        </div>
        <SpatialArtifact />
      </div>
    </section>
  );
}
