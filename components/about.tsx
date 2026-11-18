"use client";
import { motion } from "motion/react";

export function About() {
  return (
    <section id="about" className="section">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}>
        <div className="editorial-about">
          <div>
            <p className="section-kicker">01 / About</p>
            <h2 className="section-title mt-4 text-4xl sm:text-5xl">Practical AI, thoughtfully built.</h2>
            <p className="editorial-statement muted mt-7">
              I&apos;m Sooraj Nadarajan, an AI/ML Engineer with an Information Technology background. I build practical applications with machine learning, generative AI, large language models, RAG, and backend technologies—turning real-world problems into useful software.
            </p>
          </div>
          <div>
            <p className="section-kicker">Now</p>
            <ul className="now-list">
              <li>Machine learning and applied AI</li>
              <li>LLMs, NLP, and retrieval-augmented generation</li>
              <li>Backend and full-stack application development</li>
              <li>BSc Information Technology</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
