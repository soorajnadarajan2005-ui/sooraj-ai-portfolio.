import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { AiDashboard } from "@/components/ai-dashboard";
import { Skills } from "@/components/skills";
import { Projects } from "@/components/projects";
import { Workflow } from "@/components/workflow";
import { Experience } from "@/components/experience";
import { Education } from "@/components/education";
import { GithubSection } from "@/components/github-section";
import { ResumeCta } from "@/components/resume-cta";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { AiAssistant } from "@/components/ai-assistant";
import { GlobalLighting } from "@/components/global-lighting";

export default function Home() {
  return (
    <>
      <GlobalLighting />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Workflow />
        <Experience />
        <Education />
        <GithubSection />
        <AiDashboard />
        <ResumeCta />
        <Contact />
      </main>
      <Footer />
      <AiAssistant />
    </>
  );
}
