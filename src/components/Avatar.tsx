"use client";

import { motion } from "framer-motion";
import Lottie from "lottie-react";
import portfolioAnimation from "../../public/porfolio.json";

const Avatar = () => {
  return (
    <motion.div
      className="relative w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] mx-auto"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* Optimized rotating background circle */}
      <motion.div 
        className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30"
        style={{ willChange: 'transform' }}
        animate={{ rotate: 360 }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      {/* Simplified decorative circles with reduced motion - responsive sizing */}
      <motion.div 
        className="absolute w-3 h-3 sm:w-4 sm:h-4 bg-yellow-400 rounded-full"
        style={{ 
          top: "20%", 
          left: "10%",
          willChange: 'transform'
        }}
        animate={{
          y: [0, -6, 0] // Reduced motion for mobile
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div 
        className="absolute w-2 h-2 sm:w-3 sm:h-3 bg-pink-400 rounded-full"
        style={{ 
          top: "70%", 
          right: "15%",
          willChange: 'transform'
        }}
        animate={{
          x: [0, 6, 0] // Reduced motion for mobile
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Simplified code symbols with responsive sizing */}
      <motion.div 
        className="absolute text-lg sm:text-xl md:text-2xl font-bold text-blue-400 select-none"
        style={{ 
          top: "15%", 
          right: "20%",
          willChange: 'transform'
        }}
        animate={{
          scale: [1, 1.05, 1]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {"</>"}
      </motion.div>

      <motion.div 
        className="absolute text-base sm:text-lg md:text-xl font-bold text-purple-400 select-none"
        style={{ 
          bottom: "20%", 
          left: "15%",
          willChange: 'transform'
        }}
        animate={{
          scale: [1, 0.95, 1]
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {"{}"}
      </motion.div>

      {/* Lottie Animation - Optimized for mobile */}
      <div className="absolute inset-3 sm:inset-4 flex items-center justify-center">
        <Lottie 
          animationData={portfolioAnimation}
          loop={true}
          autoplay={true}
          style={{ 
            width: '85%', 
            height: '85%'
          }}
          rendererSettings={{
            preserveAspectRatio: 'xMidYMid slice',
            progressiveLoad: true
          }}
        />
      </div>

      {/* Simplified rotating ring */}
      <motion.div
        className="absolute inset-1 sm:inset-2 rounded-full border border-dashed sm:border-2 border-gray-600/30"
        style={{ willChange: 'transform' }}
        animate={{ rotate: -360 }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </motion.div>
  );
};

export default Avatar; 