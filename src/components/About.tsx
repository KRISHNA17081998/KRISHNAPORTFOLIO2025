import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="min-h-screen bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2"
          >
            <img 
              src="/Pictures/ME.jpg" 
              alt="Developer" 
              className="rounded-lg shadow-xl w-full h-[500px] object-cover"
            />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2"
          >
            <h2 className="text-4xl font-bold mb-6">About Me</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              I'm a web designer and developer passionate about creating visually appealing, 
              user-friendly websites. With expertise in both design and coding, I focus on 
              building responsive, engaging experiences. I stay current with the latest web 
              trends to deliver high-quality, functional digital solutions. My goal is to 
              bring ideas to life through seamless design and performance.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;