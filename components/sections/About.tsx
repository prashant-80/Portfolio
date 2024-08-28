'use client'

import { motion, AnimatePresence } from 'framer-motion';

export default function About() {   
 {/* About Section */}
 return (
 <section id="about" className="py-20">
 <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
   <div className="md:w-1/2 mb-10 md:mb-0">
     <motion.img
       src='/PXL_20240116_043402396.jpg'
       alt="Prashant Singh"
       className="rounded-full w-64 h-64 object-cover mx-auto"
       initial={{ opacity: 0, scale: 0.5 }}
       animate={{ opacity: 1, scale: 1 }}
       transition={{ duration: 0.5 }}
     />
   </div>
   <div className="md:w-1/2 md:pl-10">
     <h2 className="text-3xl font-bold mb-4">About Me</h2>
     <p className="text-gray-300 mb-6">
       I am a third-year B.Tech student in Electronics and Communication Engineering (ECE) who is highly motivated and
       driven. I am particularly skilled in building RESTful APIs, working with databases, and implementing server-side logic. I
       am a quick learner and able to adapt to new technologies and tools. I am also a strong communicator and collaborator,
       with experience working on team projects.
     </p>
     <motion.a
       href="https://drive.google.com/file/d/1Fl-Pvtz0JHau4WSHNTouyivrH8J4RTTp/view?usp=sharing"
       target="_blank"
       rel="noopener noreferrer"
       whileHover={{ scale: 1.05 }}
       whileTap={{ scale: 0.95 }}
       className="inline-block bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition duration-300"
     >
       View CV
     </motion.a>
   </div>
 </div>
</section>
)
}

