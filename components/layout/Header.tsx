'use client'

import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { useScroll } from 'framer-motion'



export default function Header() {
     {/* Header */}
     const { scrollYProgress } = useScroll();
     return (
<nav className="bg-gray-800 py-4 fixed top-0 left-0 right-0 z-40">
<motion.div
  className="h-1 bg-purple-600 absolute bottom-0 left-0 right-0"
  style={{ scaleX: scrollYProgress }}
/>
<div className="container mx-auto px-4 flex justify-between items-center">
  <a href="#" className="text-2xl font-bold">PS</a>
  <div className="flex items-center space-x-6">
    <a href="#about" className="hover:text-purple-400 transition duration-300">About</a>
    <a href="#skills" className="hover:text-purple-400 transition duration-300">Skills</a>
    <a href="#projects" className="hover:text-purple-400 transition duration-300">Projects</a>
    <a href="#contact" className="hover:text-purple-400 transition duration-300">Contact</a>
  </div>
  <div className="flex items-center space-x-4">
    <motion.a
      href="https://github.com/prashant-80"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="text-gray-300 hover:text-white transition duration-300"
    >
      <FaGithub size={24} />
    </motion.a>
    <motion.a
      href="https://www.linkedin.com/in/prashant-singh-1a089824a/"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="text-gray-300 hover:text-white transition duration-300"
    >
      <FaLinkedin size={24} />
    </motion.a>
    <motion.a
      href="https://mail.google.com/mail/u/0/#inbox"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="text-gray-300 hover:text-white transition duration-300"
    >
      <FaEnvelope size={24} />
    </motion.a>
  </div>
</div>
</nav>  
)
}