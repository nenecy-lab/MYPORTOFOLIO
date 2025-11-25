import React from 'react';
import { Download, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob dark:bg-purple-900 dark:opacity-40"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-2000 dark:bg-blue-900 dark:opacity-40"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-4000 dark:bg-indigo-900 dark:opacity-40"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center gap-12 z-10">
        
        {/* Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-indigo-100 text-primary dark:bg-indigo-900/30 dark:text-indigo-300 text-sm font-semibold mb-4">
              Welcome to my portfolio
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white leading-tight mb-4">
              Hi, I'm <span className="text-primary">Néné</span>
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-slate-600 dark:text-slate-300 mb-6">
              Étudiante en développement informatique & <br className="hidden md:block"/>
              <span className="text-primary font-bold">Web Developer</span>
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-lg mb-8 max-w-lg mx-auto md:mx-0">
              Passionate about creating beautiful, functional, and user-friendly digital experiences. Specializing in modern web and mobile technologies.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-primary hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all hover:scale-105"
              >
                <Mail className="mr-2 h-5 w-5" />
                Contact Me
              </a>
              <button 
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-slate-200 dark:border-slate-700 text-base font-medium rounded-lg text-slate-700 dark:text-white bg-transparent hover:bg-slate-50 dark:hover:bg-slate-800 focus:outline-none transition-all hover:scale-105"
              >
                <Download className="mr-2 h-5 w-5" />
                <a href="components/doc/NENE_BASSENE_CV.pdf" download>Download CV</a>
              </button>
            </div>
          </motion.div>
        </div>

        {/* Hero Image */}
        <div className="w-full md:w-1/2 flex justify-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative"
            >
                <div className="absolute inset-0 bg-primary rounded-full blur-3xl opacity-20"></div>
                <img 
                    src="components/img/MyPhoto.jpeg" 
                    alt="Néné Web Developer" 
                    className="relative w-64 h-64 md:w-96 md:h-96 object-cover rounded-full border-4 border-white dark:border-slate-800 shadow-2xl"
                />
                
                {/* Floating Badges */}
                <div className="absolute top-4 right-0 md:right-8 bg-white dark:bg-slate-800 p-3 rounded-xl shadow-lg animate-bounce duration-1000">
                    <span className="text-2xl">💻</span>
                </div>
                <div className="absolute bottom-8 left-0 md:left-4 bg-white dark:bg-slate-800 p-3 rounded-xl shadow-lg animate-bounce delay-700">
                    <span className="text-2xl">🚀</span>
                </div>
            </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;