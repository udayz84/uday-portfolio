"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaExternalLinkAlt } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { fadeInAnimationVariants } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Avatar from "@/components/Avatar";
import { useState, useEffect } from "react";

export default function Home() {
  const skills = {
    languages: ["Python", "Java", "C", "C++", "JavaScript", "TypeScript"],
    tools: ["Git", "Windows", "Cursor"],
    frameworks: ["React", "Next.js", "HTML", "CSS"],
    technologies: ["SQL", "MongoDB", "AWS services"]
  };

  const education = [
    {
      school: "MVGR College of Engineering",
      degree: "B.Tech, IT",
      period: "2023-26",
      location: "Vizianagaram",
      grade: "CGPA: 7.5"
    },
    {
      school: "Dadi Institute",
      degree: "Diploma, EEE",
      period: "2020-23",
      location: "Anakapalli",
      grade: "Percentage: 77%"
    },
    {
      school: "Bhashyam Public School",
      degree: "CBSE",
      period: "2019-20",
      location: "Vizag",
      grade: "Percentage: 99%"
    }
  ];

  const projects = [
    {
      title: "Food Delivery Website",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      description: `A comprehensive food delivery platform featuring user authentication, restaurant browsing, 
        cart management, and order tracking. Built with React for the frontend and Node.js/Express for the backend, 
        with MongoDB for data storage. Includes responsive design, real-time order updates, and secure payment integration.`,
      github: "https://github.com/udayz84/Food-Delivery",
      demo: "" // You can provide this link if you have a live demo
    },
    {
      title: "E-Commerce Platform",
      tech: ["MERN Stack", "Redux", "Stripe", "JWT"],
      description: `A full-featured e-commerce application with user authentication, product catalog, shopping cart, 
        and payment processing. Implements Redux for state management, JWT for authentication, and Stripe for payments. 
        Features include product search, filtering, user reviews, and admin dashboard for product management.`,
      github: "https://github.com/udayz84/E-Commerce",
      demo: "" // You can provide this link if you have a live demo
    },
    {
      title: "Netflix Clone",
      tech: ["React", "Firebase", "TMDB API", "CSS3"],
      description: `A Netflix-inspired streaming platform clone featuring movie browsing, search functionality, 
        and user authentication. Built with React and integrated with TMDB API for movie data. Includes Firebase 
        for backend services, responsive design, and smooth animations for an engaging user experience.`,
      github: "https://github.com/udayz84/netflix-clone",
      demo: "" // You can provide this link if you have a live demo
    },
    {
      title: "Spotify Clone",
      tech: ["HTML", "CSS", "JavaScript", "Web APIs"],
      description: `A Spotify-inspired music player application with playlist management, audio controls, 
        and responsive design. Built using vanilla JavaScript with Web Audio APIs for music playback. 
        Features include custom audio controls, playlist creation, and modern UI design with smooth transitions.`,
      github: "https://github.com/udayz84/spotify-clone",
      demo: "" // You can provide this link if you have a live demo
    },

    {
      title: "Newkundi Chatbot",
      tech: ["TypeScript", "Next.js", "AI Integration", "Redis", "TailwindCSS"],
      description: `An intelligent chatbot application built with TypeScript and Next.js, featuring advanced 
        conversational AI capabilities, real-time message processing, and seamless user interactions. 
        Implements modern TypeScript patterns, Redis for efficient data handling, and responsive design 
        with TailwindCSS for optimal user experience across all devices.`,
      github: "https://github.com/udayz84/chat-app",
      demo: "" // You can provide this link if you have a live demo
    }
  ];

  // Indian language greetings
  const greetings = [
    { text: "नमस्ते", lang: "Hindi" },
    { text: "Hello", lang: "English" },
    { text: "வணக்கம்", lang: "Tamil" },
    { text: "నమస్కారం", lang: "Telugu" },
    { text: "ನಮಸ್ಕಾರ", lang: "Kannada" },
    { text: "നമസ്കാരം", lang: "Malayalam" },
    { text: "नमस्कार", lang: "Marathi" },
    { text: "নমস্কার", lang: "Bengali" },
    { text: "ਸਤ ਸ੍ਰੀ ਅਕਾਲ", lang: "Punjabi" },
    { text: "નમસ્તે", lang: "Gujarati" }
  ];

  const [currentGreeting, setCurrentGreeting] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGreeting((prev) => (prev + 1) % greetings.length);
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval);
  }, [greetings.length]);

  return (
    <>
      <Navbar />
      
      {/* Optimized Stars Background */}
      <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none" style={{ zIndex: -10 }}>
        {/* Reduced to 30 static stars for better mobile performance */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={`global-star-${i}`}
            className="absolute rounded-full bg-white"
            style={{
              width: Math.random() * 2 + 0.5 + 'px',
              height: Math.random() * 2 + 0.5 + 'px',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              willChange: 'opacity, transform'
            }}
            animate={{
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: Math.random() * 4 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
        
        {/* Reduced moving stars for mobile */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={`moving-star-${i}`}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 1.5 + 0.5 + 'px',
              height: Math.random() * 1.5 + 0.5 + 'px',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `hsl(${Math.random() * 60 + 200}, 60%, 80%)`,
              willChange: 'opacity, transform'
            }}
            animate={{
              opacity: [0.2, 0.6, 0.2],
              y: [0, -20, 0],
            }}
            transition={{
              duration: Math.random() * 6 + 4,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <main className="min-h-screen bg-black text-white relative">
        {/* Hero Section */}
        <section className="min-h-screen relative overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 pointer-events-none" />
          
          {/* Reduced hero-specific animated stars for mobile */}
          <div className="absolute inset-0 pointer-events-none" style={{ zIndex: -5 }}>
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={`hero-star-${i}`}
                className="absolute rounded-full"
                style={{
                  width: Math.random() * 3 + 1 + 'px',
                  height: Math.random() * 3 + 1 + 'px',
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  background: `hsl(${Math.random() * 60 + 200}, 70%, 70%)`,
                  willChange: 'opacity, transform'
                }}
                animate={{
                  opacity: [0.2, 0.7, 0.2],
                  scale: [0.8, 1.1, 0.8],
                }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>

          {/* Simplified moving particles for mobile */}
          <div className="absolute inset-0 pointer-events-none" style={{ zIndex: -5 }}>
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={`particle-${i}`}
                className="absolute w-1 h-1 bg-blue-400 rounded-full"
                style={{
                  willChange: 'transform, opacity'
                }}
                initial={{ 
                  x: Math.random() * 100 + "%",
                  y: "100%",
                  opacity: 0
                }}
                animate={{
                  y: "-10%",
                  opacity: [0, 0.6, 0],
                }}
                transition={{
                  duration: Math.random() * 6 + 4,
                  repeat: Infinity,
                  delay: Math.random() * 3,
                  ease: "linear"
                }}
              />
            ))}
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-10 lg:gap-12 relative z-10">
            <motion.div 
              className="flex-1 space-y-6 sm:space-y-8 relative z-20 text-center lg:text-left"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {/* Animated multilingual greetings - responsive */}
              <div className="h-16 sm:h-20 flex items-center justify-center lg:justify-start">
                <motion.h1 
                  key={currentGreeting}
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  style={{ willChange: 'opacity, transform' }}
                >
                  <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                    {greetings[currentGreeting].text}
                  </span>
                </motion.h1>
              </div>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  I'm Uday
                </span>
              </h2>
              
              <h3 className="text-xl sm:text-2xl md:text-3xl text-gray-400">
                Full Stack Developer
              </h3>
              <p className="text-base sm:text-lg text-gray-300 max-w-xl mx-auto lg:mx-0">
                Passionate about creating efficient, user-friendly web applications
                with modern technologies. Specializing in Next.js, React, and Node.js and more.
                Strong foundation in Data Structures & Algorithms with 150+ problems solved.
              </p>
              
              {/* Mobile-optimized buttons */}
              <div className="flex flex-col sm:flex-row gap-4 relative z-50 items-center lg:items-start">
                <button
                  onClick={() => {
                    console.log('View My Work clicked');
                    const projectsSection = document.getElementById('projects');
                    if (projectsSection) {
                      projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                  className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 hover:bg-blue-700 rounded-full text-white font-semibold cursor-pointer transition-all duration-200 shadow-lg hover:shadow-xl relative z-50 text-center touch-manipulation"
                  style={{ pointerEvents: 'auto', zIndex: 9999 }}
                >
                  View My Work
                </button>
                
                <a
                  href="/23335A1213 (1).pdf"
                  download="Uday_Znanam_Resume.pdf"
                  className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gray-700 hover:bg-gray-600 border-2 border-gray-600 rounded-full text-white font-semibold transition-all duration-200 shadow-lg hover:shadow-xl relative z-50 text-center inline-block touch-manipulation"
                  style={{ pointerEvents: 'auto', zIndex: 9999 }}
                >
                  Download Resume
                </a>
              </div>
            </motion.div>

            <motion.div
              className="flex-1 flex justify-center order-first lg:order-last"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Avatar />
            </motion.div>
          </div>
        </section>

        {/* About/Experience Section */}
        <section id="about" className="px-4 sm:px-6 lg:px-8 xl:px-24 py-12 sm:py-16 lg:py-20 bg-black/5 backdrop-blur-sm relative">
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              About Me
            </motion.h2>
            <motion.p 
              className="text-base sm:text-lg text-gray-300 max-w-4xl mx-auto text-center leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              I'm a passionate Full Stack Developer currently pursuing B.Tech in Information Technology. 
              With strong foundations in both frontend and backend technologies, I enjoy building complete 
              web solutions that solve real-world problems. My journey in programming has led me to master 
              various technologies and solve 150+ coding problems, strengthening my algorithmic thinking.
            </motion.p>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="px-4 sm:px-6 lg:px-8 xl:px-24 py-12 sm:py-16 lg:py-20 bg-black/10 backdrop-blur-sm relative">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center">Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
              {Object.entries(skills).map(([category, items], idx) => (
                <motion.div 
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1, duration: 0.5, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-lg sm:text-xl font-semibold mb-4 capitalize">{category}</h3>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {items.map((skill, index) => (
                      <span key={index} className="bg-zinc-800 px-3 sm:px-4 py-2 rounded-full text-sm touch-manipulation">
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="px-4 sm:px-6 lg:px-8 xl:px-24 py-12 sm:py-16 lg:py-20 bg-black/20 backdrop-blur-sm relative">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center">Education</h2>
            <div className="space-y-6 sm:space-y-8">
              {education.map((edu, index) => (
                <motion.div 
                  key={index}
                  className="border-l-2 border-gray-700 pl-4 sm:pl-6 relative"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.4, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  <div className="absolute w-3 h-3 bg-gray-700 rounded-full -left-[7px] top-2" />
                  <h3 className="text-lg sm:text-xl font-semibold">{edu.school}</h3>
                  <p className="text-gray-400 text-sm sm:text-base">{edu.degree}</p>
                  <p className="text-gray-500 text-sm">{edu.period} | {edu.location}</p>
                  <p className="text-gray-400 text-sm sm:text-base">{edu.grade}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="px-4 sm:px-6 lg:px-8 xl:px-24 py-12 sm:py-16 lg:py-20 bg-black/10 backdrop-blur-sm relative scroll-mt-20">
          <div className="max-w-7xl mx-auto">
            <motion.h2 
              className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-12 sm:mb-16 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              Featured Projects
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  custom={index}
                  className="bg-zinc-900 rounded-xl p-6 sm:p-8 border border-zinc-800 hover:border-zinc-700 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 flex flex-col h-full touch-manipulation"
                >
                  {/* Project Header */}
                  <div className="mb-6">
                    <h3 className="text-xl sm:text-2xl font-bold mb-4 text-white leading-tight">
                      {project.title}
                    </h3>
                    
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, techIndex) => (
                        <span 
                          key={techIndex} 
                          className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs font-medium text-blue-300 hover:from-blue-500/30 hover:to-purple-500/30 transition-all duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Project Description */}
                  <div className="flex-grow mb-6">
                    <p className="text-gray-400 leading-relaxed text-sm">
                      {project.description}
                    </p>
                  </div>
                  
                  {/* Project Links */}
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-auto">
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-4 sm:px-6 py-3 bg-zinc-800 hover:bg-zinc-700 rounded-lg text-sm font-semibold transition-all duration-200 border border-zinc-700 hover:border-zinc-600 flex-1 touch-manipulation"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <FaGithub className="w-4 h-4" />
                        GitHub
                      </motion.a>
                    )}
                    {project.demo && (
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-4 sm:px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm font-semibold transition-all duration-200 flex-1 touch-manipulation"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <FaExternalLinkAlt className="w-4 h-4" />
                        Live Demo
                      </motion.a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="px-4 sm:px-6 lg:px-8 xl:px-24 py-12 sm:py-16 lg:py-20 bg-black/20 backdrop-blur-sm relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              Let's Connect
            </motion.h2>
            
            <motion.p 
              className="text-base sm:text-lg text-gray-300 mb-8 sm:mb-12 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              I'm always open to discussing new opportunities, collaborating on interesting projects, 
              or just having a chat about technology. Feel free to reach out!
            </motion.p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
              <motion.a
                href="https://github.com/udayz84"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-6 py-3 bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-all duration-200 border border-zinc-700 hover:border-zinc-600 touch-manipulation"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGithub className="w-5 h-5" />
                <span className="font-medium">GitHub</span>
              </motion.a>
              
              <motion.a
                href="https://linkedin.com/in/uday-znanam"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-all duration-200 touch-manipulation"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaLinkedin className="w-5 h-5" />
                <span className="font-medium">LinkedIn</span>
              </motion.a>
              
              <motion.a
                href="https://leetcode.com/udayz84"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-6 py-3 bg-orange-600 hover:bg-orange-700 rounded-lg transition-all duration-200 touch-manipulation"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <SiLeetcode className="w-5 h-5" />
                <span className="font-medium">LeetCode</span>
              </motion.a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
