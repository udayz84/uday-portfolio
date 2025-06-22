"use client";

import { motion } from "framer-motion";

const DeveloperIllustration = () => {
  return (
    <motion.div
      className="relative w-full max-w-[600px]"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        data-name="Layer 1"
        className="w-full h-auto"
        viewBox="0 0 850 850"
      >
        <motion.g
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Main Character */}
          <path
            d="M832.08 749.02l-3.15-.05-147.28-2.51-31.06-.53-131.66-2.24-13.91-.24-114.13-1.94-33.38-.57-147.28-2.51-31.06-.53-131.67-2.24-13.91-.24-114.13-1.94-33.38-.57-147.28-2.51-3.15-.05a23.78 23.78 0 01-23.54-23.78l.85-50.17 2.43-142.94 1.43-83.96 2.43-142.94.85-50.17a23.78 23.78 0 0123.78-23.54l3.15.05 147.28 2.51 31.06.53 131.67 2.24 13.91.24 114.13 1.94 33.38.57 147.28 2.51 31.06.53 131.66 2.24 13.91.24 114.13 1.94 33.38.57 147.28 2.51 3.15.05a23.78 23.78 0 0123.54 23.78l-.85 50.17-2.43 142.94-1.43 83.96-2.43 142.94-.85 50.17a23.78 23.78 0 01-23.78 23.54z"
            fill="#3f3d56"
          />
          {/* Laptop Screen */}
          <motion.path
            d="M441.08 132.02h-210a17 17 0 00-17 17v210a17 17 0 0017 17h210a17 17 0 0017-17v-210a17 17 0 00-17-17z"
            fill="#fff"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          />
          {/* Code Lines */}
          <motion.g
            fill="#e6e6e6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, stagger: 0.1 }}
          >
            <rect x="264.08" y="182.02" width="110" height="10" rx="5" />
            <rect x="264.08" y="212.02" width="160" height="10" rx="5" />
            <rect x="264.08" y="242.02" width="130" height="10" rx="5" />
          </motion.g>
          {/* Floating Elements */}
          <motion.g
            animate={{
              y: [-10, 10, -10],
              rotate: [-5, 5, -5]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <circle cx="600" cy="200" r="30" fill="#6c63ff" opacity="0.8" />
            <circle cx="650" cy="250" r="20" fill="#6c63ff" opacity="0.4" />
            <circle cx="680" cy="180" r="15" fill="#6c63ff" opacity="0.6" />
          </motion.g>
          {/* Tech Icons */}
          <motion.g
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 360, 0]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <path
              d="M700 300a40 40 0 11-40-40 40 40 0 0140 40"
              fill="#61dafb"
              opacity="0.8"
            />
            <path
              d="M750 350a30 30 0 11-30-30 30 30 0 0130 30"
              fill="#3c873a"
              opacity="0.8"
            />
          </motion.g>
        </motion.g>
      </svg>
    </motion.div>
  );
};

export default DeveloperIllustration; 