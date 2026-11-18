export type Project = {
  slug: string;
  number: string;
  title: string;
  category: string;
  subtitle: string;
  description: string;
  tags: string[];
  architecture: string[];
  image?: string;
  problem: string;
  objective: string;
  implementation: string;
  result: string;
  challenges: string;
  testing: string;
  future: string;
  sourceNote?: string;
  githubUrl?: string;
  demoUrl?: string;
};

const verificationPlaceholder =
  "Add verified implementation details and evidence from the source project before publishing.";

export const projects: Project[] = [
  {
    slug: "falleye",
    number: "01",
    title: "FallEye",
    category: "Computer Vision / AI Application",
    subtitle: "Elderly Fall Detection System",
    description:
      "A vision-based fall detection prototype that analyzes camera input and surfaces potential fall alerts through a safety dashboard.",
    tags: ["Python", "Flask", "OpenCV", "MediaPipe", "Computer Vision"],
    architecture: ["Camera input", "Pose landmarks", "Fall detection", "Dashboard alert"],
    image: "/project-media/falleye.png",
    githubUrl: "https://github.com/soorajnadarajan2005-ui/Fall_Eye-Elderly-Fall-Detection-System.git",
    problem:
      "A potential fall may go unnoticed when an older adult is alone and unable to call for help.",
    objective:
      "Explore a camera-based approach to identify potential falls and present alerts in a safety dashboard.",
    implementation:
      "The current portfolio summary describes a Python and Flask prototype using OpenCV and MediaPipe for vision-based pose analysis, with a dashboard for alerts.",
    result:
      "A prototype concept for visual fall detection and alert presentation. It is not a certified medical monitoring system, and no accuracy figures are claimed.",
    challenges: verificationPlaceholder,
    testing:
      "No dataset, benchmark, or measured evaluation results were provided. Add verified evaluation conditions and results from the source project.",
    future:
      "Evaluate against representative footage, improve detection robustness, and test alert delivery.",
  },
  {
    slug: "documind",
    number: "02",
    title: "DocuMind",
    category: "Generative AI / Retrieval-Augmented Generation",
    subtitle: "PDF Intelligence / RAG Chatbot",
    description:
      "A PDF question-answering application that uses retrieved document context to ground generated answers.",
    tags: ["Python", "FastAPI", "RAG", "Embeddings", "FAISS", "LLMs"],
    image: "/project-media/documind.png",
    githubUrl: "https://github.com/soorajnadarajan2005-ui/DocuMind-.git",
    architecture: [
      "PDF upload",
      "Text extraction",
      "Chunking",
      "Embeddings",
      "Vector search",
      "Context retrieval",
      "LLM response",
    ],
    problem:
      "Finding specific information in long documents can require time-consuming manual searching.",
    objective:
      "Answer questions using relevant information retrieved from uploaded PDF content.",
    implementation:
      "The portfolio summary describes a RAG pipeline that extracts PDF text, splits it into chunks, creates embeddings, searches with FAISS, retrieves context, and generates an answer using an LLM.",
    result:
      "A document question-answering workflow intended to keep responses grounded in retrieved PDF content.",
    challenges: verificationPlaceholder,
    testing:
      "No evaluation dataset or measured answer-quality results were provided. Add verified test cases and evaluation results from the source project.",
    future:
      "Add verified source citations and evaluate retrieval and answer quality against representative documents.",
  },
  {
    slug: "nexus-crm",
    number: "03",
    title: "NEXUS CRM",
    category: "Customer Relationship / Operations Platform",
    subtitle: "Customer Relationship & Operations Management Platform",
    description:
      "A full-stack CRM platform for customer interactions, sales leads, support tickets, and business operations.",
    tags: [
      "React",
      "Python",
      "Flask",
      "PostgreSQL",
      "Supabase",
      "SQLAlchemy",
      "Socket.IO",
      "JWT",
      "Tailwind CSS",
      "Docker",
    ],
    image: "/project-media/nexus-crm.png",
    githubUrl: "https://github.com/soorajnadarajan2005-ui/NEXUS-CRM.git",
    architecture: [
      "React dashboards",
      "Flask REST APIs",
      "JWT and role-based access",
      "Supabase PostgreSQL",
      "Socket.IO notifications",
    ],
    problem:
      "Customer interactions, sales leads, and support tickets need coordinated tracking across business operations.",
    objective:
      "Centralize customer, sales, support, and administrative workflows in a role-aware CRM.",
    implementation:
      "The supplied project brief describes Flask REST APIs, a responsive React frontend, PostgreSQL on Supabase accessed through SQLAlchemy, JWT authentication, role-based access control, ticket routing by category and priority, Socket.IO notifications, and lead conversion workflows.",
    result:
      "The supplied brief also describes administrative analytics and CSV, Excel, and PDF reporting. These details should be checked against the CRM source before publication.",
    challenges: verificationPlaceholder,
    testing:
      "No test strategy, dataset, or measured results were provided. Add verified tests and evaluation details from the source project.",
    future:
      "Document validated workflow behavior and identify further improvements from the source implementation.",
    sourceNote:
      "The CRM source repository was not included in this portfolio workspace. This summary is based on the project brief and should be verified against the implementation.",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
