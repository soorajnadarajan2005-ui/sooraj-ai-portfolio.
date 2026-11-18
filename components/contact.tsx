"use client";
import { FormEvent, useState } from "react";
import { Send } from "lucide-react";
import { motion } from "motion/react";

export function Contact() {
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();
    const formSubject = String(form.get("subject") ?? "").trim();
    const subject = encodeURIComponent(formSubject || `Portfolio contact from ${name}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name}\nEmail: ${email}`);
    window.location.href = `mailto:soorajnadarajan@gmail.com?subject=${subject}&body=${body}`;
    setStatus("This opens your email app; the site does not send or store this message.");
  }

  return <section id="contact" className="section">
    <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="grid gap-12 lg:grid-cols-[1.15fr_.85fr] lg:gap-20">
      <div className="pt-2">
        <p className="section-kicker">09 / Contact</p>
        <h2 className="contact-title mt-5">LET&apos;S<br />BUILD SOMETHING<br />INTELLIGENT.</h2>
        <p className="muted mt-6 max-w-md leading-7">Have an idea? Let&apos;s turn it into a system.</p>
        <p className="muted mt-3 text-sm">Kochi, Kerala, India</p>
        <nav className="contact-links" aria-label="Contact links">
          <a href="mailto:soorajnadarajan@gmail.com">Email me ↗</a>
          <a href="https://www.linkedin.com/in/sooraj-nadarajan-8510273b3/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <a href="https://github.com/soorajnadarajan2005-ui" target="_blank" rel="noreferrer">GitHub ↗</a>
        </nav>
        <p className="muted mt-5 max-w-md text-xs leading-6">No contact backend is configured. The form opens your email client; server-side delivery and spam protection require a configured form service.</p>
      </div>

      <form onSubmit={handleSubmit} className="contact-form">
        <p className="section-kicker mb-5">Or send a message</p>
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="grid gap-2 text-xs font-medium">Name<input name="name" autoComplete="name" required maxLength={100} className="h-11 rounded-lg border border-[var(--border)] bg-[var(--surface)] px-3 text-sm outline-none transition focus:border-[var(--accent)]" /></label>
          <label className="grid gap-2 text-xs font-medium">Email<input name="email" type="email" autoComplete="email" required maxLength={254} className="h-11 rounded-lg border border-[var(--border)] bg-[var(--surface)] px-3 text-sm outline-none transition focus:border-[var(--accent)]" /></label>
        </div>
        <label className="mt-4 grid gap-2 text-xs font-medium">Subject<input name="subject" required maxLength={160} className="h-11 rounded-lg border border-[var(--border)] bg-[var(--surface)] px-3 text-sm outline-none transition focus:border-[var(--accent)]" /></label>
        <label className="mt-4 grid gap-2 text-xs font-medium">Message<textarea name="message" required minLength={4} maxLength={3000} rows={5} className="resize-y rounded-lg border border-[var(--border)] bg-[var(--surface)] px-3 py-3 text-sm outline-none transition focus:border-[var(--accent)]" /></label>
        <div className="mt-4 flex flex-wrap items-center gap-4">
          <button type="submit" className="hero-link">Send message <Send size={15} /></button>
          <p role="status" aria-live="polite" className="text-xs muted">{status}</p>
        </div>
      </form>
    </motion.div>
  </section>;
}
