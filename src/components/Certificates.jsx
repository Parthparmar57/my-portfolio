import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, BadgeCheck, Medal, Eye } from 'lucide-react';

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  const certificates = [
    {
      icon: BadgeCheck,
      title: 'Cyber Security Workshop',
      issuer: 'L.d. college of engineering',
      year: 'December 2024',
      image: '/certificates/tcf.jpg',
    },
    {
      icon: BadgeCheck,
      title: 'Cyber Drill- Phising, Malware & Ransomeware',
      issuer: 'CAWACH Kendra',
      year: 'july 2025',
      image: '/certificates/cyber.png.jpg',
    },
    {
      icon: BadgeCheck,
      title: 'CA at IIT Bombay techfest',
      issuer: 'IIT Bombay techfest',
      year: 'july 2025',
      image: '/certificates/iitb.jpg',
    },
   
  ];

  return (
    <motion.section
      id="certificates"
      className="py-20 bg-gray-50"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Certificates
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Recognitions and achievements from reputed platforms
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          {certificates.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl hover:shadow-lg transition-shadow"
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
              >
                <div className="flex items-center mb-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mr-4">
                    <Icon size={24} className="text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {cert.title}
                  </h3>
                </div>
                <p className="text-sm text-gray-600">
                  Issuer: <span className="font-medium">{cert.issuer}</span>
                </p>
                <p className="text-sm text-gray-600 mb-4">
                  Year: <span className="font-medium">{cert.year}</span>
                </p>
                <button
                  onClick={() => setSelectedCert(cert)}
                  className="inline-flex items-center text-sm text-blue-600 font-medium hover:underline"
                >
                  <Eye size={16} className="mr-1" />
                  View Certificate
                </button>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Modal */}
        {selectedCert && (
          <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center">
            <div className="relative max-w-3xl w-full p-4">
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 text-white text-2xl font-bold"
              >
                &times;
              </button>
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="rounded-lg shadow-lg max-h-[80vh] mx-auto"
              />
              <p className="text-center text-white mt-4 text-lg font-semibold">
                {selectedCert.title}
              </p>
            </div>
          </div>
        )}
      </div>
    </motion.section>
  );
};

export default Certificates;
