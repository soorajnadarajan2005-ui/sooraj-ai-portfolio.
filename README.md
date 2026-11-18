# Sooraj AI Portfolio

Personal portfolio for Sooraj Nadarajan, an AI/ML Engineer and Python Developer. Built with Next.js, TypeScript, Tailwind CSS, Motion, and Lucide.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Featured projects

The portfolio features exactly three projects:

- FallEye — computer-vision fall detection prototype.
- DocuMind — PDF question-answering application using RAG.
- NEXUS CRM — customer relationship and operations platform.

Each project has a case-study page at `/projects/<project-slug>`. Implementation notes that could not be verified from this portfolio workspace are explicitly marked for confirmation.

## Personal content

Edit the components in `components/` to update the profile, skills, projects, experience, education, and contact details. Project content and case-study routes share data from `lib/projects.ts`.

The experience entry intentionally leaves dates and responsibilities for confirmation. The NEXUS CRM summary is based on the supplied project brief; its source repository was not included here. Replace marked placeholders with verified information before publishing.

## Resume

The current resume PDF is served from `public/Sooraj-Nadarajan-Resume.pdf`. Replace that file to update the open and download links.

## Contact form

The contact form uses `mailto:` and opens the visitor's email application. The site does not send or store form submissions. A real server-side form requires a configured delivery provider, server-only credentials, and spam protection before it can be presented as a working form.

## GitHub and social links

The profile-level GitHub and LinkedIn links are maintained in the relevant components. Individual project repository and demo URLs have not been supplied, so none are presented as verified links.

## Deploy

Build with `npm run build`, then deploy the Next.js application to a compatible host such as Vercel.
