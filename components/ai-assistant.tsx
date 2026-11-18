"use client";

import { FormEvent, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Send, Sparkles, X } from "lucide-react";

type Message = { role: "user" | "assistant"; text: string };

const suggestions = [
  "What projects has Sooraj built?",
  "What technologies does Sooraj use?",
  "Tell me about FallEye.",
  "Tell me about DocuLens.",
  "Tell me about NEXUS CRM.",
  "What did Sooraj study?",
  "Tell me about Sooraj's experience.",
  "How can I contact Sooraj?",
];

function answerQuestion(question: string) {
  const text = question.toLowerCase();

  if (/contact|email|reach/.test(text)) {
    return "You can email Sooraj at soorajnadarajan@gmail.com, connect on LinkedIn at linkedin.com/in/sooraj-nadarajan-8510273b3, or visit github.com/soorajnadarajan2005-ui.";
  }
  if (/falleye|fall detection|elder/.test(text)) {
    return "FallEye is a vision-based elderly fall detection system concept using Python, OpenCV, MediaPipe and Flask. It is designed to detect potential falls and surface alerts through a safety dashboard. No model accuracy figures are claimed.";
  }
  if (/doculens|documind|pdf|rag|document/.test(text)) {
    return "DocuLens is the portfolio name for the linked DocuMind repository: a FastAPI-based PDF question-answering application that extracts text, creates embeddings, searches with FAISS and uses retrieved context to ground answers.";
  }
  if (/nexus|crm|customer relationship|ticket routing|sales lead/.test(text)) {
    return "NEXUS CRM is a full-stack customer relationship platform with role-based React dashboards, Flask REST APIs, SQLAlchemy, Supabase PostgreSQL, ticket routing, sales leads, Socket.IO notifications and reporting workflows.";
  }
  if (/education|study|degree|university|college/.test(text)) {
    return "Sooraj completed a BSc in Information Technology through MG University in 2026 at Siena College of Professional Studies, Edakochi.";
  }
  if (/experience|intern|employment|work history/.test(text)) {
    return "Sooraj's listed experience is as an AI/ML Engineering Intern at Linnk Academy India. Dates and responsibilities have not been provided.";
  }
  if (/project|built|portfolio/.test(text)) {
    return "The portfolio features FallEye, DocuLens (linked to the DocuMind repository), and NEXUS CRM. Open Projects for the case studies.";
  }
  if (/skill|technolog|tool|stack/.test(text)) {
    return "Sooraj works with Python, JavaScript, TypeScript, Scikit-learn, Pandas, NumPy, RAG, embeddings, FAISS, FastAPI, Flask, React, PostgreSQL, Supabase, SQLAlchemy, Socket.IO, Docker and Git.";
  }
  if (/sooraj|about|engineer/.test(text)) {
    return "Sooraj Nadarajan is an AI/ML Engineer with an Information Technology background, focused on practical applications using machine learning, generative AI, LLMs, RAG and backend technologies.";
  }
  return "I can answer questions about Sooraj's background, education, experience, projects, technologies and contact details. These are predefined portfolio answers, not LLM-generated responses.";
}

