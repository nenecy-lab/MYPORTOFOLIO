import React from 'react';
import { SKILLS } from '../constants';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Biography */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="prose prose-lg dark:prose-invert"
          >
             <h3 className="text-2xl font-semibold text-slate-800 dark:text-white mb-4">
              My Journey
             </h3>
             <p className="text-slate-600 dark:text-slate-300 mb-6">
               Hello! I'm Néné, a passionate computer science student currently honing my skills in web and mobile development. 
               My journey began with a curiosity about how websites work, which quickly turned into a love for coding and problem-solving.
             </p>
             <p className="text-slate-600 dark:text-slate-300 mb-6">
               I love turning complex problems into simple, beautiful, and intuitive interface designs. 
               When I'm not coding, I'm exploring new technologies, contributing to open source, or learning about UX/UI best practices.
             </p>
             <div className="grid grid-cols-2 gap-4 mt-8">
               <div className="p-4 bg-gray-50 dark:bg-slate-800 rounded-lg text-center">
                  <span className="block text-3xl font-bold text-primary mb-1">3+</span>
                  <span className="text-sm text-slate-500 dark:text-slate-400">Years Learning</span>
               </div>
               <div className="p-4 bg-gray-50 dark:bg-slate-800 rounded-lg text-center">
                  <span className="block text-3xl font-bold text-primary mb-1">10+</span>
                  <span className="text-sm text-slate-500 dark:text-slate-400">Projects Built</span>
               </div>
             </div>
          </motion.div>

          {/* Skills */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-50 dark:bg-slate-800 p-8 rounded-2xl shadow-sm"
          >
             <h3 className="text-2xl font-semibold text-slate-800 dark:text-white mb-6">
              Technical Skills
             </h3>
             <div className="space-y-6">
               {SKILLS.map((skill) => (
                 <div key={skill.name}>
                   <div className="flex justify-between mb-1">
                     <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{skill.name}</span>
                     <span className="text-sm font-medium text-slate-500 dark:text-slate-400">{skill.level}%</span>
                   </div>
                   <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-2.5">
                     <div 
                        className="bg-primary h-2.5 rounded-full transition-all duration-1000 ease-out" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                   </div>
                 </div>
               ))}
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;