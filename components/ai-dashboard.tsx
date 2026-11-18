"use client";

import { FormEvent, useState } from "react";
import { motion } from "motion/react";

type TerminalEntry = { command: string; response: string };

const commandResponses: Record<string, string> = {
  help: "Available commands: about, projects, skills, experience, education, github, contact, whoami, clear",
  about: "Sooraj Nadarajan — BSc IT graduate building a career around AI and machine learning.",
  projects: "FallEye — vision-based fall detection.\nDocuMind — document intelligence with RAG.\nNEXUS CRM — customer relationship and operations platform.",
  skills: "Python · JavaScript · TypeScript · Scikit-learn · Pandas · NumPy · RAG · Embeddings · FastAPI · Flask · React · PostgreSQL · Supabase · SQLAlchemy · Socket.IO · Docker · Git",
  experience: "AI/ML Engineering Intern — Linnk Academy India. Dates and responsibilities have not been provided.",
  education: "BSc Information Technology — MG University, 2026. Siena College of Professional Studies, Edakochi.",
  github: "GitHub: github.com/soorajnadarajan2005-ui",
  contact: "Email: soorajnadarajan@gmail.com · LinkedIn: linkedin.com/in/sooraj-nadarajan-8510273b3",
  whoami: "Sooraj Nadarajan — AI / ML Engineer",
};

export function AiDashboard() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<TerminalEntry[]>([]);

  function runCommand(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const command = input.trim().toLowerCase();
    if (!command) return;
    setInput("");
    if (command === "clear") {
      setHistory([]);
      return;
    }
    setHistory(current => [...current, { command, response: commandResponses[command] ?? `Command not found: ${command}. Type help to see available commands.` }].slice(-8));
  }

  return (
    <section id="dashboard" className="section pt-0">
      <div className="grid gap-8 lg:grid-cols-[.7fr_1.3fr] lg:items-end">
        <div>
          <p className="section-kicker">Portfolio terminal</p>
          <h2 className="section-title mt-4 text-4xl sm:text-5xl">SOORAJ.AI</h2>
          <p className="muted mt-4 max-w-sm leading-7">A deterministic portfolio terminal for exploring verified profile data. It does not connect to an LLM.</p>
          <p className="system-status mt-5">SYSTEM ONLINE</p>
        </div>
        <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.55 }} className="terminal-panel">
          <div className="terminal-output" aria-live="polite">
            {history.length === 0 ? <p>Type <span className="text-[var(--accent)]">help</span> to explore.</p> : history.map((entry, index) => <p key={`${entry.command}-${index}`}><span className="text-[var(--foreground)]">$ {entry.command}</span><br />{entry.response}</p>)}
          </div>
          <form onSubmit={runCommand} className="terminal-form">
            <label htmlFor="portfolio-terminal">$</label>
            <input id="portfolio-terminal" value={input} onChange={event => setInput(event.target.value)} aria-label="Terminal command" autoComplete="off" spellCheck={false} placeholder="type a command" />
          </form>
        </motion.div>
      </div>
    </section>
  );
}