export function AiAssistant() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", text: "Hi, I can help you explore Sooraj’s projects, skills and background." },
  ]);

  function sendMessage(question: string) {
    const value = question.trim();
    if (!value) return;
    setMessages(current => [...current, { role: "user", text: value }, { role: "assistant", text: answerQuestion(value) }]);
    setInput("");
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    sendMessage(input);
  }

  return (
    <>
      <button type="button" onClick={() => setOpen(value => !value)} aria-label={open ? "Close assistant" : "Ask Sooraj AI"} aria-expanded={open} aria-controls="sooraj-assistant" className="ai-assistant-button fixed right-4 top-1/2 z-40 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center gap-2 rounded-full border border-blue-300/25 bg-[#0d192a]/95 p-0 text-sm font-semibold text-white shadow-xl shadow-blue-950/30 backdrop-blur-xl transition hover:border-blue-300/55 sm:right-6 sm:h-auto sm:w-auto sm:min-h-12 sm:justify-start sm:px-4 sm:py-3 max-sm:bottom-4 max-sm:top-auto max-sm:translate-y-0">
        <span className="relative flex h-5 w-5 items-center justify-center rounded-full bg-[radial-gradient(circle,_rgba(255,255,255,0.95),_rgba(96,165,250,0.8)_35%,_rgba(86,102,255,0.25)_65%,_rgba(15,23,42,0)_100%)] shadow-[0_0_18px_rgba(88,166,255,0.4)]">
          {open ? <X size={12} /> : <Sparkles size={12} className="text-sky-300" />}
        </span>
        <span className="hidden sm:inline">{open ? "Close assistant" : "Ask Sooraj AI"}</span>
      </button>

      <AnimatePresence>
        {open && <motion.section id="sooraj-assistant" role="dialog" aria-label="Ask Sooraj AI" initial={{ opacity: 0, x: 12, scale: 0.98 }} animate={{ opacity: 1, x: 0, scale: 1 }} exit={{ opacity: 0, x: 8, scale: 0.98 }} transition={{ duration: 0.2 }} className="fixed right-20 top-1/2 z-40 flex max-h-[min(620px,calc(100dvh-3rem))] w-[min(390px,calc(100vw-7rem))] -translate-y-1/2 flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--background)] shadow-2xl shadow-black/40 sm:right-24 max-sm:bottom-20 max-sm:right-3 max-sm:top-auto max-sm:w-[min(390px,calc(100vw-24px))] max-sm:translate-y-0">
          <header className="flex items-center justify-between border-b border-[var(--border)] bg-[var(--surface)] px-4 py-3.5">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--accent)]/10 text-[var(--accent)]"><Sparkles size={17} /></span>
              <div><h2 className="text-sm font-semibold">Ask Sooraj AI</h2><p className="text-[11px] muted">Portfolio answers · No LLM connected</p></div>
            </div>
            <button type="button" onClick={() => setOpen(false)} aria-label="Close assistant" className="rounded-lg p-2 muted hover:text-[var(--foreground)]"><X size={16} /></button>
          </header>

          <div className="min-h-0 flex-1 space-y-3 overflow-y-auto p-4" aria-live="polite">
            {messages.map((message, index) => <div key={`${message.role}-${index}`} className={`max-w-[92%] rounded-2xl px-3.5 py-2.5 text-xs leading-5 ${message.role === "user" ? "ml-auto bg-[var(--accent-strong)] text-white" : "border border-[var(--border)] bg-[var(--surface)]"}`}>{message.text}</div>)}
            {messages.length === 1 && <div className="space-y-2 pt-1">
              <p className="text-[10px] font-semibold uppercase tracking-[.12em] muted">Suggested questions</p>
              {suggestions.map(question => <button type="button" key={question} onClick={() => sendMessage(question)} className="block w-full rounded-lg border border-[var(--border)] px-3 py-2 text-left text-[11px] leading-4 muted transition hover:border-[var(--accent)] hover:text-[var(--foreground)]">{question}</button>)}
            </div>}
          </div>

          <form onSubmit={handleSubmit} className="flex items-center gap-2 border-t border-[var(--border)] p-3">
            <label className="sr-only" htmlFor="assistant-question">Ask about Sooraj</label>
            <input id="assistant-question" value={input} onChange={event => setInput(event.target.value)} placeholder="Ask about projects or skills" className="h-10 min-w-0 flex-1 rounded-lg border border-[var(--border)] bg-[var(--surface)] px-3 text-xs outline-none placeholder:text-[var(--muted)] focus:border-[var(--accent)]" />
            <button type="submit" aria-label="Send question" disabled={!input.trim()} className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--accent-strong)] text-white transition enabled:hover:bg-[var(--accent)] disabled:opacity-40"><Send size={15} /></button>
          </form>
        </motion.section>}
      </AnimatePresence>
    </>
  );
}
