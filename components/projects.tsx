"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { projects, type Project } from "@/lib/projects";

export function Projects() {
  const [highlightedTech, setHighlightedTech] = useState("");

  useEffect(() => {
    const handleTechnology = (event: Event) => {
      setHighlightedTech((event as CustomEvent<string>).detail.toLowerCase());
    };
    window.addEventListener("portfolio:tech", handleTechnology);
    return () => window.removeEventListener("portfolio:tech", handleTechnology);
  }, []);

  return (
    <section id="projects" className="section">
      <div className="mb-14 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
        <div>
          <p className="section-kicker">03 / Selected work</p>
          <h2 className="section-title mt-4 text-5xl sm:text-6xl">Work, in context.</h2>
        </div>
        <a
          href="https://github.com/soorajnadarajan2005-ui"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 border-b border-[var(--border)] pb-2 text-xs font-semibold uppercase tracking-[.08em] muted transition hover:border-[var(--accent)] hover:text-[var(--foreground)]"
        >
          Browse GitHub <ArrowUpRight size={14} />
        </a>
      </div>

      <div className="project-list">
        {projects.map((project) => {
          const matchesTech =
            !highlightedTech ||
            project.tags.some((tag) => tag.toLowerCase().includes(highlightedTech));

          return (
            <motion.article
              id={`project-${project.number}`}
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className={`project-row ${matchesTech ? "" : "is-dimmed"}`}
            >
              <a
                href={`/projects/${project.slug}`}
                aria-label={`View ${project.title} case study`}
                className={`project-visual project-visual-${project.slug}`}
              >
                <ProjectVisual project={project} />
              </a>
              <div className="project-copy">
                <p className="project-subtitle">
                  {project.number} / {project.category}
                </p>
                <h3 className="project-title">{project.title}</h3>
                <p className="muted mt-4 max-w-lg text-sm leading-7">
                  {project.description}
                </p>
                <ul
                  className="project-tags"
                  aria-label={`${project.title} technologies`}
                >
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
                <a
                  href={`/projects/${project.slug}`}
                  className="project-case-link"
                >
                  View case study <ArrowRight size={15} />
                </a>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}

function ProjectVisual({ project }: { project: Project }) {
  if (project.slug === "falleye") {
    return (
      <div
        className="project-visual-content"
        role="img"
        aria-label="Illustrative FallEye system flow, not a project screenshot"
      >
        <span className="visual-kicker">ILLUSTRATIVE SYSTEM FLOW</span>
        <div className="vision-frame">
          <span className="vision-person" />
          <span className="vision-label">POSE ANALYSIS</span>
        </div>
      </div>
    );
  }

  return (
    <div
      className="project-visual-content"
      role="img"
      aria-label={`Illustrative ${project.title} system flow, not a project screenshot`}
    >
      <span className="visual-kicker">ILLUSTRATIVE SYSTEM FLOW</span>
      <div className="flow-visual">
        {project.architecture.map((stage, index) => (
          <span key={stage} className="contents">
            <span className="flow-node">{stage}</span>
            {index < project.architecture.length - 1 && (
              <span className="flow-arrow" aria-hidden="true">
                →
              </span>
            )}
          </span>
        ))}
      </div>
    </div>
  );
}
