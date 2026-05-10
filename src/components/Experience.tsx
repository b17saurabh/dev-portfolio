'use client';

import { motion } from 'framer-motion';

const experiences = [
  {
    company: 'IMIX Software Pvt. Ltd. (Investment Software Group, London, UK)',
    position: 'Full Stack Developer',
    period: 'July 2025 - Present',
    location: 'Noida, India',
    signal: 'Wealth management platform',
    achievements: [
      'Working on an enterprise Wealth Management Platform for investment firms built on a monolithic .NET and MS SQL Server architecture.',
      'Contributing to feature enhancements and maintenance of Angular-based front-end modules integrated with .NET APIs.',
      'Assisting in development, debugging, and optimization of SQL stored procedures, triggers, and views implementing core business logic.',
      'Collaborating with senior developers to improve query efficiency, ensure data consistency, and maintain application performance.',
      'Gaining hands-on exposure to financial domain workflows, reporting modules, and portfolio management logic within SQL layers.',
      'Actively learning architectural practices for transitioning legacy modules towards modular, service-oriented design.',
    ],
  },
  {
    company: 'Tensech Solution Pvt. Ltd.',
    position: 'Software Developer',
    period: 'Aug 2022 - July 2025',
    location: 'Noida, India',
    signal: 'Enterprise workspace systems',
    achievements: [
      'Led the Accops Reporting Server project, redesigning it into microservices using .NET Core and Python FastAPI, making it horizontally scalable and reducing API response times by 43%.',
      'Developed and optimized APIs for Accops Reporting Server, integrating Elasticsearch for improved logging and analytics.',
      'Designed and implemented the GCP Cloud Connector for Accops HyWorks, enabling virtual machine, network, and disk management similar to existing AWS, Azure, and VMware integrations.',
      'Developed IDaaS authentication and identity management solutions in .NET, supporting both Microsoft Entra ID and OpenLDAP, streamlining user provisioning and access control.',
      'Built and deployed EnrichMe sandbox coding platform in Node.js, handling over 500 concurrent user submissions with a secure execution environment.',
      'Configured and optimized MongoDB clusters and Redis Sentinels, ensuring high availability, fault tolerance, and distributed caching.',
      'Implemented API load balancing with Nginx, clustering services across multiple nodes, and replicated the architecture on a Kubernetes cluster using Ingress controllers for dynamic service routing.',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-shell border-b border-gray-200 bg-white">
      <div className="portfolio-container">
        <p className="section-kicker">Professional Journey</p>
        <h2 className="section-title">Delivery across product-critical systems.</h2>
        <p className="section-copy">
          Experience spanning enterprise wealth management, workspace platforms, identity systems,
          cloud connectors, analytics pipelines, and secure assessment infrastructure.
        </p>

        <div className="mt-12 grid gap-6">
          {experiences.map((exp, index) => (
            <motion.article
              key={exp.company}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="rounded-lg border border-gray-200 bg-white p-5 md:p-7"
            >
              <div className="grid gap-6 lg:grid-cols-[0.35fr_0.65fr]">
                <div>
                  <p className="mono-label">{exp.signal}</p>
                  <h3 className="mt-3 text-2xl font-bold text-gray-950">{exp.position}</h3>
                  <p className="mt-3 text-sm leading-6 text-gray-600">{exp.company}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    <span className="chip">{exp.period}</span>
                    <span className="chip">{exp.location}</span>
                  </div>
                </div>
                <ul className="grid gap-3">
                  {exp.achievements.map((achievement) => (
                    <li key={achievement} className="flex gap-3 text-sm leading-6 text-gray-700">
                      <span className="mt-2 h-2 w-2 flex-none rounded-full bg-blue-600" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
