'use client'

import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';


export default function Footer() {
     {/* Footer */}
     return (
     <footer className="bg-gray-800 py-8">
     <div className="container mx-auto px-4">
       <div className="flex justify-center space-x-6">
         <motion.a
           href="https://github.com/prashant-80"
           target="_blank"
           rel="noopener noreferrer"
           whileHover={{ scale: 1.2, rotate: 5 }}
           whileTap={{ scale: 0.9 }}
         >
           <FaGithub className="w-6 h-6 text-gray-400 hover:text-white transition-colors duration-300" />
         </motion.a>
         <motion.a
           href="https://www.linkedin.com/in/prashant-singh-1a089824a/"
           target="_blank"
           rel="noopener noreferrer"
           whileHover={{ scale: 1.2, rotate: 5 }}
           whileTap={{ scale: 0.9 }}
         >
           <FaLinkedin className="w-6 h-6 text-gray-400 hover:text-white transition-colors duration-300" />
         </motion.a>
         <motion.a
           href="https://x.com/PrashantSi5481"
           target="_blank"
           rel="noopener noreferrer"
           whileHover={{ scale: 1.2, rotate: 5 }}
           whileTap={{ scale: 0.9 }}
         >
           <FaTwitter className="w-6 h-6 text-gray-400 hover:text-white transition-colors duration-300" />
         </motion.a>
       </div>
       <p className="text-center text-gray-400 mt-4">
         © {new Date().getFullYear()} Prashant Singh.
       </p>
     </div>
   </footer>
   )
}