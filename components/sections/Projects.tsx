'use client'

import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '@/data/portfolioData';
import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';

export default function Projects() {
{/* Projects Section */}
return (
<section id="projects" className="py-20  px-7">
<h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {projects.map((project, index) => (
    <motion.div
      key={project.title}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
    >
      <Image
        src={project.image}
        alt={project.title}
        width={400}
        height={300}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 flex items-center justify-between">
          {project.title}
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200">
            <FaGithub size={24} />
          </a>
        </h3>
        <p className="text-gray-400">{project.description}</p>
      </div>
    </motion.div>
  ))}
</div>  
</section>
)
}
