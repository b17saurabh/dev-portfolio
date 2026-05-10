'use client';

import { motion } from 'framer-motion';

const practices = [
  'Validate assumptions with tests before trusting an implementation.',
  'Read the failure path as carefully as the happy path.',
  'Use automation, logs, and reproducible checks to make confidence earned.',
];

export default function Philosophy() {
  return (
    <section id="philosophy" className="section-shell scroll-mt-24">
      <div className="portfolio-container">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.45 }}
          className="surface-panel mx-auto max-w-4xl border border-[var(--surface-line)] p-8 text-center md:p-20"
        >
          <p className="section-kicker">Engineering Philosophy</p>
          <h2 className="text-3xl font-bold italic leading-tight tracking-[-0.015em] text-[var(--text)] md:text-[2.55rem] md:leading-[2.9rem]" style={{ fontFamily: 'var(--font-display)' }}>
            "Never trust code blindly. Make it prove itself through tests, observability, and careful review."
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[var(--text-muted)]">
            My best work comes from curiosity plus verification: understand the system, test the
            risky edges, and ship only when the behavior is explainable under real conditions.
          </p>
          <div className="mt-8 grid gap-3 text-left md:grid-cols-3">
            {practices.map((practice, index) => (
              <div key={practice} className="border border-[var(--surface-line)] bg-[var(--surface)] p-4">
                <span className="font-mono text-xs font-semibold text-[#0051d5]">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <p className="mt-3 text-sm leading-6 text-[var(--text-muted)]">{practice}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
