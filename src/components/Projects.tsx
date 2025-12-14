'use client';

import { motion } from 'framer-motion';

export default function Projects() {
  const projects = [
    {
      title: 'Accops – Enterprise Workspace, Identity & Cloud Platform',
      description:
        'Core backend engineer on multiple enterprise-scale systems powering Accops’ digital workspace, identity, reporting, and multi-cloud orchestration platform.',
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
      title: 'EnrichMe AI – AI-Powered Hiring Platform',
      description:
        'Built scalable backend systems for coding assessments, resume evaluation, and AI-driven hiring workflows.',
      details: [
        'Developed coding assessment backend using Judge0 with secure sandboxed execution',
        'Implemented background evaluation services for asynchronous test case execution',
        'Integrated OpenAI and DeepSeek APIs to score resumes against job descriptions',
        'Moved face authentication to AWS SQS and Lambda-based background processing to reduce API latency',
      ],
      technologies: [
        'Node.js',
        'AWS SQS',
        'AWS Lambda',
        'OpenAI',
        'DeepSeek',
        'Judge0',
        'TensorFlow',
        'Distributed Systems',
      ],
    },
    {
      title: 'IMIX – Wealth Management Platform',
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
      title: 'ZentrumHub – Hotel Aggregation Platform',
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
      title: 'Inspira Holidays – Travel Booking Platform',
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
      title: 'GCP Auth – Secure Cloud Access Token Generator',
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
      transition: { staggerChildren: 0.1 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Featured Projects
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
                {project.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {project.description}
              </p>

              <ul className="space-y-2 mb-4">
                {project.details.map((detail, i) => (
                  <li
                    key={i}
                    className="text-gray-600 dark:text-gray-300 flex items-start"
                  >
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                    {detail}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
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
