# Sooraj AI Portfolio

 AI/ML Engineer portfolio built with Next.js, TypeScript, Tailwind CSS, Motion and Lucide.

## 1. Install

```bash
npm install
```

## 2. Run locally

```bash
npm run dev
```

Open http://localhost:3000

## 3. Customize

Main personal content is inside:

- `components/hero.tsx`
- `components/about.tsx`
- `components/skills.tsx`
- `components/projects.tsx`
- `components/contact.tsx`

Update:
- email
- LinkedIn URL
- GitHub repositories
- project demo URLs
- resume link
- project descriptions

## 4. Add your resume

Create:

`public/Sooraj-Nadarajan-Resume.pdf`

Then add a resume/download button pointing to `/Sooraj-Nadarajan-Resume.pdf`.

## 5. GitHub

```bash
git init
git add .
git commit -m "Initial AI portfolio"
git branch -M main
git remote add origin YOUR_GITHUB_REPOSITORY_URL
git push -u origin main
```

## 6. Deploy to Vercel

1. Push the project to GitHub.
2. Sign in to Vercel.
3. Import the GitHub repository.
4. Keep the default Next.js settings.
5. Click Deploy.

Every later push to the connected branch can trigger a new deployment.

## 7. Optional AI API

The included `Ask Sooraj AI` works locally without an API key using portfolio data.

If you later want a real LLM/RAG assistant, add an API route using your preferred AI SDK/provider and put secrets only in Vercel Environment Variables. Never commit API keys to GitHub.
