import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GlobalLighting } from "@/components/global-lighting";
import { Navbar } from "@/components/navbar";
import { ProjectCaseStudy } from "@/components/project-case-study";
import { Footer } from "@/components/footer";
import { AiAssistant } from "@/components/ai-assistant";
import { getProjectBySlug, projects } from "@/lib/projects";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Project not found | Sooraj Nadarajan" };
  }

  return {
    title: `${project.title} | Sooraj Nadarajan`,
    description: project.description,
    openGraph: {
      title: `${project.title} | Sooraj Nadarajan`,
      description: project.description,
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  return (
    <>
      <GlobalLighting />
      <Navbar />
      <ProjectCaseStudy project={project} />
      <Footer />
      <AiAssistant />
    </>
  );
}
