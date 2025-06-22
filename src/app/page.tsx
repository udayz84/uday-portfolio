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
      title: "Full Stack Chat Application",
      tech: ["Next.js", "TypeScript", "TailwindCSS", "Redis", "Google Auth"],
      description: `A modern real-time chat application featuring friend requests via email, performant database 
        queries with Redis, and Google authentication. Built with responsive UI using TailwindCSS, 
        protected routes, and real-time messaging capabilities with Next.js and TypeScript.`,
      github: "https://github.com/udayz84/chat-app",
      demo: "" // You can provide this link if you have a live demo
    },
    {
      title: "Advanced Todo List with Weather Integration",
      tech: ["React", "Redux", "Material-UI", "Weather API", "React DnD"],
      description: `A modern task management application with drag-and-drop functionality, weather integration 
        for outdoor tasks, and priority management. Features user authentication, three-column layout 
        (To Do, In Progress, Completed), and real-time weather information with responsive design.`,
      github: "https://github.com/udayz84/advanced-to-do-list",
      demo: "https://advanced-to-do-list-rho.vercel.app"
    },
    {
      title: "React E-Commerce Platform",
      tech: ["React", "JavaScript", "HTML5", "CSS3", "Responsive Design"],
      description: `A modern e-commerce platform built with React and JavaScript, featuring a complete shopping 
        experience with product catalog, shopping cart functionality, and responsive design. The application 
        demonstrates proficiency in React component architecture, state management, and modern web development 
        practices with clean, maintainable code structure and user-friendly interface design.`,
      github: "https://github.com/udayz84/react-ecommerce",
      demo: ""
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
      
      {/* Global Stars Background - Covers entire page */}
      <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none" style={{ zIndex: -10 }}>
        {[...Array(250)].map((_, i) => (
          <motion.div
            key={`global-star-${i}`}
            className="absolute rounded-full bg-white"
            style={{
              width: Math.random() * 3 + 0.5 + 'px',
              height: Math.random() * 3 + 0.5 + 'px',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`, // Fixed to stay within viewport
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [0.5, 1.5, 0.5],
            }}
            transition={{
              duration: Math.random() * 6 + 3,
              repeat: Infinity,
              delay: Math.random() * 4,
              ease: "easeInOut"
            }}
          />
        ))}
        
        {/* Additional moving stars */}
        {[...Array(60)].map((_, i) => (
          <motion.div
            key={`moving-star-${i}`}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 2 + 1 + 'px',
              height: Math.random() * 2 + 1 + 'px',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `hsl(${Math.random() * 60 + 200}, 60%, 80%)` // Blue to purple stars
            }}
            animate={{
              opacity: [0.3, 0.9, 0.3],
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
            }}
            transition={{
              duration: Math.random() * 8 + 5,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut"
            }}
          />
        ))}
        
        {/* Twinkling stars */}
        {[...Array(100)].map((_, i) => (
          <motion.div
            key={`twinkle-star-${i}`}
            className="absolute rounded-full bg-yellow-200"
            style={{
              width: Math.random() * 1.5 + 0.5 + 'px',
              height: Math.random() * 1.5 + 0.5 + 'px',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 1,
              repeat: Infinity,
              delay: Math.random() * 5,
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
          
          {/* Hero-specific animated stars */}
          <div className="absolute inset-0 pointer-events-none" style={{ zIndex: -5 }}>
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={`hero-star-${i}`}
                className="absolute rounded-full"
                style={{
                  width: Math.random() * 4 + 2 + 'px',
                  height: Math.random() * 4 + 2 + 'px',
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  background: `hsl(${Math.random() * 60 + 200}, 70%, 70%)` // Blue to purple range
                }}
                animate={{
                  opacity: [0.3, 1, 0.3],
                  scale: [0.5, 1.2, 0.5],
                  rotate: [0, 180, 360]
                }}
                transition={{
                  duration: Math.random() * 4 + 3,
                  repeat: Infinity,
                  delay: Math.random() * 3,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>

          {/* Moving particles */}
          <div className="absolute inset-0 pointer-events-none" style={{ zIndex: -5 }}>
            {[...Array(10)].map((_, i) => (
              <motion.div
                key={`particle-${i}`}
                className="absolute w-1 h-1 bg-blue-400 rounded-full"
                initial={{ 
                  x: Math.random() * 100 + "%",
                  y: "100%",
                  opacity: 0
                }}
                animate={{
                  y: "-10%",
                  opacity: [0, 0.8, 0],
                  x: [null, `${Math.random() * 20 - 10}%`]
                }}
                transition={{
                  duration: Math.random() * 8 + 6,
                  repeat: Infinity,
                  delay: Math.random() * 5,
                  ease: "linear"
                }}
              />
            ))}
          </div>

          <div className="container mx-auto px-8 pt-32 pb-20 flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
            <motion.div 
              className="flex-1 space-y-8 relative z-20"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Animated multilingual greetings */}
              <div className="h-20 flex items-center">
                <motion.h1 
                  key={currentGreeting}
                  className="text-6xl md:text-7xl font-bold"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                    {greetings[currentGreeting].text}
                  </span>
                </motion.h1>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold">
                <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  I'm Uday
                </span>
              </h2>
              
              <h3 className="text-2xl md:text-3xl text-gray-400">
                Full Stack Developer
              </h3>
              <p className="text-lg text-gray-300 max-w-xl">
                Passionate about creating efficient, user-friendly web applications
                with modern technologies. Specializing in Next.js, React, and Node.js.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 relative z-50">
                <button
                  onClick={() => {
                    console.log('View My Work clicked');
                    const projectsSection = document.getElementById('projects');
                    if (projectsSection) {
                      projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                  className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-full text-white font-semibold cursor-pointer transition-all duration-200 shadow-lg hover:shadow-xl relative z-50"
                  style={{ pointerEvents: 'auto', zIndex: 9999 }}
                >
                  View My Work
                </button>
                
                <a
                  href="/23335A1213 (1).pdf"
                  download="Uday_Znanam_Resume.pdf"
                  className="px-8 py-4 bg-gray-700 hover:bg-gray-600 border-2 border-gray-600 rounded-full text-white font-semibold transition-all duration-200 shadow-lg hover:shadow-xl relative z-50 text-center inline-block"
                  style={{ pointerEvents: 'auto', zIndex: 9999 }}
                >
                  Download Resume
                </a>
              </div>
            </motion.div>

            <motion.div
              className="flex-1 flex justify-center"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <Avatar />
            </motion.div>
          </div>
        </section>

        {/* About/Experience Section */}
        <section id="about" className="px-8 md:px-24 py-20 bg-black/20 backdrop-blur-sm relative">
          <h2 className="text-3xl font-bold mb-12">Experience</h2>
          <div className="max-w-4xl">
            <h3 className="text-xl font-semibold mb-4">Full-Stack Developer Intern</h3>
            <p className="text-gray-400 mb-2">Robustrix IT Solutions | April 2025 - Present | Delhi (remote), India</p>
            <ul className="list-disc list-inside space-y-4 text-gray-300">
              <li>Architected and developed a full-stack, SEO-optimized matrimonial web application using Next.js and TypeScript, achieving a 35% improvement in page load speed.</li>
              <li>Engineered efficient backend infrastructure with Prisma ORM and MongoDB, handling over 10,000 user profiles with 99.9% uptime.</li>
              <li>Implemented user authentication and secure session handling, reducing account abuse by 40%.</li>
              <li>Designed dynamic matchmaking algorithms, increasing accurate match recommendations by 45%.</li>
            </ul>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="px-8 md:px-24 py-20 bg-black/10 backdrop-blur-sm relative">
          <h2 className="text-3xl font-bold mb-12">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl">
            {Object.entries(skills).map(([category, items], idx) => (
              <motion.div 
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold mb-4 capitalize">{category}</h3>
                <div className="flex flex-wrap gap-3">
                  {items.map((skill, index) => (
                    <span key={index} className="bg-zinc-800 px-4 py-2 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="px-8 md:px-24 py-20 bg-black/20 backdrop-blur-sm relative">
          <h2 className="text-3xl font-bold mb-12">Education</h2>
          <div className="space-y-8 max-w-4xl">
            {education.map((edu, index) => (
              <motion.div 
                key={index}
                className="border-l-2 border-gray-700 pl-6 relative"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="absolute w-3 h-3 bg-gray-700 rounded-full -left-[7px] top-2" />
                <h3 className="text-xl font-semibold">{edu.school}</h3>
                <p className="text-gray-400">{edu.degree}</p>
                <p className="text-gray-500">{edu.period} | {edu.location}</p>
                <p className="text-gray-400">{edu.grade}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="px-8 md:px-24 py-20 bg-black/10 backdrop-blur-sm relative scroll-mt-20">
          <motion.h2 
            className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Featured Projects
          </motion.h2>
          
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                custom={index}
                  className="bg-zinc-900 rounded-xl p-8 border border-zinc-800 hover:border-zinc-700 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 flex flex-col h-full"
                >
                  {/* Project Header */}
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold mb-4 text-white leading-tight">
                      {project.title}
                    </h3>
                    
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                        <span 
                          key={techIndex} 
                          className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 px-3 py-1.5 rounded-full text-xs font-medium text-blue-300 hover:from-blue-500/30 hover:to-purple-500/30 transition-all duration-200"
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
                  <div className="flex gap-4 mt-auto">
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-6 py-3 bg-zinc-800 hover:bg-zinc-700 rounded-lg text-sm font-semibold transition-all duration-200 border border-zinc-700 hover:border-zinc-600 flex-1"
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
                        className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg text-sm font-semibold transition-all duration-200 flex-1"
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
        <section id="contact" className="px-8 md:px-24 py-20 bg-black/20 backdrop-blur-sm relative">
          <h2 className="text-3xl font-bold mb-8">Contact</h2>
          <div className="space-y-4 max-w-4xl">
            <p className="text-gray-400">
              Email: <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=udayznanam@gmail.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 underline transition-colors duration-200"
              >
                udayznanam@gmail.com
              </a>
            </p>
            <p className="text-gray-400">
              Mobile: <a 
                href="tel:+917997660838"
                className="text-blue-400 hover:text-blue-300 underline transition-colors duration-200"
              >
                +91 7997660838
              </a>
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
