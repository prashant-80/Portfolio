'use client'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Skills from '@/components/sections/Skills'
import Projects from '@/components/sections/Projects'
import Testimonials from '@/components/sections/Testimonials'
import Contact from '@/components/sections/Contact'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Portfolio() {
   const [showIntro, setShowIntro] = useState(true)
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false)
    }, 2000) 
    return () => clearTimeout(timer)
  }, [])

  


  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      <AnimatePresence>
        {showIntro && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="fixed inset-0 bg-purple-900 flex items-center justify-center z-50"
          >
            <motion.h1
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.5, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-6xl font-bold"
            >
              Hi, I&apos;m Prashant
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-grow mt-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          
        <Header/>
        <section className='py-5'>
        </section>
        <Hero/>
        <About/>
        <Skills/>
        <Projects/>
        <Testimonials/>
        <Contact/>
        <Footer/>
        </motion.div>
      </main>
    </div>
  )
}