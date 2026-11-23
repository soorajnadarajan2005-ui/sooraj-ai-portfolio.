import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
import { CodePilotVisual } from "@/components/codepilot-visual";
import { JournalRagVisual } from "@/components/journal-rag-visual";
import { getRelatedProjects, type Project } from "@/lib/projects";

export function ProjectCaseStudy({ project }: { project: Project }) {
  const relatedProjects = getRelatedProjects(project);

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
        {project.tagline && (
          <p className="case-study-tagline">{project.tagline}</p>
        )}
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

      {project.caseStudy ? (
        <div className="case-study-grid">
          <CaseStudySection
            title="Overview"
            content={project.caseStudy.overview}
          />
          <CaseStudySection title="Problem" content={project.problem} />
          <CaseStudySection title="Objective" content={project.objective} />
          <CaseStudySection
            title="Solution"
            content={project.caseStudy.solution}
          />
          <CaseStudySection
            title="Architecture"
            content={project.caseStudy.architectureNote}
          >
            <ol
              className={`case-study-flow ${
                project.slug === "codepilot-ai" ? "case-study-flow-vertical" : ""
              }`}
            >
              {project.architecture.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </CaseStudySection>
          <CaseStudySection
            title="Implementation"
            content={project.implementation}
          />
          <CaseStudySection title="How it Works">
            <ol className="case-study-steps">
              {project.caseStudy.howItWorks.map((step) => (
                <li key={step.title}>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </li>
              ))}
            </ol>
          </CaseStudySection>
          <CaseStudySection title="Privacy">
            <ul className="case-study-bullets">
              {project.caseStudy.privacy.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
          </CaseStudySection>
          <CaseStudySection
            title="Technical Challenges"
            content={project.challenges}
          />
          <CaseStudySection
            title="Feature highlights"
            content={project.highlights?.join(" · ")}
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
      ) : (
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
      )}

      {project.slug === "personal-journal-analyzer" && (
        <section className="case-study-section" aria-labelledby="pipeline-title">
          <h2 id="pipeline-title">RAG pipeline animation</h2>
          <div className="case-study-animation">
            <JournalRagVisual />
          </div>
        </section>
      )}

      {project.slug === "codepilot-ai" && (
        <section className="case-study-section" aria-labelledby="workspace-title">
          <h2 id="workspace-title">Repository-to-review animation</h2>
          <div className="case-study-animation">
            <CodePilotVisual variant="detail" />
          </div>
        </section>
      )}

      <section className="case-study-section" aria-labelledby="media-title">
        <h2 id="media-title">Project media</h2>
        {project.image ? (
          <figure className="case-study-media">
            <Image
              src={project.image}
              alt={
                project.slug === "personal-journal-analyzer"
                  ? "Concept artwork depicting the Personal Journal Analyzer, not its actual CLI interface"
                  : project.slug === "codepilot-ai"
                    ? "Illustrative CodePilot AI workspace concept artwork, not a verified application screenshot"
                    : `${project.title} project screenshot`
              }
              width={
                project.slug === "falleye"
                  ? 1643
                  : project.slug === "doculens"
                    ? 801
                    : project.slug === "personal-journal-analyzer"
                      ? 1200
                      : project.slug === "codepilot-ai"
                        ? 1365
                      : 816
              }
              height={
                project.slug === "falleye"
                  ? 477
                  : project.slug === "personal-journal-analyzer"
                    ? 675
                    : project.slug === "codepilot-ai"
                      ? 768
                    : 412
              }
              sizes="(max-width: 700px) calc(100vw - 32px), 1160px"
            />
            {project.slug === "personal-journal-analyzer" && (
              <figcaption>
                Concept artwork, not an actual dashboard or product screenshot.
                The project is CLI-based; the example responses, dates, mood
                scores, and entry counts shown are illustrative, not measured
                product data. Embeddings and journal storage are local, but
                retrieved excerpts are sent to Claude for answers, so this is
                not fully offline or zero-network.
              </figcaption>
            )}
            {project.slug === "codepilot-ai" && (
              <figcaption>
                Illustrative cover artwork, not a verified screenshot of the
                application interface.
              </figcaption>
            )}
          </figure>
        ) : (
          <p>
            {project.slug === "codepilot-ai"
              ? "No product screenshot is provided; see the illustrative workspace animation above."
              : "No project screenshot is available."}
          </p>
        )}
      </section>

      <section className="case-study-section related-projects" aria-labelledby="related-title">
        <h2 id="related-title">Related projects</h2>
        <div className="related-projects-grid">
          {relatedProjects.map((related) => (
            <Link
              key={related.slug}
              href={`/projects/${related.slug}`}
              className="related-project-card"
            >
              <span>{related.number} / {related.category}</span>
              <h3>{related.title}</h3>
              <p>{related.subtitle}</p>
              <small>{related.tags.slice(0, 3).join(" · ")}</small>
            </Link>
          ))}
        </div>
      </section>

      <div className="case-study-links">
        {project.githubUrl ? (
          <a href={project.githubUrl} target="_blank" rel="noreferrer">
            Source repository <ArrowUpRight size={15} />
          </a>
        ) : (
          <p>Repository coming soon</p>
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
