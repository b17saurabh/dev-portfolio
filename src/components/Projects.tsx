'use client';

import { motion } from 'framer-motion';

type Project = {
  title: string;
  impact: string;
  description: string;
  details: string[];
  technologies: string[];
  github?: string;
};

const projects: Project[] = [
  {
    title: 'RootPilot - Autonomous Incident Investigation Platform',
    impact: 'End-to-end AI-powered RCA for distributed systems',
    github: 'https://github.com/rootpilotai/platform',
    description:
      'Designed and built an event-driven autonomous incident investigation platform that correlates distributed telemetry, reconstructs failure timelines, performs AI-powered root cause analysis, and delivers actionable investigations.',
    details: [
      'Designed an event-driven microservices architecture using RabbitMQ to decouple telemetry ingestion, correlation, AI investigation, notifications, and query APIs',
      'Implemented OpenTelemetry ingestion pipeline with telemetry normalization, distributed trace propagation, and provider abstractions for future observability integrations',
      'Built a correlation engine that groups related operational signals into incident contexts using temporal correlation, trace metadata, and service relationships',
      'Developed an AI investigation pipeline that reconstructs failure timelines, generates structured root cause analysis with confidence scoring, and publishes investigation results asynchronously',
      'Implemented Elasticsearch persistence layer for incidents and investigations with query APIs exposed through an API Gateway secured using API keys',
      'Designed pluggable provider abstractions for LLMs, message brokers, notifications, and storage to avoid vendor lock-in and support future extensibility',
      'Integrated Slack and Discord notification providers with dead-letter queue handling and event-driven delivery after investigation completion',
      'Validated the platform using the OpenTelemetry Demo application, uncovering real-world telemetry scaling challenges and driving the design of a signal extraction layer to reduce operational noise before correlation'
    ],
    technologies: [
      'Python',
      'FastAPI',
      'RabbitMQ',
      'OpenTelemetry',
      'Elasticsearch',
      'Docker',
      'AsyncIO',
      'OpenAI',
      'Discord',
      'Slack',
      'Distributed Systems',
      'Microservices',
      'Event-Driven Architecture'
    ],
  },
  {
    title: 'Accops - Enterprise Workspace, Identity & Cloud Platform',
    impact: '43% faster APIs',
    description:
      'Core backend engineer on multiple enterprise-scale systems powering Accops digital workspace, identity, reporting, and multi-cloud orchestration platform.',
    details: [
      'Built Accops Reporting Server using .NET Core and Python FastAPI with REST APIs, background listeners, and scheduled jobs',
      'Designed FastAPI services that directly communicate with Elasticsearch, dynamically generating queries based on selected visualizations, filters, and aggregation parameters',
      'Implemented complex Elasticsearch aggregations to support dashboards such as bar charts, pie charts, trend analysis, and tenant-level analytics',
      'Designed and operated MongoDB clusters with sharding and replica sets; implemented Redis Sentinel for high availability',
      'Containerized services and deployed on Kubernetes with Nginx Ingress, API load balancing, and CNAME-based routing',
      'Developed Google Cloud VM Provider connector for HyWorks supporting VM lifecycle and network operations',
      'Designed Accops UAM (Identity-as-a-Service) with modular identity providers and Kafka-based asynchronous writes',
      'Actively involved in production deployments, scaling strategies, and operational troubleshooting',
    ],
    technologies: [
      '.NET Core',
      'Python FastAPI',
      'Elasticsearch',
      'Kubernetes',
      'Docker',
      'MongoDB',
      'Redis',
      'Kafka',
      'Google Cloud',
      'Nginx',
      'Distributed Systems',
    ],
  },
  {
    title: 'IMIX - Wealth Management Platform',
    impact: 'FinTech workflows',
    description:
      'Contributing to an enterprise wealth management platform used by investment firms, built on .NET and MS SQL Server.',
    details: [
      'Working on feature enhancements and maintenance of a monolithic .NET backend',
      'Contributing to Angular-based frontend modules integrated with .NET APIs',
      'Assisting with SQL stored procedures, triggers, and query performance optimization',
      'Gaining exposure to financial workflows, portfolio management, and reporting systems',
    ],
    technologies: ['.NET', 'MS SQL Server', 'Angular', 'FinTech'],
  },
  {
    title: 'EnrichMe AI - AI-Powered Hiring Platform',
    impact: '500+ submissions',
    description:
      'Built scalable backend systems for coding assessments, resume evaluation, and AI-driven hiring workflows.',
    details: [
      'Developed coding assessment backend using Judge0 with secure sandboxed execution',
      'Implemented background evaluation services for asynchronous test case execution',
      'Integrated OpenAI and DeepSeek APIs to score resumes against job descriptions',
      'Moved face authentication to AWS SQS and Lambda-based background processing to reduce API latency',
    ],
    technologies: ['Node.js', 'AWS SQS', 'AWS Lambda', 'OpenAI', 'DeepSeek', 'Judge0', 'TensorFlow', 'Distributed Systems'],
  },
  {
    title: 'ZentrumHub - Hotel Aggregation Platform',
    impact: 'Supplier integration',
    description:
      'Extended a production travel aggregation platform by integrating new international hotel suppliers.',
    details: [
      'Developed Olympia Travels hotel supplier integration on an existing .NET Core codebase',
      'Implemented supplier-specific APIs, data mapping, and pricing logic',
      'Ensured seamless integration with existing booking and caching workflows',
    ],
    technologies: ['.NET Core', 'REST APIs', 'Travel Domain'],
  },
  {
    title: 'Inspira Holidays - Travel Booking Platform',
    impact: 'Legacy reliability',
    description:
      'Worked on a legacy backend system to integrate a global hotel supplier into booking workflows.',
    details: [
      'Integrated GoGlobal hotel supplier on a legacy JavaScript-based backend',
      'Handled availability, pricing normalization, and booking flows',
      'Improved system reliability while working within legacy architecture constraints',
    ],
    technologies: ['JavaScript', 'REST APIs', 'Legacy Systems'],
  },
  {
    title: 'GCP Auth - Secure Cloud Access Token Generator',
    impact: 'Short-lived tokens',
    description:
      'Developed a C# CLI tool to generate short-lived Google Cloud access tokens using service account credentials.',
    details: [
      'Automates secure token generation for cloud-based workflows',
      'Eliminates OAuth dependency and long-lived credentials',
      'Designed as a production-ready, developer-friendly CLI tool',
    ],
    technologies: ['C#', 'Google Cloud Platform', 'CLI', 'Security'],
  },
];

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

