'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const metrics = [
  { label: 'API latency reduced', value: '43%', note: 'Accops Reporting Server redesign' },
  { label: 'Concurrent submissions', value: '500+', note: 'Secure EnrichMe coding platform' },
  { label: 'Production domains', value: '5', note: 'Workspace, hiring, wealth, travel, cloud' },
];

export default function Hero() {
  return (
    <section id="home" className="border-b border-gray-200 bg-[#f8f9fa]">
      <div className="portfolio-container grid min-h-[calc(100vh-4rem)] items-center gap-12 py-16 lg:grid-cols-[1.08fr_0.92fr]">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          <p className="section-kicker">Software Development Engineer</p>
          <h1 className="max-w-4xl text-5xl font-extrabold leading-[1.05] text-gray-950 md:text-7xl">
            Saurabh Batham
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-8 text-gray-700">
            Backend and full-stack engineer building scalable systems across identity, reporting,
            cloud orchestration, hiring, wealth management, and travel platforms.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#projects"
              className="rounded bg-gray-950 px-5 py-3 text-center font-mono text-xs font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-gray-800"
            >
              View Projects
            </Link>
            <Link
              href="#contact"
              className="rounded border border-gray-300 bg-white px-5 py-3 text-center font-mono text-xs font-semibold uppercase tracking-[0.12em] text-gray-950 transition hover:border-gray-950"
            >
              Contact Me
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.15 }}
          className="grid gap-4"
        >
          {metrics.map((metric) => (
            <div key={metric.label} className="metric-card">
              <p className="mono-label">{metric.label}</p>
              <p className="mt-4 text-5xl font-extrabold leading-none text-gray-950">
                {metric.value}
              </p>
              <p className="mt-3 text-sm leading-6 text-gray-600">{metric.note}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
