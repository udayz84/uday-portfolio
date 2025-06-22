"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Navbar = () => {
  const navItems = ["About", "Skills", "Projects", "Contact"];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav 
      className="fixed w-full top-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/10"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div 
            className="text-xl font-bold bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            UZ
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-gray-300 hover:text-white transition-colors cursor-pointer bg-transparent border-none"
                whileHover={{ y: -2 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item}
              </motion.button>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <motion.a
              href="https://github.com/udayz84"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
              whileHover={{ y: -2 }}
            >
              <FaGithub className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/uday-znanam-4495502b1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 transition-colors"
              whileHover={{ y: -2 }}
            >
              <FaLinkedin className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="https://leetcode.com/u/udayznanam/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-yellow-400 transition-colors"
              whileHover={{ y: -2 }}
            >
              <SiLeetcode className="w-5 h-5" />
            </motion.a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar; 