export default function Projects() {
  return (
    <section id="projects" className="section-shell border-b border-[var(--surface-line)]">
      <div className="portfolio-container">
        <p className="section-kicker">Selected Work</p>
        <h2 className="section-title">Project tiles led by engineering impact.</h2>
        <p className="section-copy">
          A portfolio of production systems covering analytics, cloud orchestration, identity,
          hiring infrastructure, financial software, and travel supplier integrations.
        </p>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-2"
        >
          {projects.map((project) => (
            <motion.article key={project.title} variants={item} className="metric-card flex flex-col">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="mt-3 text-2xl font-bold leading-8 text-[var(--text)]">{project.title}</h3>
                </div>
                <div className="w-fit">
                  <p className="mb-2 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--text-muted)]">
                    Project outcome
                  </p>
                  <span className="block bg-emerald-50 px-3 py-2 font-mono text-xs font-bold uppercase tracking-[0.12em] text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-300">
                    {project.impact}
                  </span>
                </div>
              </div>
              <p className="mt-5 text-sm leading-6 text-[var(--text-muted)]">{project.description}</p>
              {project.github ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`View ${project.title} GitHub repository`}
                  className="mt-5 inline-flex w-fit items-center gap-2 border border-[var(--primary)] bg-[var(--primary)] px-4 py-2 font-mono text-xs font-bold uppercase tracking-[0.12em] text-[var(--surface)] transition hover:-translate-y-0.5 hover:bg-[var(--secondary)] hover:text-white focus:outline-none focus:ring-2 focus:ring-[var(--secondary)] focus:ring-offset-2 focus:ring-offset-[var(--surface)]"
                >
                  View GitHub repo
                  <span aria-hidden="true">-&gt;</span>
                </a>
              ) : null}
              <ul className="mt-5 grid gap-2">
                {project.details.map((detail) => (
                  <li key={detail} className="flex gap-3 text-sm leading-6 text-[var(--text-muted)]">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-blue-600" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="chip">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
