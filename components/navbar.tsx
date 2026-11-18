"use client";

import { AnimatePresence, motion } from "motion/react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useTheme } from "./theme-provider";

const links = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "GitHub", href: "#github" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("top");
  const pathname = usePathname();
  const { theme, toggle } = useTheme();
  const systemStatus = active === "projects" ? "BUILD MODE" : active === "contact" || active === "resume" ? "READY" : "ONLINE";
  const sectionHref = (href: string) => pathname === "/" ? href : `/${href}`;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    const sections = document.querySelectorAll("main section[id]");
    const observer = new IntersectionObserver(entries => {
      const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActive(visible.target.id);
    }, { rootMargin: "-25% 0px -60% 0px", threshold: [0, 0.2, 0.5] });
    sections.forEach(section => observer.observe(section));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const ThemeButton = () => (
    <button onClick={toggle} aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`} className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--surface)]/70 text-[var(--muted)] transition hover:text-[var(--foreground)]">
      {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );

  return (
    <header className="fixed top-0 z-50 w-full px-5">
      <nav className={`mx-auto flex max-w-[1160px] items-center justify-between border-b py-4 transition-all duration-300 ${scrolled ? "border-[var(--border)] bg-[var(--background)]/92 backdrop-blur-md" : "border-transparent bg-transparent"}`} aria-label="Main navigation">
        <a href={sectionHref("#top")} onClick={() => setActive("top")} className="shrink-0">
          <span className="block text-[11px] font-semibold uppercase tracking-[.08em]">Sooraj Nadarajan</span>
          <span className="mt-1 block font-mono text-[9px] uppercase tracking-[.08em] muted">AI / ML Engineer</span>
        </a>

        <div className="hidden items-center gap-4 xl:flex">
          {links.map(({ label, href }) => (
            <a key={href} href={sectionHref(href)} onClick={() => setActive(href.slice(1))} aria-current={active === href.slice(1) ? "location" : undefined} className={`main-nav-link text-[10px] font-medium uppercase tracking-[.08em] transition ${active === href.slice(1) ? "text-[var(--foreground)]" : "muted hover:text-[var(--foreground)]"}`}>
              {label}
            </a>
          ))}
          <ThemeButton />
          <span className="system-status">SYSTEM {systemStatus}</span>
        </div>

        <div className="flex items-center gap-2 xl:hidden">
          <ThemeButton />
          <button onClick={() => setOpen(value => !value)} aria-label={open ? "Close navigation menu" : "Open navigation menu"} aria-expanded={open} aria-controls="mobile-navigation" className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--surface)]/70 text-[var(--muted)]">
            {open ? <X size={17} /> : <Menu size={17} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && <motion.div id="mobile-navigation" initial={{ opacity: 0, y: -8, height: 0 }} animate={{ opacity: 1, y: 0, height: "auto" }} exit={{ opacity: 0, y: -8, height: 0 }} transition={{ duration: 0.2 }} className="mx-auto max-w-[1160px] border-b border-[var(--border)] bg-[var(--background)] pb-3 xl:hidden">
          {links.map(({ label, href }) => <a key={href} href={sectionHref(href)} onClick={() => { setOpen(false); setActive(href.slice(1)); }} aria-current={active === href.slice(1) ? "location" : undefined} className={`flex min-h-11 items-center border-b border-[var(--border)] text-xs uppercase tracking-[.08em] transition ${active === href.slice(1) ? "text-[var(--foreground)]" : "muted hover:text-[var(--foreground)]"}`}>{label}</a>)}
          <p className="system-status mt-4">SYSTEM {systemStatus}</p>
        </motion.div>}
      </AnimatePresence>
    </header>
  );
}
