'use client';

import { motion } from 'framer-motion';

const principles = [
  'Design backend architectures that stay reliable under operational pressure.',
  'Optimize API, database, and infrastructure paths where users actually feel the impact.',
  'Collaborate across product, frontend, DevOps, and business workflows to ship practical solutions.',
];

export default function About() {
  return (
    <section id="about" className="section-shell border-b border-[var(--surface-line)]">
      <div className="portfolio-container grid gap-12 lg:grid-cols-[1fr_1.25fr]">
        <div>
          <p className="section-kicker">About</p>
          <h2 className="section-title">Adaptable engineer for complex product systems.</h2>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.45 }}
          className="space-y-8"
        >
          <div className="space-y-5 text-lg leading-8 text-[var(--text-muted)]">
            <p>
              A highly adaptable Software Development Engineer with a passion for solving complex
              problems and building efficient, scalable systems. Experienced in designing backend
              architectures, optimizing performance, and ensuring system reliability in fast-paced
              environments.
            </p>
            <p>
              Enjoys working on challenging projects, learning new technologies, and collaborating
              with teams to build impactful solutions.
            </p>
          </div>
          <div className="grid gap-3">
            {principles.map((principle, index) => (
              <div key={principle} className="flex gap-4 border border-[var(--surface-line)] bg-[var(--surface)] p-4">
                <span className="font-mono text-sm font-bold text-blue-700">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <p className="text-sm leading-6 text-[var(--text-muted)]">{principle}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
