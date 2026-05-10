import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8f9fa] text-[#191c1d]">
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-[#f8f9fa]/95 backdrop-blur">
        <nav className="portfolio-container flex h-16 items-center justify-between">
          <a href="#home" className="font-mono text-sm font-bold uppercase tracking-[0.14em] text-gray-950">
            SB
          </a>
          <div className="hidden items-center gap-6 font-mono text-xs font-semibold uppercase tracking-[0.12em] text-gray-600 md:flex">
            <a className="transition hover:text-gray-950" href="#about">About</a>
            <a className="transition hover:text-gray-950" href="#skills">Skills</a>
            <a className="transition hover:text-gray-950" href="#experience">Experience</a>
            <a className="transition hover:text-gray-950" href="#projects">Projects</a>
            <a className="transition hover:text-gray-950" href="#contact">Contact</a>
          </div>
          <a
            href="/resume"
            className="rounded border border-gray-900 px-3 py-2 font-mono text-xs font-semibold uppercase tracking-[0.12em] text-gray-950 transition hover:bg-gray-950 hover:text-white"
          >
            Resume
          </a>
        </nav>
      </header>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}
