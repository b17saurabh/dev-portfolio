'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12"
        >
          About Me
        </motion.h2>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            A highly adaptable Software Development Engineer with a passion for solving complex problems and building
            efficient, scalable systems. Experienced in designing backend architectures, optimizing performance, and
            ensuring system reliability in fast-paced environments.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Enjoys working on challenging projects, learning new technologies, and collaborating with teams to build impactful solutions.
          </p>
        </motion.div>
      </div>
    </section>
  );
} 