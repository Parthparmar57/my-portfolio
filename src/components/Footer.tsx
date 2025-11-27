import React from 'react';
import { Heart, Code } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      className="bg-gray-900 text-white py-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="grid md:grid-cols-3 gap-8" initial={{ y: 40, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: 0.2, duration: 0.7 }}>
          <div>
            <h3 className="text-2xl font-bold mb-4">Parth Parmar</h3>
            <p className="text-gray-400 mb-4">
              Frontend Developer passionate about creating 
              exceptional digital experiences.
            </p>
            <p className="text-gray-400">
              Always learning, always building, always growing.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#skills" className="hover:text-white transition-colors">Skills</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">Projects</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Web Development</li>
              <li>Mobile App Development</li>
              <li>UI/UX Design</li>
              <li>Technical Consulting</li>
            </ul>
          </div>
        </motion.div>

        <motion.div className="border-t border-gray-800 mt-8 pt-8 text-center" initial={{ y: 40, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: 0.4, duration: 0.7 }}>
          <div className="flex items-center justify-center space-x-2 text-gray-400">
            <span>Made with</span>
            <Heart size={16} className="text-red-500" />
            <span>and</span>
            <Code size={16} />
            <span>by Parth Parmar</span>
          </div>
          <p className="text-gray-400 mt-2">
            © 2025 Parth Parmar. All rights reserved.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;