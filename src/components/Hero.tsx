import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-emerald-50"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div className="space-y-8" initial={{ y: 40, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: 0.2, duration: 0.7 }}>
          <motion.div className="space-y-4" initial={{ y: 40, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: 0.4, duration: 0.7 }}>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900">
              <span className="block">Hi, I'm</span>
              <span className="block bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                Parth Parmar
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto">
              MERN Stack Developer & UI/UX Designer
            </p>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              I create beautiful, functional web experiences that make a difference. 
              Passionate about clean code, innovative design, and solving complex problems.
            </p>
          </motion.div>

          <motion.div className="flex flex-col sm:flex-row gap-4 justify-center items-center" initial={{ y: 40, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: 0.6, duration: 0.7 }}>
            <button
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors shadow-lg hover:shadow-xl transform hover:scale-105"
              onClick={scrollToProjects}
            >
              View My Work
            </button>
            <a
              href="/resume.pdf"
              download
              className="px-8 py-3 border-2 border-gray-300 hover:border-gray-400 text-gray-700 rounded-lg font-medium transition-colors text-center"
            >
              Download Resume
            </a>
          </motion.div>

          <motion.div className="flex justify-center space-x-6" initial={{ y: 40, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: 0.8, duration: 0.7 }}>
            <a
              href="https://github.com/Parthparmar57"
              className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow text-gray-700 hover:text-blue-600"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/parth-parmar-992a63318?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow text-gray-700 hover:text-blue-600"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="parthparmar5172@gmail.com"
              className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow text-gray-700 hover:text-blue-600"
            >
              <Mail size={24} />
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ delay: 1, duration: 0.7 }}
      >
        <ArrowDown size={32} className="text-gray-400" />
      </motion.button>
    </motion.section>
  );
};

export default Hero;