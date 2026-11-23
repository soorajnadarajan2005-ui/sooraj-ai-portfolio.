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
  tagline?: string;
  highlights?: string[];
  caseStudy?: {
    overview: string;
    solution: string;
    howItWorks: { title: string; description: string }[];
    privacy: string[];
    architectureNote?: string;
  };
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
    challenges:
      "Reliable pose tracking is sensitive to camera angle, lighting, occlusion, and motion blur. Alert logic must avoid repeated notifications.",
    testing:
      "The repository contains a running Flask prototype, but no published benchmark or measured accuracy dataset is included.",
    future:
      "Evaluate against representative footage, improve detection robustness, and test alert delivery.",
  },
  {
    slug: "doculens",
    number: "02",
    title: "DocuMind",
    category: "Generative AI / Retrieval-Augmented Generation",
    subtitle: "Multi-Format RAG Chatbot",
    description:
      "A document question-answering application that retrieves relevant source context to ground generated answers.",
    tags: ["Python", "FastAPI", "RAG", "Embeddings", "FAISS", "LLMs"],
    image: "/project-media/documind.png",
    githubUrl: "https://github.com/soorajnadarajan2005-ui/DocuMind-.git",
    sourceNote:
      "The linked source repository is named DocuMind and documents a FAISS-based PDF workflow. ChromaDB and multi-format ingestion are not verified in that repository.",
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
    challenges:
      "Document quality, chunk boundaries, embedding performance, and local Ollama availability can affect retrieval and answer quality.",
    testing:
      "No published evaluation dataset or answer-quality benchmark is included in the repository.",
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
    challenges:
      "The CRM combines role-based authorization, record visibility, live notifications, document uploads, and operational workflows; these boundaries require consistent enforcement.",
    testing:
      "The repository includes backend API and business-logic tests, but no published usage benchmark or measured results are included.",
    future:
      "Document validated workflow behavior and identify further improvements from the source implementation.",
  },
  {
    slug: "personal-journal-analyzer",
    number: "04",
    title: "Personal Journal Analyzer",
    category: "Generative AI | NLP | Retrieval-Augmented Generation",
    subtitle: "Private AI Memory & Semantic Journal Search",
    tagline: "Ask your journal. Understand your journey.",
    description:
      "Ask natural-language questions about your journal entries and uncover meaningful memories, patterns and events using semantic retrieval and grounded AI responses with date citations.",
    tags: [
      "Python",
      "Retrieval-Augmented Generation (RAG)",
      "Anthropic Claude API",
      "Sentence Transformers",
      "Embeddings",
      "Semantic Search",
      "SQLite",
      "NLP",
      "Markdown Processing",
    ],
    highlights: [
      "Semantic journal search",
      "Date-cited answers",
      "Local embedding generation",
      "Context-grounded responses",
      "Mood and topic tagging",
      "Private journal storage",
    ],
    architecture: [
      "Markdown Journal Files",
      "Ingestion",
      "Text Processing & Chunking",
      "Local Embeddings",
      "SQLite Storage",
      "Semantic Retrieval",
      "Relevant Context",
      "Claude API",
      "Grounded Answer + Date Citations",
    ],
    image: "/project-media/personal-journal-analyzer-concept.png",
    sourceNote:
      "Concept artwork only—not a screenshot of the CLI application. The dashboard elements, sample responses, dates, mood scores, and entry counts shown are illustrative. Embeddings and journal storage are local, but retrieved excerpts are sent to Claude; AI answers and tagging require network API calls.",
    problem:
      "Personal journals contain valuable experiences, thoughts and events, but reviewing hundreds of entries to answer specific questions is difficult.",
    objective:
      "Make journal memories easier to find by retrieving semantically relevant entries and grounding answers in their source text.",
    implementation:
      "The CLI-based workflow ingests dated Markdown entries, chunks their text, generates embeddings locally with Sentence Transformers, stores journal data in SQLite, and retrieves relevant chunks for a Claude-powered response with source dates. It also supports mood and topic tagging.",
    result:
      "A privacy-conscious journal question-answering workflow that returns context-grounded responses with relevant entry dates and citations. No benchmark or measured answer-quality results are claimed.",
    challenges:
      "The implementation must retrieve relevant memories beyond exact keyword matches, choose useful chunk boundaries, keep supplied context focused, ground generated answers in retrieved text, attribute answers to source dates and entries, and handle private journal data carefully.",
    testing:
      "No published retrieval benchmark, answer-quality evaluation, or performance measurements are provided.",
    future:
      "Evaluate retrieval relevance and citation quality on a representative journal corpus without publishing private entry content.",
    caseStudy: {
      overview:
        "Personal Journal Analyzer turns a collection of dated Markdown files into a searchable personal memory system. Users ask questions through a CLI and receive answers grounded in relevant journal passages and their dates.",
      solution:
        "A semantic search and retrieval-augmented generation pipeline finds relevant journal chunks and passes only those excerpts, alongside the question, to Claude for a contextual response.",
      howItWorks: [
        {
          title: "Ingestion",
          description:
            "Read Markdown journal entries and extract their dates, filenames and content.",
        },
        {
          title: "Embedding",
          description:
            "Generate vector representations locally using Sentence Transformers.",
        },
        {
          title: "Retrieval",
          description:
            "Search for semantically relevant journal chunks based on the user's question.",
        },
        {
          title: "Generation",
          description:
            "Send the question and retrieved context to the Claude API.",
        },
        {
          title: "Grounding",
          description:
            "Generate an answer from the retrieved entries and include dates and source references.",
        },
      ],
      privacy: [
        "Embeddings are generated locally.",
        "Journal entries are stored in a local SQLite database.",
        "The entire journal is not sent to Claude; retrieved excerpts are sent when generating answers.",
        "Claude-powered answers and tagging require API calls and network access.",
      ],
    },
  },
  {
    slug: "codepilot-ai",
    number: "05",
    title: "CodePilot AI",
    category: "AI Engineering | Developer Tools | Local LLM | RAG",
    subtitle: "Local AI Software Engineering Workspace",
    tagline: "Understand your codebase. Build with intelligence.",
    description:
      "A local-first AI engineering environment that combines code intelligence, semantic repository search, local LLM chat and approval-based code fix workflows.",
    tags: [
      "Python",
      "FastAPI",
      "React",
      "TypeScript",
      "Ollama",
      "RAG",
      "Qdrant",
      "Docker",
    ],
    highlights: [
      "Repository Intelligence",
      "Semantic Code Search",
      "Local LLM Assistant",
      "Source-Grounded Answers",
      "AI Code Fix Review",
      "Approval-Based Patch Application",
    ],
    image: "/project-media/codepilot-ai.png",
    architecture: [
      "Repository",
      "File Scanner",
      "Tree-Sitter / AST Parsing",
      "Code Intelligence Database",
      "Chunking",
      "Sentence Transformers",
      "Qdrant Vector Index",
      "Semantic Retrieval",
      "Context Assembly",
      "Ollama Local LLM",
      "Grounded Answer / Proposed Code Fix",
      "Human Review & Approval",
    ],
    problem:
      "Developers working with large or unfamiliar repositories can spend considerable time locating relevant files, understanding code relationships, searching across source files, and investigating errors. Keyword search may miss relevant code when the developer knows the concept but not the exact terminology.",
    objective:
      "Bring repository exploration, structural code understanding, semantic retrieval, local-model chat, and reviewable code-fix proposals into one local-first workspace.",
    implementation:
      "The workspace combines a FastAPI backend with a React and TypeScript interface, Monaco Editor, PostgreSQL, Redis, Qdrant, and Docker Compose. Repository tooling supports local selection, a browsable file tree, safe ZIP upload, public GitHub import, and optional authorized GitHub access. Ollama provides locally hosted model options; proposed code changes are reviewed as diffs and require explicit approval before application.",
    result:
      "A single-user, local-first engineering workspace concept for repository understanding and approval-gated AI assistance. No autonomous repository execution, measured performance, or benchmark results are claimed.",
    challenges:
      "Key engineering challenges include parsing different programming languages, keeping repository indexes incremental, retrieving semantically useful code, managing context-window limits, integrating local models, streaming responses, reviewing safe patches, verifying file integrity, and protecting rollback paths.",
    testing:
      "No published benchmark or measured evaluation results are provided. The workflow is designed around local repository inspection and explicit review rather than autonomous code execution.",
    future:
      "Evaluate retrieval quality, supported-language coverage, and patch-integrity handling on representative repositories without exposing source code or secrets.",
    caseStudy: {
      overview:
        "CodePilot AI is a local-first AI software engineering workspace built to make repository exploration, source-code understanding, semantic search, and AI-assisted code investigation more efficient.",
      solution:
        "CodePilot combines structural code analysis, locally generated semantic embeddings, retrieval from a repository-aware vector index, and locally hosted LLMs. The developer can inspect retrieved sources, ask context-grounded questions, and review proposed fixes before choosing whether to apply them.",
      architectureNote:
        "Illustrative data flow: individual actions use only the stages relevant to that request; not every request passes through every stage.",
      howItWorks: [
        {
          title: "Repository workspace",
          description:
            "Select a local repository, explore its file tree, and navigate or read source files. Repository intake also supports safe ZIP upload and public GitHub import, with optional authorized GitHub repository integration.",
        },
        {
          title: "Code intelligence",
          description:
            "Scan source files and use Tree-Sitter / AST parsing to discover functions, classes, imports, dependencies, entry-point summaries, and code relationships for structural exploration and source navigation.",
        },
        {
          title: "Semantic code search",
          description:
            "Generate embeddings locally with Sentence Transformers, index repository-aware code chunks in Qdrant, and retrieve relevant source by meaning rather than exact keyword alone. Incremental indexing updates changed repository content.",
        },
        {
          title: "Local AI assistant",
          description:
            "Choose a locally hosted Ollama model and ask repository-aware questions. Retrieved source is assembled as context for grounded answers, source references include line ranges, and responses can stream to the interface.",
        },
        {
          title: "Approval-gated code fix",
          description:
            "Submit a bug report, optional stack trace, and source-file selection to receive a proposed fix plan and unified diff. The developer reviews the changes and explicitly approves before the application writes them.",
        },
        {
          title: "Developer infrastructure",
          description:
            "A FastAPI backend and React / TypeScript frontend use Monaco Editor alongside PostgreSQL, Redis, Qdrant, and Docker Compose for the local workspace.",
        },
      ],
      privacy: [
        "Designed as a local-first, single-user workspace; it is not currently a public multi-user service.",
        "Do not expose the backend to the public internet.",
        "Applying a proposed code patch requires explicit user approval; the system does not automatically execute repository code.",
        "File hash validation checks that selected files have not changed before applying a reviewed patch.",
        "Create a backup before applying changes and retain rollback protection.",
        "Restrict file access to the selected workspace and redact secrets from relevant context.",
      ],
    },
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getRelatedProjects(project: Project, limit = 3) {
  const projectTags = new Set(project.tags.map((tag) => tag.toLowerCase()));
  const sharedTagCount = (candidate: Project) =>
    candidate.tags.filter((tag) => projectTags.has(tag.toLowerCase())).length;

  return projects
    .filter((candidate) => candidate.slug !== project.slug)
    .sort((first, second) => sharedTagCount(second) - sharedTagCount(first))
    .slice(0, limit);
}
