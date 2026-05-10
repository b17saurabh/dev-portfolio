'use client';

import { motion } from 'framer-motion';

const links = [
  {
    label: 'GitHub',
    href: 'https://github.com/b17saurabh',
    value: 'github.com/b17saurabh',
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/b17saurabh',
    value: 'linkedin.com/in/b17saurabh',
  },
  {
    label: 'Email',
    href: 'mailto:saurabhbatham17@gmail.com',
    value: 'saurabhbatham17@gmail.com',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section-shell bg-white">
      <div className="portfolio-container">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="section-kicker">Contact</p>
            <h2 className="section-title">Let us build reliable systems.</h2>
            <p className="section-copy">
              Feel free to reach out through any of these platforms.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.45 }}
            className="grid gap-3"
          >
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group rounded-lg border border-gray-200 bg-[#f8f9fa] p-5 transition hover:border-gray-950 hover:bg-white"
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="mono-label">{link.label}</p>
                    <p className="mt-2 break-words text-lg font-bold text-gray-950">{link.value}</p>
                  </div>
                  <span className="font-mono text-xs font-semibold uppercase tracking-[0.12em] text-blue-700 transition group-hover:text-gray-950">
                    Open
                  </span>
                </div>
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
