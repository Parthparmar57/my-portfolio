import React from 'react';
import { Award, Coffee, Users, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import profilepic from './WhatsApp Image 2024-12-26 at 20.36.57_12c450c7.jpg'

const About = () => {
  // Removed stats array and related UI

  return (
    <motion.section
      id="about"
      className="py-20 bg-gray-50"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-16" initial={{ y: 40, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: 0.2, duration: 0.7 }}>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate developer with a love for creating exceptional digital experiences
          </p>
        </motion.div>

        <motion.div className="grid lg:grid-cols-2 gap-12 items-center" initial={{ y: 40, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: 0.4, duration: 0.7 }}>
          <motion.div className="space-y-6" initial={{ x: -40, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: 0.6, duration: 0.7 }}>
            <div className="prose prose-lg text-gray-700">
              <p>
              I'm a passionate Frontend Developer and a dedicated student, currently building my skills in creating responsive, user-friendly web applications. I specialize in working with React and modern frontend tooling, and I love bringing ideas to life through clean, functional, and modern web design. I’m constantly learning, building projects, and exploring the latest trends in frontend development.
              </p>
              <p>
              My journey began as an IT Engineering student at LD College of Engineering, but my real passion ignited when I discovered the power of combining technology with design. I believe great software isn’t just about writing clean code—it's about crafting meaningful experiences that delight users and solve real-world problems. Every project I work on is a step forward in my journey as a creative and purposeful developer.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, 
                contributing to open-source projects, or sharing knowledge with the 
                developer community through blog posts and speaking engagements.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {['Html','CSS', 'JavaScript','React', 'Python','DSA C++'].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Profile Picture Section */}
          <motion.div className="flex pl-36 justify-center lg:justify-start lg:-ml-4 lg:mr-8 ml-[15px]" initial={{ x: 40, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: 0.8, duration: 0.7 }}>
            <img
              src={profilepic}
              alt="Profile"
              className="w-80 h-82 object-cover rounded-full shadow-lg border-4 border-white"
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;