"use client";

import { motion } from "motion/react";

const groups = [
  {
    number: "01",
    title: "Applied AI",
    description: "Retrieval systems, language models, and document intelligence.",
    skills: ["RAG", "LLMs", "Embeddings", "FAISS", "Ollama", "NLP"],
    className: "skill-tile-ai",
  },
  {
    number: "02",
    title: "Machine learning & vision",
    description: "Data analysis and camera-based computer vision workflows.",
    skills: ["Scikit-learn", "OpenCV", "MediaPipe", "Pandas", "NumPy"],
    className: "skill-tile-vision",
  },
  {
    number: "03",
    title: "Full-stack engineering",
    description: "Responsive interfaces and reliable application APIs.",
    skills: ["React", "TypeScript", "JavaScript", "FastAPI", "Flask", "REST APIs"],
    className: "skill-tile-fullstack",
  },
  {
    number: "04",
    title: "Data & delivery",
    description: "Persistent data, real-time events, and practical deployment tools.",
    skills: ["PostgreSQL", "Supabase", "SQLAlchemy", "Socket.IO", "Docker", "Git"],
    className: "skill-tile-data",
  },
];

function announceTechnology(skill: string) {
  window.dispatchEvent(new CustomEvent("portfolio:tech", { detail: skill }));
}

export function Skills() {
  return (
    <section id="expertise" className="section">
      <div className="skills-heading">
        <div>
          <p className="section-kicker">02 / Technical expertise</p>
          <h2 className="section-title mt-4 text-4xl sm:text-5xl">
            A toolkit for intelligent products.
          </h2>
        </div>
        <p className="muted max-w-md leading-7">
          Technologies used across the projects. Focus or hover a skill to see
          it highlighted in the work below.
        </p>
      </div>
      <motion.div
        layout
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="skills-grid"
      >
        {groups.map((group) => (
          <motion.article
            layout
            key={group.title}
            className={`skill-tile ${group.className}`}
          >
            <div className="skill-tile-heading">
              <span>{group.number} / CAPABILITY</span>
              <span className="skill-tile-mark" aria-hidden="true">
                ↗
              </span>
            </div>
            <h3>{group.title}</h3>
            <p>{group.description}</p>
            <div className="skill-pills">
              {group.skills.map((skill) => (
                <button
                  key={skill}
                  type="button"
                  className="skill-pill"
                  onMouseEnter={() => announceTechnology(skill)}
                  onMouseLeave={() => announceTechnology("")}
                  onFocus={() => announceTechnology(skill)}
                  onBlur={() => announceTechnology("")}
                >
                  {skill}
                </button>
              ))}
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
