"use client";
import { motion } from "motion/react";

const groups = [
  { title: "Programming", skills: ["Python", "JavaScript", "TypeScript"] },
  { title: "Machine learning & data", skills: ["Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Classification", "Regression", "Model Evaluation"] },
  { title: "Generative AI & NLP", skills: ["LLMs", "RAG", "Embeddings", "FAISS", "Vector Search", "NLP"] },
  { title: "Backend & APIs", skills: ["FastAPI", "Flask", "REST APIs", "SQLAlchemy", "Socket.IO", "JWT"] },
  { title: "Databases", skills: ["PostgreSQL", "Supabase"] },
  { title: "Frontend & delivery", skills: ["React", "Tailwind CSS", "Docker", "Git", "GitHub", "Streamlit", "Next.js", "Vercel"] }
];

export function Skills() {
  return <section id="expertise" className="section">
    <div className="mb-10 max-w-3xl">
      <p className="section-kicker">02 / Technical expertise</p>
      <h2 className="section-title mt-4 text-4xl sm:text-5xl">Tools for useful systems.</h2>
      <p className="muted mt-4 max-w-xl leading-7">A categorized view of the technologies used across my projects. Focus a technology to see where it appears in the work.</p>
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
