"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { SpatialCard } from "@/components/spatial-card";
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
      <div className="projects-heading">
        <div>
          <p className="section-kicker">03 / Selected work</p>
          <h2 className="section-title mt-4 text-5xl sm:text-6xl">
            Built to make an impact.
          </h2>
        </div>
        <a
          href="https://github.com/soorajnadarajan2005-ui"
          target="_blank"
          rel="noreferrer"
          className="projects-github-link"
        >
          Browse GitHub <ArrowUpRight size={14} aria-hidden="true" />
        </a>
      </div>

      <div className="projects-grid">
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
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className={`project-card-wrap ${matchesTech ? "" : "is-dimmed"}`}
            >
              <SpatialCard
                href={`/projects/${project.slug}`}
                ariaLabel={`View ${project.title} project case study`}
                className={`project-card project-card-${project.slug}`}
              >
                <div className="project-card-visual">
                  <ProjectVisual project={project} />
                  {project.slug === "personal-journal-analyzer" && (
                    <span className="project-visual-disclaimer">
                      CONCEPT ART · CLI PROJECT · RETRIEVED EXCERPTS SENT TO CLAUDE
                    </span>
                  )}
                  <span className="project-card-number">{project.number}</span>
                  <span className="project-card-open" aria-hidden="true">
                    <ArrowUpRight size={17} />
                  </span>
                </div>
                <div className="project-card-copy">
                  <p className="project-subtitle">{project.subtitle}</p>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  {project.highlights && (
                    <ul
                      className="project-highlight-list"
                      aria-label={`${project.title} feature highlights`}
                    >
                      {project.highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                  )}
                  <ul
                    className="project-tags"
                    aria-label={`${project.title} technologies`}
                  >
                    {project.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                  <span className="project-card-cta">
                    Explore case study <ArrowRight size={15} aria-hidden="true" />
                  </span>
                </div>
              </SpatialCard>
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
      <Image
        className="project-media-image"
        src={project.image}
        alt={
          project.slug === "personal-journal-analyzer"
            ? "Concept artwork, not the actual interface; Personal Journal Analyzer is CLI-based and sends retrieved excerpts to Claude"
            : project.slug === "codepilot-ai"
              ? "Illustrative CodePilot AI workspace concept artwork, not a verified application screenshot"
              : `${project.title} project preview`
        }
        width={
          project.slug === "falleye"
            ? 1643
            : project.slug === "doculens"
              ? 801
              : project.slug === "personal-journal-analyzer"
                ? 1365
                : project.slug === "codepilot-ai"
                  ? 1365
                : 816
        }
        height={
          project.slug === "falleye"
            ? 477
            : project.slug === "personal-journal-analyzer"
              ? 768
              : project.slug === "codepilot-ai"
                ? 768
              : 412
        }
        sizes="(max-width: 700px) calc(100vw - 32px), (max-width: 1050px) 50vw, 33vw"
        loading="lazy"
      />
    );
  }

  return (
    <div
      className="project-visual-content"
      role="img"
      aria-label={`Illustrative ${project.title} system flow, not a project screenshot`}
    >
      <span className="visual-kicker">PROJECT SCOPE</span>
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
