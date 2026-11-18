"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, ArrowUpRight, ExternalLink, Github, X } from "lucide-react";

type Project = {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  accent: string;
  tagline: string;
  quote?: string;
  architecture: string[];
  problem: string;
  objective: string;
  development: string;
  result: string;
  future: string;
};

const projects: Project[] = [
  {
    number: "01",
    title: "FallEye",
    subtitle: "Elderly Fall Detection System",
    description: "A vision-based elderly fall detection system designed to detect potential falls and trigger alerts through an interactive safety dashboard.",
    tags: ["Python", "OpenCV", "MediaPipe", "Flask", "AI"],
    accent: "blue",
    tagline: "Smart Vision for Elder Safety",
    quote: "Every fall matters. Every second counts.",
    architecture: ["Video input", "Pose landmarks", "Fall detection", "Dashboard alert"],
    problem: "Falls can require a timely response, particularly when an older adult is alone.",
    objective: "Explore a vision-based way to identify potential falls and surface an alert in a safety dashboard.",
    development: "Combines Python computer-vision tooling with an interactive Flask dashboard.",
    result: "A prototype concept for visual fall detection and alert presentation. No accuracy figures are claimed.",
    future: "Evaluate against representative footage, improve detection robustness and test alert delivery."
  },
{
  number: "02",
  title: "DocuMind",
  subtitle: "Multi-Document Intelligence / RAG Chatbot",

  description:
    "An AI-powered document intelligence platform that lets users upload PDFs, Word documents, TXT files, Excel spreadsheets and CSV files, ask questions about their documents and generate context-grounded answers using RAG.",

  tags: [
    "Python",
    "FastAPI",
    "RAG",
    "LLM",
    "Embeddings",
    "FAISS",
    "NLP",
    "PDF",
    "Word",
    "Excel"
  ],

  accent: "violet",

  tagline:
    "Upload documents. Ask questions. Get intelligent answers.",

  architecture: [
    "Document Upload",
    "Text Extraction",
    "Chunking",
    "Embeddings",
    "FAISS",
    "Context Retrieval",
    "LLM",
    "Answer Generation",
    "Export"
  ],

  problem:
    "Manually searching through large PDFs, reports, spreadsheets and multiple documents to find specific information is time-consuming.",

  objective:
    "Create a unified AI assistant that understands uploaded documents and answers user questions using relevant document context.",

  development:
    "Built with FastAPI and a RAG pipeline that processes multiple document formats, extracts content, creates embeddings, performs semantic search with FAISS and generates answers using retrieved context.",

  result:
    "Users can upload multiple documents, ask questions, receive AI-generated answers grounded in their uploaded content and export the generated answers in different formats.",

  future:
    "OCR for scanned files, improved source citations, advanced spreadsheet analysis, multilingual support, image understanding and broader document-format support."
},
  {
    number: "03",
    title: "Mobile Price Predictor",
    subtitle: "Machine Learning Web Application",
    description: "A machine learning application that predicts mobile phone price ranges from device specifications.",
    tags: ["Python", "Pandas", "Scikit-learn", "Streamlit"],
    accent: "cyan",
    tagline: "Device specifications to price range",
    architecture: ["Device specs", "Data preparation", "ML model", "Price range"],
    problem: "Comparing devices across a range of specifications can make price tiers difficult to estimate.",
    objective: "Explore a machine-learning application that maps device specifications to a price range.",
    development: "Uses a Python data workflow with Pandas and Scikit-learn, presented through Streamlit.",
    result: "A web application that accepts device specifications and returns a predicted price range.",
    future: "Document the training data, compare model baselines and evaluate predictions on held-out data."
  }
];

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [highlightedTech, setHighlightedTech] = useState("");

  useEffect(() => {
    const handleTechnology = (event: Event) => setHighlightedTech((event as CustomEvent<string>).detail.toLowerCase());
    window.addEventListener("portfolio:tech", handleTechnology);
    return () => window.removeEventListener("portfolio:tech", handleTechnology);
  }, []);

  useEffect(() => {
    if (!selectedProject) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedProject(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [selectedProject]);

  return <section id="projects" className="section">
    <div className="mb-14 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
      <div>
        <p className="section-kicker">02 / Selected work</p>
        <h2 className="section-title mt-4 text-5xl sm:text-6xl">Work, in context.</h2>
      </div>
      <a href="https://github.com/soorajnadarajan2005-ui" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 border-b border-[var(--border)] pb-2 text-xs font-semibold uppercase tracking-[.08em] muted transition hover:border-[var(--accent)] hover:text-[var(--foreground)]">
        Browse GitHub <ArrowUpRight size={14}/>
      </a>
    </div>

    <div className="project-list">
      {projects.map((project) => {
        const matchesTech = !highlightedTech || project.tags.some(tag => tag.toLowerCase().includes(highlightedTech));
        return (
        <motion.article id={`project-${project.number}`} key={project.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }} className={`project-row ${matchesTech ? "" : "is-dimmed"}`}>
          <button type="button" onClick={() => setSelectedProject(project)} aria-label={`View ${project.title} case study`} className={`project-visual project-visual-${project.title === "FallEye" ? "falleye" : project.title === "DocuMind" ? "documind" : "mobile"}`}>
            <ProjectVisual project={project} />
          </button>
          <div className="project-copy">
            <p className="project-subtitle">{project.number} / {project.subtitle}</p>
            <h3 className="project-title">{project.title}</h3>
            <p className="muted mt-4 max-w-lg text-sm leading-7">{project.description}</p>
            <ul className="project-tags" aria-label={`${project.title} technologies`}>
              {project.tags.map(tag => <li key={tag}>{tag}</li>)}
            </ul>
            <button type="button" onClick={() => setSelectedProject(project)} className="project-case-link">
              View case study <ArrowRight size={15} />
            </button>
          </div>
        </motion.article>
        );
      })}
    </div>

    <AnimatePresence>
    {selectedProject && <motion.div key="case-study-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.22 }} className="fixed inset-0 z-[70] flex items-end justify-center bg-black/70 p-0 backdrop-blur-sm sm:items-center sm:p-5" onMouseDown={event => { if (event.target === event.currentTarget) setSelectedProject(null); }}>
      <motion.section initial={{ opacity: 0, y: 22, scale: 0.985 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 12, scale: 0.985 }} transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }} role="dialog" aria-modal="true" aria-labelledby="case-study-title" className="max-h-[92dvh] w-full max-w-3xl overflow-y-auto rounded-t-3xl border border-[var(--border)] bg-[var(--background)] p-5 shadow-2xl sm:rounded-3xl sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <div><p className="section-kicker">Project case study / {selectedProject.number}</p><h2 id="case-study-title" className="mt-2 text-3xl font-semibold">{selectedProject.title}</h2><p className="muted mt-1 text-sm">{selectedProject.subtitle}</p></div>
          <button type="button" onClick={() => setSelectedProject(null)} aria-label="Close case study" className="rounded-lg border border-[var(--border)] p-2 muted transition hover:text-[var(--foreground)]"><X size={18} /></button>
        </div>
        <p className="muted mt-5 leading-7">{selectedProject.description}</p>
        <div className="mt-6 grid gap-x-7 gap-y-5 sm:grid-cols-2">
          <CaseStudyDetail title="Problem" text={selectedProject.problem} />
          <CaseStudyDetail title="Objective" text={selectedProject.objective} />
          <CaseStudyDetail title="Architecture" text={selectedProject.architecture.join(" → ")} />
          <CaseStudyDetail title="Development" text={selectedProject.development} />
          <CaseStudyDetail title="Result" text={selectedProject.result} />
          <CaseStudyDetail title="Future improvements" text={selectedProject.future} />
        </div>
        <div className="mt-7 flex flex-wrap items-center justify-between gap-4 border-t border-[var(--border)] pt-5">
          <div className="flex flex-wrap gap-2">{selectedProject.tags.map(tag => <span key={tag} className="rounded-md border border-[var(--border)] px-2 py-1 text-[11px] muted">{tag}</span>)}</div>
          <a href="https://github.com/soorajnadarajan2005-ui" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)]">Browse GitHub profile <Github size={15} /><ExternalLink size={13} /></a>
        </div>
      </motion.section>
    </motion.div>}
    </AnimatePresence>
  </section>;
}

