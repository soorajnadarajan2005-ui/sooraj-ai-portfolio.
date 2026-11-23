"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
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

      <div className="skills-grid projects-grid">
        {projects.map((project) => {
          const matchesTech =
            !highlightedTech ||
            project.tags.some((tag) => tag.toLowerCase().includes(highlightedTech));

          return (
            <Link
              id={`project-${project.number}`}
              key={project.slug}
              href={`/projects/${project.slug}`}
              aria-label={`Read the ${project.title} project details`}
              className={`skill-tile project-tile project-card ${
                matchesTech ? "" : "is-dimmed"
              }`}
            >
              <div className="skill-tile-heading">
                <span>{project.number} / {project.category}</span>
                <span className="skill-tile-mark" aria-hidden="true">
                  <ArrowUpRight size={17} />
                </span>
              </div>
              <h3>{project.title}</h3>
              <p className="project-tile-subtitle">{project.subtitle}</p>
              <p>{project.description}</p>
              <ul
                className="skill-pills project-tech-list"
                aria-label={`${project.title} technologies`}
              >
                {project.tags.slice(0, 3).map((tag) => (
                  <li key={tag} className="skill-pill">{tag}</li>
                ))}
              </ul>
              <span className="project-card-cta">
                View project details <ArrowRight size={15} aria-hidden="true" />
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
