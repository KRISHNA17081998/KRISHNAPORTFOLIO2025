import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, Database, FileJson, Globe, Server, 
  Terminal, MonitorSmartphone, Cpu
} from 'lucide-react';

const skills = [
  { name: 'HTML', icon: <Globe size={40} />, color: 'text-orange-500' },
  { name: 'CSS', icon: <MonitorSmartphone size={40} />, color: 'text-blue-500' },
  { name: 'JavaScript', icon: <FileJson size={40} />, color: 'text-yellow-500' },
  { name: 'React', icon: <Code2 size={40} />, color: 'text-cyan-500' },
  { name: 'MySQL', icon: <Database size={40} />, color: 'text-blue-700' },
  { name: 'Visual Basic', icon: <Terminal size={40} />, color: 'text-purple-500' },
  { name: 'Node.js', icon: <Server size={40} />, color: 'text-green-500' },
  { name: 'Express.js', icon: <Server size={40} />, color: 'text-gray-500' },
  { name: 'MongoDB', icon: <Cpu size={40} />, color: 'text-green-600' },
];

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  return (
    <section className="min-h-screen bg-gray-100 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedSkill(skill.name)}
              className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all cursor-pointer"
            >
              <motion.div 
                className={`mb-4 ${skill.color}`}
                animate={selectedSkill === skill.name ? { 
                  rotate: [0, 360],
                  scale: [1, 1.2, 1]
                } : {}}
                transition={{ duration: 0.5 }}
              >
                {skill.icon}
              </motion.div>
              <h3 className="text-xl font-semibold">{skill.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;