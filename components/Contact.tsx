import React from 'react';
import { Mail, MapPin, Phone, Github, Linkedin, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Get In Touch</h2>
          <p className="text-slate-600 dark:text-slate-400">Have a project in mind or want to say hello?</p>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="bg-gray-50 dark:bg-slate-800 p-8 rounded-2xl shadow-sm h-full">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Contact Info</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-indigo-100 dark:bg-slate-700 rounded-lg text-primary dark:text-indigo-300">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-500 dark:text-slate-400">Email</h4>
                    <p className="text-slate-900 dark:text-white font-medium">nenebassene07@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-indigo-100 dark:bg-slate-700 rounded-lg text-primary dark:text-indigo-300">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-500 dark:text-slate-400">Phone</h4>
                    <p className="text-slate-900 dark:text-white font-medium">+212 720-489385</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-indigo-100 dark:bg-slate-700 rounded-lg text-primary dark:text-indigo-300">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-500 dark:text-slate-400">Location</h4>
                    <p className="text-slate-900 dark:text-white font-medium">Al Mostakbal, Sidi Maarouf, Casablanca, Morocco</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h4 className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  <a href="https://github.com/nenecy-lab" className="p-2 bg-white dark:bg-slate-900 rounded-full shadow-md hover:text-primary transition-colors text-slate-600 dark:text-slate-300">
                    <Github size={20}/>
                  </a>
                  <a href="https://www.linkedin.com/in/n%C3%A9n%C3%A9-bass%C3%A8ne/" className="p-2 bg-white dark:bg-slate-900 rounded-full shadow-md hover:text-primary transition-colors text-slate-600 dark:text-slate-300">
                    <Linkedin size={20} />
                  </a>
                  
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3"
          >
            <form className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-slate-700">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  placeholder="Project Inquiry"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full py-4 px-6 bg-primary hover:bg-indigo-700 text-white font-bold rounded-lg shadow-md transition-transform transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;