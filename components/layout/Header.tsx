'use client'

import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaCode, FaLaptopCode, FaTerminal } from 'react-icons/fa';
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
  <div className="flex items-center space-x-5">
    {[
      { href: "https://github.com/prashant-80", icon: FaGithub, name: "GitHub" },
      { href: "https://www.linkedin.com/in/prashant-singh-1a089824a/", icon: FaLinkedin, name: "LinkedIn" },
      { href: "https://leetcode.com/u/prashant801/", icon: FaCode, name: "LeetCode" },
      { href: "https://www.geeksforgeeks.org/user/prashantsie5uh/", icon: FaLaptopCode, name: "GeeksforGeeks" },
      { href: "https://www.codechef.com/users/prashant_53", icon: FaTerminal, name: "CodefChef" },
    ].map((item, index) => (
      <motion.div
        key={index}
        className="relative group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <a
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-white transition duration-300"
        >
          <item.icon size={24} />
        </a>
        <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {item.name}
        </span>
      </motion.div>
    ))}
  </div>
</div>
</nav>  
)
}