"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Download, ExternalLink } from "lucide-react";

export function ResumeCta() {
  const [open, setOpen] = useState(false);

  return (
    <section id="resume" className="section pt-4">
      <div className="border-t border-[var(--border)] pt-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="section-kicker">08 / Resume</p>
            <h2 className="section-title mt-4 text-4xl sm:text-5xl">Experience the resume.</h2>
            <p className="muted mt-4 max-w-xl leading-7">A concise view of my profile, education, tools and selected work.</p>
          </div>
          <button type="button" onClick={() => setOpen(value => !value)} aria-expanded={open} aria-controls="resume-details" className="hero-link">{open ? "Close profile" : "Open profile"}<ArrowUpRight size={15} /></button>
        </div>
        <AnimatePresence initial={false}>
          {open && <motion.div id="resume-details" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }} className="overflow-hidden">
            <div className="resume-sheet">
              <div><h3>PROFILE</h3><p>Sooraj Nadarajan<br />AI / ML Engineering</p></div>
              <div><h3>EDUCATION</h3><p>BSc Information Technology<br />MG University · 2026</p></div>
              <div><h3>FOCUS</h3><p>Computer vision, RAG, NLP and full-stack AI applications.</p></div>
              <div><h3>EXPERIENCE</h3><p>AI/ML Engineering Intern · Linnk Academy India<br />Dates and responsibilities to confirm.</p></div>
              <div><h3>SELECTED PROJECTS</h3><p>FallEye · DocuMind · NEXUS CRM · Personal Journal Analyzer · CodePilot AI</p></div>
            </div>
            <div className="mt-6 flex flex-wrap gap-6">
              <a href="/Sooraj-Nadarajan-Resume.pdf" target="_blank" rel="noreferrer" className="hero-link">Open resume <ExternalLink size={15} /></a>
              <a href="/Sooraj-Nadarajan-Resume.pdf" download className="hero-link">Download PDF <Download size={15} /></a>
            </div>
          </motion.div>}
        </AnimatePresence>
      </div>
    </section>
  );
}
