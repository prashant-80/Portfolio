'use client'

import { motion, AnimatePresence } from 'framer-motion';

export default function Hero() {
{/* Hero Section */}
    return (
<section id="hero" className="h-screen flex items-center justify-center relative overflow-hidden">
{/* Add this new div for the animated balls */}
<div className="absolute inset-0 z-0 pointer-events-none">
  {[...Array(20)].map((_, index) => (
    <motion.div
      key={index}
      className="absolute w-2 h-2 bg-purple-500 rounded-full opacity-30"
      initial={{
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
      }}
      animate={{
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
      }}
      transition={{
        duration: 10 + Math.random() * 20,
        repeat: Infinity,
        repeatType: "reverse",
      }}
    />
  ))}
</div>

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="text-center z-10"
>
  <motion.h1
    initial={{ scale: 0.5 }}
    animate={{ scale: 1 }}
    transition={{ duration: 0.5, delay: 0.2 }}
    className="text-5xl md:text-7xl font-bold mb-4"
  >
    Prashant Singh
  </motion.h1>
  <motion.p
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5, delay: 0.5 }}
    className="text-xl md:text-2xl text-gray-300"
  >
    Web Developer and Problem Solver
  </motion.p>
</motion.div>
<motion.div
  animate={{
    scale: [1, 1.1, 1],
    rotate: [0, 5, -5, 0],
  }}
  transition={{ duration: 10, repeat: Infinity }}
  className="absolute inset-0 z-0"
>
  <div className="absolute inset-0 bg-gradient-to-br from-purple-800 to-blue-600 opacity-30" />
</motion.div>
</section>  
)
}