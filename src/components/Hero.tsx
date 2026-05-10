'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const portraitUrl = '/assets/headshot.png';

const metrics = [
  { label: 'Latency reduction', value: '43%', note: 'Optimized core API' },
  { label: 'Concurrent users', value: '500+', note: 'Secure sandbox submissions' },
  { label: 'Production domains', value: '5', note: 'Enterprise systems shipped' },
  { label: 'Reliability scope', value: '24/7', note: 'Deployments and troubleshooting' },
];

export default function Hero() {
  return (
    <>
      <section id="home" className="portfolio-container flex flex-col items-center gap-8 px-4 pb-20 pt-36 md:flex-row md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="flex-1 space-y-4"
        >
          <div className="inline-block bg-[var(--surface-muted)] px-3 py-1 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">
            Product-Minded Engineering
          </div>
          <h1 className="max-w-2xl text-5xl font-bold leading-[1.04] tracking-[-0.025em] text-[var(--primary)] md:text-[4.45rem]" style={{ fontFamily: 'var(--font-display)' }}>
            Saurabh Batham. <br />
            <span className="text-[#0051d5]">Backend-Heavy</span> Full Stack Developer.
          </h1>
          <p className="max-w-xl text-lg leading-7 text-[var(--text-muted)]">
            Full stack developer with a backend-first mindset and hands-on DevOps exposure,
            building scalable systems across identity, reporting, cloud orchestration, hiring,
            wealth management, and travel platforms. I engineer for outcomes, not just output.
          </p>
          <div className="flex flex-col gap-4 pt-4 sm:flex-row">
            <Link
              href="#projects"
              className="bg-[var(--primary)] px-8 py-4 text-center font-mono text-xs font-semibold uppercase tracking-[0.05em] text-[var(--surface)]"
            >
              View Case Studies
            </Link>
            <Link
              href="#philosophy"
              className="border border-[var(--surface-line)] px-8 py-4 text-center font-mono text-xs font-semibold uppercase tracking-[0.05em] text-[var(--text)] transition hover:bg-[var(--surface-muted)]"
            >
              The Philosophy
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.12 }}
          className="w-full flex-1"
        >
          <div className="aspect-square overflow-hidden bg-[var(--surface-muted)] shadow-[18px_18px_0_var(--surface-line)]">
            <img
              src={portraitUrl}
              alt="Professional portrait"
              className="h-full w-full object-cover grayscale opacity-90"
            />
          </div>
        </motion.div>
      </section>

      <section className="section-shell">
        <div className="portfolio-container">
          <div className="mb-8">
            <h2 className="mb-2 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[var(--text-muted)]">
              Live Impact Metrics
            </h2>
            <div className="h-1 w-12 bg-[#0051d5]" />
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
            {metrics.map((metric, index) => (
              <div key={metric.label} className="metric-card">
                <span className="mb-2 block font-mono text-xs font-semibold uppercase tracking-[0.05em] text-[var(--text-muted)]">
                  {metric.label}
                </span>
                <div className={`text-[2.5rem] font-extrabold leading-none tracking-[-0.02em] ${index === 1 ? 'text-[#0051d5]' : 'text-[var(--primary)]'}`}>
                  {metric.value}
                </div>
                <p className="mt-2 font-mono text-xs font-semibold text-[var(--text-muted)]">{metric.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
