'use client';

import { motion } from 'framer-motion';

export default function Experience() {
  const experiences = [
    {
      company: 'Tensech Solution Pvt. Ltd.',
      position: 'Software Developer',
      period: 'Aug 2022 - Present',
      location: 'Noida, India',
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

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Work Experience
        </motion.h2>
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto space-y-8"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">{exp.position}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{exp.company}</p>
                  <p className="text-sm text-gray-500">{exp.location}</p>
                </div>
                <span className="text-sm text-gray-500">{exp.period}</span>
              </div>
              <ul className="space-y-3">
                {exp.achievements.map((achievement, i) => (
                  <motion.li
                    key={i}
                    variants={item}
                    className="text-gray-600 dark:text-gray-300 flex items-start"
                  >
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    {achievement}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 