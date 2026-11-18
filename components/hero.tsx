"use client";

import { useEffect } from "react";
import { motion } from "motion/react";
import { ArrowDownRight } from "lucide-react";

const nameEntrance = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.035, delayChildren: 0.2 } },
};

const letterEntrance = {
  hidden: { opacity: 0, y: 42, filter: "blur(12px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
};

function NameLine({ children, delay = 0 }: { children: string; delay?: number }) {
  return (
    <motion.span variants={nameEntrance} initial="hidden" animate="visible" transition={{ delay }} aria-hidden="true" className="hero-name-line">
      {Array.from(children).map((letter, index) => (
        <motion.span key={`${letter}-${index}`} variants={letterEntrance} className="hero-letter">{letter}</motion.span>
      ))}
    </motion.span>
  );
}

export function Hero() {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const stage = document.querySelector(".hero-stage");
    const letters = Array.from(document.querySelectorAll(".hero-letter"));

    if (!stage || letters.length === 0) return;

    if (reducedMotion) {
      letters.forEach(letter => {
        letter.classList.add("is-name-lit", "is-stable");
      });
      stage.classList.add("is-activated");
      return;
    }

    letters.forEach(letter => {
      letter.classList.remove("is-name-lit", "is-electric", "is-stable");
    });

    const revealSequence = letters.map((letter, index) => {
      const delay = 220 + index * 80;
      return window.setTimeout(() => {
        letter.classList.add("is-name-lit");
        if (index === 0 || index === 6) {
          letter.classList.add("is-electric");
          window.setTimeout(() => letter.classList.remove("is-electric"), 95);
        }
      }, delay);
    });

    const settle = window.setTimeout(() => {
      stage.classList.add("is-activated");
      letters.forEach(letter => letter.classList.add("is-stable"));
    }, 1800);

    const pulseLoop = window.setInterval(() => {
      const target = letters[Math.floor(Math.random() * letters.length)];
      if (!target) return;
      target.classList.add("is-electric");
      window.setTimeout(() => target.classList.remove("is-electric"), 110);
    }, 10800);

    return () => {
      revealSequence.forEach(timeoutId => window.clearTimeout(timeoutId));
      window.clearTimeout(settle);
      window.clearInterval(pulseLoop);
    };
  }, []);

  return (
    <section id="top" className="hero-stage relative flex min-h-[100svh] flex-col justify-center overflow-hidden">
      <div className="planet-scene" aria-hidden="true">
        <div className="planet-glow planet-glow-one" />
        <div className="planet-glow planet-glow-two" />
        <div className="planet-shell">
          <span className="planet-ring planet-ring-outer" />
          <span className="planet-ring planet-ring-middle" />
          <span className="planet-ring planet-ring-inner" />
          <span className="planet-node node-a" />
          <span className="planet-node node-b" />
          <span className="planet-node node-c" />
          <span className="planet-node node-d" />
          <span className="planet-pulse pulse-a" />
          <span className="planet-pulse pulse-b" />
        </div>
        <span className="planet-particle particle-a" />
        <span className="planet-particle particle-b" />
        <span className="planet-particle particle-c" />
        <span className="planet-particle particle-d" />
        <span className="planet-particle particle-e" />
      </div>
      <div className="hero-light" aria-hidden="true" />
      <div className="ai-core" aria-hidden="true"><span className="ai-core-orb" /><span className="ai-core-label">AI CORE / 01</span></div>
      <div className="hero-content section relative z-10">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.08 }} className="section-kicker mb-8">
          AI / ML Engineer
        </motion.p>
        <h1 aria-label="Sooraj Nadarajan" className="hero-name">
          <NameLine>SOORAJ</NameLine>
          <NameLine delay={0.16}>NADARAJAN</NameLine>
        </h1>
        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.9, ease: [0.22, 1, 0.36, 1] }} className="hero-support">
          <p>I build intelligent systems from ideas, data and code.</p>
          <a href="#projects" className="hero-link">
            Explore my work <ArrowDownRight size={17} strokeWidth={1.6} aria-hidden="true" />
          </a>
        </motion.div>
      </div>
      <div className="hero-caption" aria-hidden="true"><span>SOORAJ NADARAJAN</span><span>INTELLIGENCE, ENGINEERED.</span></div>
    </section>
  );
}
