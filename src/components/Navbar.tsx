"use client";

import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = ["About", "Skills", "Projects", "Contact"];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false); // Close mobile menu after navigation
  };

  return (
    <motion.nav 
      className="fixed w-full top-0 z-50 bg-black/90 backdrop-blur-sm border-b border-white/10"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div 
            className="text-xl font-bold bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            UZ
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-gray-300 hover:text-white transition-colors cursor-pointer bg-transparent border-none font-medium"
                whileHover={{ y: -2 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item}
              </motion.button>
            ))}
          </div>

          {/* Desktop Social Links */}
          <div className="hidden md:flex items-center space-x-4">
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

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white transition-colors p-2"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isMenuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden border-t border-white/10 bg-black/95 backdrop-blur-sm"
            >
              <div className="px-4 pt-4 pb-6 space-y-4">
                {/* Mobile Navigation Items */}
                {navItems.map((item, index) => (
                  <motion.button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="block w-full text-left text-gray-300 hover:text-white transition-colors py-3 px-2 rounded-lg hover:bg-white/5 font-medium"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    {item}
                  </motion.button>
                ))}
                
                {/* Mobile Social Links */}
                <div className="flex items-center justify-center space-x-6 pt-4 border-t border-white/10">
                  <motion.a
                    href="https://github.com/udayz84"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors p-2"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaGithub className="w-6 h-6" />
                  </motion.a>
                  <motion.a
                    href="https://www.linkedin.com/in/uday-znanam-4495502b1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-blue-400 transition-colors p-2"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaLinkedin className="w-6 h-6" />
                  </motion.a>
                  <motion.a
                    href="https://leetcode.com/u/udayznanam/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-yellow-400 transition-colors p-2"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <SiLeetcode className="w-6 h-6" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar; 