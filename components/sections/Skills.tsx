import { motion } from 'framer-motion';
import { skills } from '@/data/portfolioData';

export default function Skills() {
 {/* Skills Section */}
 return (
 <section id="skills" className="py-20 bg-gray-800">
 <div className="container mx-auto px-4">
   <h2 className="text-3xl font-bold mb-10 text-center">My Skills</h2>
   <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
     {skills.map((skill, index) => (
       <motion.div
         key={skill.name}
         initial={{ opacity: 0, y: 20 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.5, delay: index * 0.1 }}
         className="bg-gray-700 rounded-lg p-6 text-center hover:bg-gray-600 transition-colors duration-300"
       >
         <motion.div
           className="text-4xl mb-4"
           whileHover={{ scale: 1.2 }}
           whileTap={{ scale: 0.9 }}
         >
           {skill.icon}
         </motion.div>
         <h3 className="text-lg font-semibold">{skill.name}</h3>
       </motion.div>
     ))}
   </div>
 </div>
</section>  
)
}