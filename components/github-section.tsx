"use client";
import { ArrowUpRight, Github, GitBranch } from "lucide-react";
import { motion } from "motion/react";

export function GithubSection() {
  return <section id="github" className="section pt-8">
    <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.4 }} className="glass overflow-hidden rounded-3xl p-6 sm:p-9">
      <div className="grid gap-7 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <p className="section-kicker">06 / GitHub</p>
          <h2 className="section-title mt-3 text-3xl font-semibold sm:text-4xl">Build in public.</h2>
          <p className="muted mt-3 max-w-xl leading-7">Explore Sooraj&apos;s public profile for repositories, project code and ongoing experiments.</p>
          <div className="mt-5 inline-flex items-center gap-2 text-xs muted"><GitBranch size={15} className="text-[var(--accent)]" /> Project code and experiments</div>
        </div>
        <a href="https://github.com/soorajnadarajan2005-ui" target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[var(--foreground)] px-5 py-3 text-sm font-semibold text-[var(--background)] transition hover:-translate-y-0.5">
          <Github size={17} /> GitHub profile <ArrowUpRight size={15} />
        </a>
      </div>
    </motion.div>
  </section>;
}
