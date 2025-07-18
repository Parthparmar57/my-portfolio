import React from 'react';
import { ExternalLink, Github, Calendar, Tag } from 'lucide-react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: 'Skill Swap Platform',
      description: 'A dynamic SkillSwap platform built with React and Node.js, designed to connect users who want to exchange skills and knowledge. Features include user authentication, profile management, skill listing and browsing, request system, and real-time chat functionality for collaboration.',
      technologies: ['React', 'Node.js', 'MongoDB', 'TypeScript', 'Tailwind CSS'],
      liveUrl: 'https://skillswap-ten-kappa.vercel.app/',
      githubUrl: 'https://github.com/Parthparmar57/odoo_hackathon_25',
      date: '2025',
      category: 'MERN stack',
    },
    {
      title: 'Hospital Appoinment Booking App',
      description: 'A hospital appointment booking system built with React and Node.js, designed to simplify patient-doctor interactions. Features include user authentication, doctor and department listing, appointment scheduling, real-time booking status, and an intuitive admin dashboard for hospital management.',
      technologies: ['React', 'Firebase', 'TypeScript'],
      liveUrl: 'https://hospital-appoinment-booking.vercel.app/',
      githubUrl: 'https://github.com/Parthparmar57/hospital-appoinment-booking',
      date: '2025',
      category: 'MERN stack',
    },
    {
      title: 'AI chatbot',
      description: 'An intelligent AI chatbot integrated with the Gemini API, built using React and Node.js. It enables real-time, multilingual conversations, answering user queries with natural language understanding. Designed for seamless integration into websites or apps, with support for context-aware responses, voice input/output, and a user-friendly interface.',
      technologies: [ 'Python', 'Gemini API'],
      liveUrl: 'https://ai-chatbot-5ix7.vercel.app/',
      githubUrl: 'https://github.com/Parthparmar57/Ai_chatbot',
      date: '2025',
      category: 'AI ML',
    }
  ];

  return (
    <motion.section
      id="projects"
      className="py-20 bg-gray-50"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-16" initial={{ y: 40, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: 0.2, duration: 0.7 }}>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of my recent work and creative solutions
          </p>
        </motion.div>

        <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" initial={{ y: 40, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: 0.4, duration: 0.7 }}>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6"
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
            >
              <div className="mb-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  <Tag size={12} className="mr-1" />
                  {project.category}
                </span>
              </div>

              <div className="flex items-center text-sm text-gray-500 mb-2">
                <Calendar size={14} className="mr-1" />
                {project.date}
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {project.title}
              </h3>

              <p className="text-gray-600 mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex space-x-4">
                <a
                  href={project.liveUrl}
                  className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <ExternalLink size={16} className="mr-1" />
                  Live Demo
                </a>
                <a
                  href={project.githubUrl}
                  className="flex items-center text-gray-600 hover:text-gray-800 transition-colors"
                >
                  <Github size={16} className="mr-1" />
                  Code
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Projects;