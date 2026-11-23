# Sooraj AI Portfolio

Personal portfolio for Sooraj Nadarajan, an AI/ML Engineer and Python Developer. Built with Next.js, TypeScript, Tailwind CSS, Motion, and Lucide.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Featured projects

The portfolio features exactly five projects:

- FallEye — computer-vision fall detection prototype.
- DocuMind — PDF question-answering application using RAG.
- NEXUS CRM — customer relationship and operations platform.
- Personal Journal Analyzer — CLI-based private journal search and RAG question answering with date citations.
- CodePilot AI — local-first software engineering workspace with semantic code search, local LLM chat, and approval-gated code fixes.

Each project has a case-study page at `/projects/<project-slug>`. Project summaries distinguish implemented workflows from capabilities that have not yet been measured or verified publicly. Personal Journal Analyzer has no verified repository link yet.

## Personal content

Edit the components in `components/` to update the profile, skills, projects, experience, education, and contact details. Project content and case-study routes share data from `lib/projects.ts`.

The experience entry intentionally leaves dates and responsibilities for confirmation.

## Resume

The current resume PDF is served from `public/Sooraj-Nadarajan-Resume.pdf`. Replace that file to update the open and download links.

## Contact form

The contact form uses `mailto:` and opens the visitor's email application. The site does not send or store form submissions. A real server-side form requires a configured delivery provider, server-only credentials, and spam protection before it can be presented as a working form.

## GitHub and social links

The profile-level GitHub and LinkedIn links are maintained in the relevant components. Project source links are shown only when configured.

## Deploy

Build with `npm run build`, then deploy the Next.js application to a compatible host such as Vercel.
