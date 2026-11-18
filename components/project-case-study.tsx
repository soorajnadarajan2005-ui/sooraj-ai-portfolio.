import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
import type { Project } from "@/lib/projects";

export function ProjectCaseStudy({ project }: { project: Project }) {
  return (
    <main className="section case-study">
      <Link href="/#projects" className="case-study-back">
        <ArrowLeft size={15} /> All projects
      </Link>

      <header className="case-study-header">
        <p className="section-kicker">
          {project.number} / {project.category}
        </p>
        <h1 className="section-title mt-5 text-5xl sm:text-7xl">
          {project.title}
        </h1>
        <p className="muted mt-4 max-w-2xl text-lg">{project.subtitle}</p>
        <p className="muted mt-5 max-w-3xl leading-7">{project.description}</p>
        <ul className="project-tags" aria-label={`${project.title} technologies`}>
          {project.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        {project.sourceNote && (
          <p className="case-study-note" role="note">
            {project.sourceNote}
          </p>
        )}
      </header>

      <div className="case-study-grid">
        <CaseStudySection title="Problem" content={project.problem} />
        <CaseStudySection title="Objective" content={project.objective} />
        <CaseStudySection title="Architecture & data flow">
          <ol className="case-study-flow">
            {project.architecture.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </CaseStudySection>
        <CaseStudySection
          title="Implementation"
          content={project.implementation}
        />
        <CaseStudySection
          title="Challenges & solutions"
          content={project.challenges}
        />
        <CaseStudySection
          title="Testing & evaluation"
          content={project.testing}
        />
        <CaseStudySection title="Result" content={project.result} />
        <CaseStudySection
          title="Future improvements"
          content={project.future}
        />
      </div>

      <section className="case-study-section" aria-labelledby="media-title">
        <h2 id="media-title">Project media</h2>
        <p>
          No verified project screenshots were included in the portfolio
          workspace. Add real screenshots here when available; the diagram
          above is illustrative, not a product screenshot.
        </p>
      </section>

      <div className="case-study-links">
        {project.githubUrl ? (
          <a href={project.githubUrl} target="_blank" rel="noreferrer">
            Source repository <ArrowUpRight size={15} />
          </a>
        ) : (
          <p>Project repository link not provided.</p>
        )}
        {project.demoUrl ? (
          <a href={project.demoUrl} target="_blank" rel="noreferrer">
            Live demo <ArrowUpRight size={15} />
          </a>
        ) : (
          <p>Live demo link not provided.</p>
        )}
      </div>
    </main>
  );
}

function CaseStudySection({
  title,
  content,
  children,
}: {
  title: string;
  content?: string;
  children?: ReactNode;
}) {
  return (
    <section className="case-study-section">
      <h2>{title}</h2>
      {content && <p>{content}</p>}
      {children}
    </section>
  );
}
