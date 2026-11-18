"use client";

import { motion } from "motion/react";

const steps = [
  { title: "Problem definition", text: "Clarify the user need, constraints, and what success would mean." },
  { title: "Data collection", text: "Identify appropriate data and its source before drawing conclusions." },
  { title: "Data preparation", text: "Inspect, clean, and prepare the available information." },
  { title: "Model development", text: "Build a baseline and choose an approach suited to the task." },
  { title: "Model evaluation", text: "Test against the objective and report measured results honestly." },
  { title: "Backend integration", text: "Connect model behavior to reliable APIs and application workflows." },
  { title: "Deployment", text: "Package and deliver the application for its intended environment." },
  { title: "Monitoring & improvement", text: "Observe behavior and refine the system as needs and evidence evolve." },
];

export function Workflow() {
  return (
    <>
      <section id="workflow" className="section">
        <div className="mb-11 max-w-2xl">
          <p className="section-kicker">04 / Engineering workflow</p>
          <h2 className="section-title mt-4 text-4xl sm:text-5xl">How I build AI systems.</h2>
          <p className="muted mt-4 leading-7">A practical path from a well-framed problem to a deployed system that can be evaluated and improved.</p>
        </div>
        <ol className="thinking-list">
          {steps.map((step, index) => {
            return (
              <motion.li key={step.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: index * 0.04, duration: 0.45, ease: [0.22, 1, 0.36, 1] }} className="thinking-step">
                <span>0{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </motion.li>
            );
          })}
        </ol>
      </section>
    </>
  );
}
