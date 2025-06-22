"use client";

import { motion } from "framer-motion";
import Lottie from "lottie-react";
import portfolioAnimation from "../../public/porfolio.json";

const Avatar = () => {
  return (
    <motion.div
      className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Rotating background circle */}
      <motion.div 
        className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30"
        animate={{ rotate: 360 }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      {/* Rotating decorative circles */}
      <motion.div 
        className="absolute w-4 h-4 bg-yellow-400 rounded-full"
        style={{ top: "20%", left: "10%" }}
        animate={{
          rotate: 360,
          y: [0, -10, 0]
        }}
        transition={{
          rotate: { duration: 15, repeat: Infinity, ease: "linear" },
          y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
        }}
      />

      <motion.div 
        className="absolute w-3 h-3 bg-pink-400 rounded-full"
        style={{ top: "70%", right: "15%" }}
        animate={{
          rotate: -360,
          x: [0, 10, 0]
        }}
        transition={{
          rotate: { duration: 12, repeat: Infinity, ease: "linear" },
          x: { duration: 4, repeat: Infinity, ease: "easeInOut" }
        }}
      />
      
      {/* Rotating code symbols */}
      <motion.div 
        className="absolute text-2xl font-bold text-blue-400"
        style={{ top: "15%", right: "20%" }}
        animate={{
          rotate: 360,
          scale: [1, 1.1, 1]
        }}
        transition={{
          rotate: { duration: 18, repeat: Infinity, ease: "linear" },
          scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        {"</>"}
      </motion.div>

      <motion.div 
        className="absolute text-xl font-bold text-purple-400"
        style={{ bottom: "20%", left: "15%" }}
        animate={{
          rotate: -360,
          scale: [1, 0.9, 1]
        }}
        transition={{
          rotate: { duration: 16, repeat: Infinity, ease: "linear" },
          scale: { duration: 2.5, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        {"{}"}
      </motion.div>

      {/* Lottie Animation - Flipped horizontally and centered */}
      <div className="absolute inset-4 flex items-center justify-center">
        <Lottie 
          animationData={portfolioAnimation}
          loop={true}
          autoplay={true}
          style={{ 
            width: '80%', 
            height: '80%',
            transform: 'scaleX(-1)' // Flip horizontally
          }}
        />
      </div>

      {/* Additional rotating ring */}
      <motion.div
        className="absolute inset-2 rounded-full border-2 border-dashed border-gray-600/30"
        animate={{ rotate: -360 }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </motion.div>
  );
};

export default Avatar; 