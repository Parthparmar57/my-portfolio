import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Globe, Palette, Server, Smartphone } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Globe,
      title: 'Frontend Development',
      skills: [
        'React js',
        'Tailwind CSS',
        'JavaScript',
      ],
    },
    // Backend and database skills removed by request (frontend-only portfolio)
    {
      icon: Palette,
      title: 'Design & Tools',
      skills: [
        'Figma',
        'Git',
      ],
    },
    {
      icon: Database,
      title: 'Database',
      skills: [
        'SQL',
      ],
    },
  ];

  return (
    <motion.section
      id="skills"
      className="py-20 bg-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-16" initial={{ y: 40, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: 0.2, duration: 0.7 }}>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive toolkit for building modern web applications
          </p>
        </motion.div>

        <motion.div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8" initial={{ y: 40, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: 0.4, duration: 0.7 }}>
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow"
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
              >
                <div className="flex items-center mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mr-4">
                    <Icon size={24} className="text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="bg-white px-4 py-3 rounded-lg shadow-sm border border-gray-100 text-center"
                      >
                        <span className="text-sm font-medium text-gray-700">
                          {skill}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Skills;