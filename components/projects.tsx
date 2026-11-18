"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
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
                onMouseMove={(event) => {
                  const bounds = event.currentTarget.getBoundingClientRect();
                  event.currentTarget.style.setProperty("--tilt-x", `${((event.clientY - bounds.top) / bounds.height - 0.5) * -4}deg`);
                  event.currentTarget.style.setProperty("--tilt-y", `${((event.clientX - bounds.left) / bounds.width - 0.5) * 5}deg`);
                  event.currentTarget.style.setProperty("--local-x", `${event.clientX - bounds.left}px`);
                  event.currentTarget.style.setProperty("--local-y", `${event.clientY - bounds.top}px`);
                }}
                onMouseLeave={(event) => {
                  event.currentTarget.style.setProperty("--tilt-x", "0deg");
                  event.currentTarget.style.setProperty("--tilt-y", "0deg");
                }}
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
  if (project.image) {
    return (
      <div className={`project-media-wrap project-media-${project.slug}`}>
      <Image
        className="project-media-image"
        src={project.image}
        alt={`${project.title} project preview`}
        width={project.slug === "falleye" ? 1643 : project.slug === "documind" ? 801 : 816}
        height={project.slug === "falleye" ? 477 : 412}
        sizes="(max-width: 700px) calc(100vw - 32px), 560px"
        loading="lazy"
      />
      {project.slug === "falleye" && (
        <div className="technical-overlay falleye-overlay" aria-hidden="true">
          <span className="scan-line" /><span className="pose-point point-one" />
          <span className="pose-point point-two" /><span className="pose-point point-three" />
          <span className="vision-status">POSE TRACKING</span>
        </div>
      )}
      {project.slug === "documind" && (
        <div className="technical-overlay documind-overlay" aria-hidden="true">
          <span className="doc-chip chip-one">TEXT</span>
          <span className="doc-chip chip-two">CHUNK</span>
          <span className="doc-chip chip-three">VECTOR</span>
          <span className="retrieval-pulse" />
        </div>
      )}
      {project.slug === "nexus-crm" && (
        <div className="technical-overlay nexus-overlay" aria-hidden="true">
          <span className="crm-node crm-node-one" /><span className="crm-node crm-node-two" />
          <span className="crm-node crm-node-three" /><span className="crm-flow" />
          <span className="crm-status">WORKFLOW</span>
        </div>
      )}
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