function ProjectVisual({ project }: { project: Project }) {
  if (project.title === "FallEye") {
    return <div className="project-visual-content" aria-label="Abstract computer vision pose-detection visualization" role="img">
      <span className="visual-kicker">LIVE FRAME / POSE LANDMARKS</span>
      <div className="vision-frame"><span className="vision-person" /><span className="vision-label">POSE DETECTED</span></div>
    </div>;
  }

  const stages = project.title === "DocuMind" ? ["PDF", "EXTRACT", "CHUNKS", "EMBED", "RETRIEVE", "ANSWER"] : ["DEVICE SPECS", "ML MODEL", "PRICE RANGE"];
  return <div className="project-visual-content" role="img" aria-label={`${project.title} system flow`}>
    <span className="visual-kicker">SYSTEM / {project.title === "DocuMind" ? "DOCUMENT RETRIEVAL" : "PRICE PREDICTION"}</span>
    <div className="flow-visual">
      {stages.map((stage, index) => <span key={stage} className="contents">
        <span className="flow-node">{stage}</span>{index < stages.length - 1 && <span className="flow-arrow" aria-hidden="true">→</span>}
      </span>)}
    </div>
  </div>;
}

function CaseStudyDetail({ title, text }: { title: string; text: string }) {
  return <div><h3 className="text-sm font-semibold">{title}</h3><p className="muted mt-1.5 text-sm leading-6">{text}</p></div>;
}
