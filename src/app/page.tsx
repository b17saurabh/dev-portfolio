import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Philosophy from '@/components/Philosophy';
import Footer from '@/components/Footer';
import ThemeToggle from '@/components/ThemeToggle';

export default function Home() {
  return (
    <main className="engineering-bg min-h-screen text-[var(--text)]">
      <header className="fixed top-0 z-50 w-full border-b border-[var(--surface-line)] bg-[var(--surface)]/95 backdrop-blur">
        <nav className="portfolio-container flex h-16 items-center justify-between">
          <a href="#home" className="text-2xl font-extrabold tracking-[-0.02em] text-[var(--primary)]">
            Saurabh Batham
          </a>
          <div className="hidden items-center gap-8 font-mono text-xs font-semibold uppercase tracking-[0.05em] text-[var(--text-muted)] md:flex">
            <a className="transition hover:text-[var(--primary)]" href="#about">About</a>
            <a className="transition hover:text-[var(--primary)]" href="#skills">Skills</a>
            <a className="transition hover:text-[var(--primary)]" href="#experience">Experience</a>
            <a className="transition hover:text-[var(--primary)]" href="#projects">Projects</a>
            <a className="transition hover:text-[var(--primary)]" href="#philosophy">Philosophy</a>
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <a
              href="/resume"
              className="hidden px-4 py-2 font-mono text-xs font-semibold uppercase tracking-[0.05em] text-[var(--text-muted)] transition hover:text-[var(--primary)] md:block"
            >
              Resume
            </a>
            <a
              href="#contact"
              className="bg-[var(--primary)] px-6 py-2 font-mono text-xs font-semibold uppercase tracking-[0.05em] text-[var(--surface)] transition active:scale-95 md:px-8"
            >
              Contact
            </a>
          </div>
        </nav>
      </header>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Philosophy />
      <Contact />
      <Footer />
    </main>
  );
}
