"use client";
import { motion } from "motion/react";

const groups = [
  { title: "Programming / Vision", skills: ["Python", "OpenCV", "MediaPipe", "JavaScript", "TypeScript", "HTML", "CSS"] },
  { title: "Machine learning", skills: ["Scikit-learn", "Regression", "Classification", "Model Evaluation"] },
  { title: "Data", skills: ["Pandas", "NumPy", "Matplotlib"] },
  { title: "AI / RAG", skills: ["RAG", "Embeddings", "FAISS", "Vector Search", "PDF Processing", "LLM Applications"] },
  { title: "Backend", skills: ["FastAPI", "Flask"] },
  { title: "Deployment / Tools", skills: ["Git", "GitHub", "Streamlit", "Next.js", "Vercel"] }
];

export function Skills() {
  return <section id="skills" className="section">
    <div className="mb-10 max-w-3xl">
      <p className="section-kicker">04 / The tools behind the work</p>
      <h2 className="section-title mt-4 text-4xl sm:text-5xl">A system, not a checklist.</h2>
      <p className="muted mt-4 max-w-xl leading-7">Explore the tools used across the projects. Focus a technology to see where it appears in the work.</p>
    </div>
    <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.55 }} className="tool-groups">
      {groups.map(group => (
        <div key={group.title} className="tool-group">
          <h3>{group.title}</h3>
          <div className="tool-list">
            {group.skills.map(skill => <button key={skill} type="button" className="tool-button" onMouseEnter={() => window.dispatchEvent(new CustomEvent("portfolio:tech", { detail: skill }))} onMouseLeave={() => window.dispatchEvent(new CustomEvent("portfolio:tech", { detail: "" }))} onFocus={() => window.dispatchEvent(new CustomEvent("portfolio:tech", { detail: skill }))} onBlur={() => window.dispatchEvent(new CustomEvent("portfolio:tech", { detail: "" }))}>{skill}</button>)}
          </div>
        </div>
      ))}
    </motion.div>
  </section>;
}
