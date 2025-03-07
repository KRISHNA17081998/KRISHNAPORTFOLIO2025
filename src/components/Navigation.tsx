import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 bg-blue-600 h-16 z-40 flex items-center justify-between px-6">
        <a href="#home" className="text-white text-2xl font-bold">Portfolio</a>
        <button
          onClick={() => setIsOpen(true)}
          className="bg-white/10 p-2 rounded-full cursor-pointer hover:bg-white/20 transition-colors"
        >
          <Menu size={24} className="text-white" />
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween' }}
            className="fixed inset-0 bg-blue-600 z-50 flex items-center justify-center"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
            >
              <X size={24} className="text-white" />
            </button>
            
            <nav className="text-center">
              <ul className="space-y-8">
                {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-white text-3xl hover:text-gray-200"
                      onClick={() => setIsOpen(false)}
                    >
                      {item}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;