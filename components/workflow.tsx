"use client";

import { motion } from "motion/react";

const steps = [
  { title: "Problem", text: "Define the question, the context and what a useful outcome means." },
  { title: "Data", text: "Inspect, prepare and understand the information available." },
  { title: "Experiment", text: "Explore patterns, assumptions and a sensible baseline." },
  { title: "Model", text: "Choose an approach that fits the task and available data." },
  { title: "Evaluation", text: "Test behavior against the objective and refine where needed." },
  { title: "Application", text: "Turn the result into a usable product or workflow." },
  { title: "Deployment", text: "Package and deliver the system for real use." },
];

export function Workflow() {
  return (
    <>
      <section id="workflow" className="section">
        <div className="mb-11 max-w-2xl">
          <p className="section-kicker">03 / Method</p>
          <h2 className="section-title mt-4 text-4xl sm:text-5xl">How I think.</h2>
          <p className="muted mt-4 leading-7">A practical path from a clear question to a useful, evaluated application.</p>
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
