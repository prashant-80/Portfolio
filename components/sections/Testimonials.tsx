'use client'
 import { testimonials } from '@/data/portfolioData';
 import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useScroll } from 'framer-motion'
import Image from 'next/image'
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from 'react-icons/fa'

export default function Testimonials() {
 const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0)

 const nextTestimonial = () => {
    setCurrentTestimonialIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonialIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-20 bg-gray-800">
      {/* Testimonials Section */}
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center">Achievements </h2>
        <div className="relative max-w-2xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonialIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-700 p-8 rounded-lg shadow-lg"
            >
              <p className="text-lg mb-4">{testimonials[currentTestimonialIndex].text}</p>
              <p className="font-semibold">{testimonials[currentTestimonialIndex].name}</p>
              <p className="text-gray-400">{testimonials[currentTestimonialIndex].role}</p>
            </motion.div>
          </AnimatePresence>
          <button
            onClick={prevTestimonial}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-full bg-purple-600 text-white p-2 rounded-full"
          >
            &#8592;
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-full bg-purple-600 text-white p-2 rounded-full"
          >
            &#8594;
          </button>
        </div>
      </div>
    </section>
  )
}