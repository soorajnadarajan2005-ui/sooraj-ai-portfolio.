"use client";

import { motion } from "motion/react";
import { ArrowDownRight, ArrowUpRight, Download } from "lucide-react";
import { NeuralCore } from "@/components/neural-core";

export function Hero() {
  return (
    <section id="top" className="hero-stage relative flex min-h-[100svh] flex-col justify-center overflow-hidden">
      <div className="hero-content section relative z-10">
        <div className="hero-copy">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="section-kicker mb-8">
          AI/ML Engineer · Python Developer
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="hero-name"
        >
          <span>SOORAJ</span>
          <span className="hero-name-secondary">NADARAJAN</span>
        </motion.h1>
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.35 }} className="hero-support">
          <div>
            <h2 className="hero-statement">Building practical AI systems that solve real-world problems.</h2>
            <p className="hero-role">Machine Learning · Generative AI · Python</p>
          </div>
          <div className="hero-actions">
            <a href="#projects" className="hero-link">
              View projects <ArrowDownRight size={17} strokeWidth={1.6} aria-hidden="true" />
            </a>
            <a href="/Sooraj-Nadarajan-Resume.pdf" download className="hero-link">
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
        <NeuralCore />
      </div>
    </section>
  );
}
