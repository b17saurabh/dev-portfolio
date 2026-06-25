'use client';

import { motion } from 'framer-motion';

const skills = {
  Languages: ['C#', 'Python', 'TypeScript', 'SQL', 'NoSQL'],
  Backend: ['.NET Core', 'FastAPI', 'NodeJS', 'REST APIs'],
  Frontend: ['Angular', 'Figma', 'NextJS', 'Bootstrap'],
  'Cloud & DevOps': ['GCP', 'Azure Cloud', 'Docker', 'Kubernetes', 'Linux', 'Networking'],
  Databases: ['SQL Server', 'PostgreSQL', 'MongoDB', 'MySQL', 'OpenSearch', 'Elasticsearch'],
  Tools: ['Git', 'Azure DevOps', 'SAML', 'Pub/Sub', 'LDAP', 'xUnit', 'PyUnit', 'Apex Charts', 'Open Telemetry'],
  Infrastructure: ['Clustering', 'API Gateways (Nginx)', 'CNAME-based routing'],
  Security: ['Authentication', 'Authorization', 'Cryptography'],
  'Soft Skills': ['Problem-Solving', 'Communication', 'Team Collaboration'],
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

export default function Skills() {
  return (
    <section id="skills" className="section-shell border-b border-[var(--surface-line)]">
      <div className="portfolio-container">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-end">
          <div>
            <p className="section-kicker">Skills Matrix</p>
            <h2 className="section-title">Systems, services, data, and delivery.</h2>
          </div>
          <p className="max-w-xl border-l-2 border-[#0051d5] pl-4 text-sm leading-6 text-[var(--text-muted)]">
            Technical breadth grouped by the way production work actually arrives: language,
            backend services, cloud operations, data stores, security, and product collaboration.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
          {Object.entries(skills).map(([category, items]) => (
            <motion.div key={category} variants={item} className="metric-card">
              <div className="flex items-center justify-between gap-4">
                <h3 className="font-mono text-sm font-bold uppercase tracking-[0.12em] text-[var(--text)]">
                  {category}
                </h3>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span key={skill} className="chip">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
