import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  return (
    <section className="min-h-screen bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto">                                                      
        <h2 className="text-4xl font-bold text-center mb-16">Projects</h2>
        
        {/* First Project - Random Password Generator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
        >
          <img 
            src={`RANDOMPASSWORDGENERATOR.png`}  // Replace with actual image
            alt="Random Password Generator"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">RANDOM PASSWORD GENERATOR</h3>
            <p className="text-gray-600 mb-4">
              Created a Basic Random Password Generator using HTML, CSS, and JavaScript
            </p>
            <div className="flex gap-4">
              <a 
                href="https://github.com/KRISHNA17081998/RANDOM-PASSWORD-GENERATOR" 
                className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
              >
                <Github size={20} />
                GitHub Repository
              </a>
              <a 
                href="https://randompasswordgenerator2025.netlify.app/"
                className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
              >
                <ExternalLink size={20} />
                Live Demo
              </a>
            </div>
          </div>
        </motion.div>

        {/* Second Project - Random Color Generator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
        >
          <img 
            src={`RANDOMCOLORGENERATOR.jpg`}  
            alt="Random Color Generator"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">RANDOM COLOR GENERATOR</h3>
            <p className="text-gray-600 mb-4">
              Created a Basic Random Color Generator using HTML, CSS, and JavaScript
            </p>
            <div className="flex gap-4">
              <a 
                href="https://github.com/KRISHNA17081998/RANDOM-COLOR-GENERATOR" 
                className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
              >
                <Github size={20} />
                GitHub Repository
              </a>
              <a 
                href="https://randomcolorgenerator2025.netlify.app/"
                className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
              >
                <ExternalLink size={20} />
                Live Demo
              </a>
            </div>
          </div>
        </motion.div>

        {/* Third Project - QR Code Generator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
        >
          <img 
            src={`QRCODEGENERATOR.jpg`}  // Replace with actual image
            alt="QR Code Generator"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">QR CODE GENERATOR</h3>
            <p className="text-gray-600 mb-4">
              Created a QR Code Generator using HTML, CSS, and JavaScript
            </p>
            <div className="flex gap-4">
              <a 
                href="https://github.com/KRISHNA17081998/QR-CODE-GENERATOR-2025" 
                className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
              >
                <Github size={20} />
                GitHub Repository
              </a>
              <a 
                href="https://qrcodegenerator2025.netlify.app/"
                className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
              >
                <ExternalLink size={20} />
                Live Demo
              </a>
            </div>
          </div>
        </motion.div>

        {/* Fourth Project - Basic Calculator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
        >
          <img 
            src={`CALCULATOR.jpg`}  // Replace with actual image
            alt="Calculator App"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">BASIC CALCULATOR 2025</h3>
            <p className="text-gray-600 mb-4">
              Created a Basic Calculator using HTML, CSS, and JavaScript
            </p>
            <div className="flex gap-4">
              <a 
                href="https://github.com/KRISHNA17081998/Basic-Calculator-2025" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
              >
                <Github size={20} />
                GitHub Repository
              </a>
              <a 
                href="https://your-live-demo-url.com" // Replace with your live demo URL
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
              >
                <ExternalLink size={20} />
                Live Demo
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;
