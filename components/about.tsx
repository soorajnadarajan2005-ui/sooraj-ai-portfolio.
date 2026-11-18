"use client";
import { motion } from "motion/react";

export function About() {
  return (
    <section id="about" className="section">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}>
        <div className="editorial-about">
          <div>
            <p className="section-kicker">01 / Profile</p>
            <h2 className="section-title mt-4 text-4xl sm:text-5xl">Intelligence, engineered.</h2>
            <p className="editorial-statement muted mt-7">
              I&apos;m Sooraj Nadarajan, a BSc IT graduate building practical systems that connect data, machine learning and useful applications.
            </p>
          </div>
          <div>
            <p className="section-kicker">Now</p>
            <ul className="now-list">
              <li>AI / ML engineering</li>
              <li>Building practical AI applications</li>
              <li>Exploring RAG and intelligent document systems</li>
              <li>BSc IT — completed</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
