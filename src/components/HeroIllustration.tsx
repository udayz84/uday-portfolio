"use client";

import { motion } from "framer-motion";

const HeroIllustration = () => {
  return (
    <motion.div
      className="relative w-full max-w-[600px]"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <svg
        className="w-full h-auto"
        viewBox="0 0 1090 964"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Modern Developer Illustration */}
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          d="M292.345 555.341c0 39.32-23.336 52.322-52.121 52.322s-52.121-13.002-52.121-52.322c0-39.321 52.121-89.453 52.121-89.453s52.121 50.132 52.121 89.453z"
          fill="#6C63FF"
        />
        <path
          d="M237.246 600.92l19.049-26.607-19.071 29.523-.05 3.054c-1.32-.029-2.626-.099-3.912-.21 0 0 .041-2.586.129-5.421.088-2.077.422-4.127.983-6.107"
          fill="#3F3D56"
        />
        <path
          d="M257.283 568.231l17.613-24.608-17.634 27.271-.047 2.815c-1.219-.027-2.427-.092-3.615-.194 0 0 .038-2.389.119-5.007.082-1.918.39-3.812.908-5.638"
          fill="#3F3D56"
        />
        <path
          d="M277.32 535.542l16.177-22.609-16.196 25.019-.043 2.576c-1.118-.025-2.228-.084-3.318-.178 0 0 .035-2.192.109-4.593.075-1.759.358-3.496.833-5.169"
          fill="#3F3D56"
        />
        {/* Add more SVG paths for the complete illustration */}
        
        {/* Animated Elements */}
        <motion.g
          animate={{
            y: [0, -10, 0],
            rotate: [0, 5, 0]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {/* Floating laptop/code elements */}
          <rect x="400" y="300" width="200" height="120" rx="10" fill="#2D3748" />
          <rect x="420" y="320" width="160" height="10" rx="5" fill="#4A5568" />
          <rect x="420" y="340" width="140" height="10" rx="5" fill="#4A5568" />
          <rect x="420" y="360" width="120" height="10" rx="5" fill="#4A5568" />
        </motion.g>

        {/* Animated Code Symbols */}
        <motion.g
          animate={{
            opacity: [0, 1, 0],
            y: [-20, 0, -20]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <text x="600" y="280" fill="#A0AEC0" fontSize="24">&lt;/&gt;</text>
          <text x="650" y="320" fill="#A0AEC0" fontSize="24">{"{}"}</text>
          <text x="700" y="360" fill="#A0AEC0" fontSize="24">[]</text>
        </motion.g>

        {/* Tech Stack Icons */}
        <motion.g
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 10, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <circle cx="800" cy="300" r="30" fill="#61DAFB" /> {/* React */}
          <circle cx="880" cy="300" r="30" fill="#000000" /> {/* Next.js */}
          <circle cx="840" cy="380" r="30" fill="#3C873A" /> {/* Node.js */}
        </motion.g>
      </svg>
    </motion.div>
  );
};

export default HeroIllustration; 