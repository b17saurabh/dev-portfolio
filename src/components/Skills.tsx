'use client';

import { motion } from 'framer-motion';

export default function Skills() {
  const skills = {
    'Languages': [
      'C#',
      'Python',
      'TypeScript',
      'SQL',
      'NoSQL',
    ],
    'Backend': [
      '.NET Core',
      'FastAPI',
      'NodeJS',
      'REST APIs',
    ],
    'Frontend': [
      'Angular JS',
    ],
    'Cloud & DevOps': [
      'GCP',
      'Azure Cloud',
      'Docker',
      'Kubernetes',
      'Linux',
      'Networking',
    ],
    'Databases': [
      'SQL Server',
      'PostgreSQL',
      'MongoDB',
      'MySQL',
      'OpenSearch',
      'Elasticsearch',
    ],
    'Tools': [
      'Git',
      'Azure DevOps',
      'SAML',
      'Pub/Sub',
      'LDAP',
      'xUnit',
      'PyUnit',
      'Apex Charts',
    ],
    'Infrastructure': [
      'Clustering',
      'API Gateways (Nginx)',
      'CNAME-based routing',
    ],
    'Security': [
      'Authentication',
      'Authorization',
      'Cryptography',
    ],
    'Soft Skills': [
      'Problem-Solving',
      'Communication',
      'Team Collaboration',
    ],
  };

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
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Skills & Expertise
        </motion.h2>
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {Object.entries(skills).map(([category, items]) => (
            <motion.div
              key={category}
              variants={item}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">{category}</h3>
              <ul className="space-y-2">
                {items.map((skill) => (
                  <li key={skill} className="text-gray-600 dark:text-gray-300 flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 