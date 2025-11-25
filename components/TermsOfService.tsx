import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

interface TermsOfServiceProps {
  onBack: () => void;
}

const TermsOfService: React.FC<TermsOfServiceProps> = ({ onBack }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="pt-24 pb-16 min-h-screen bg-gray-50 dark:bg-slate-900"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <button 
          onClick={onBack}
          className="flex items-center text-primary mb-8 hover:underline font-medium"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Home
        </button>

        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">Terms of Service</h1>
          <p className="text-slate-500 dark:text-slate-400 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="prose prose-lg dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 space-y-6">
            <h3 className="text-xl font-semibold text-slate-800 dark:text-white mt-8 mb-3">1. Terms</h3>
            <p>
              By accessing this Website, accessible from the portfolio domain, you are agreeing to be bound by these Website Terms and Conditions of Use 
              and agree that you are responsible for the agreement with any applicable local laws. If you disagree with any of these terms, 
              you are prohibited from accessing this site. The materials contained in this Website are protected by copyright and trade mark law.
            </p>

            <h3 className="text-xl font-semibold text-slate-800 dark:text-white mt-8 mb-3">2. Use License</h3>
            <p>
              Permission is granted to temporarily download one copy of the materials on Néné's Portfolio's Website for personal, 
              non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>modify or copy the materials;</li>
              <li>use the materials for any commercial purpose or for any public display;</li>
              <li>attempt to reverse engineer any software contained on Néné's Portfolio's Website;</li>
              <li>remove any copyright or other proprietary notations from the materials; or</li>
              <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-800 dark:text-white mt-8 mb-3">3. Disclaimer</h3>
            <p>
              All the materials on Néné's Portfolio's Website are provided "as is". Néné's Portfolio makes no warranties, may it be expressed or implied, 
              therefore negates all other warranties. Furthermore, Néné's Portfolio does not make any representations concerning the accuracy or reliability 
              of the use of the materials on its Website or otherwise relating to such materials or any sites linked to this Website.
            </p>

            <h3 className="text-xl font-semibold text-slate-800 dark:text-white mt-8 mb-3">4. Limitations</h3>
            <p>
              Néné's Portfolio or its suppliers will not be hold accountable for any damages that will arise with the use or inability to use the materials 
              on Néné's Portfolio's Website, even if Néné's Portfolio or an authorize representative of this Website has been notified, orally or written, 
              of the possibility of such damage.
            </p>

            <h3 className="text-xl font-semibold text-slate-800 dark:text-white mt-8 mb-3">5. Governing Law</h3>
            <p>
              Any claim related to Néné's Portfolio's Website shall be governed by the laws of France without regards to its conflict of law provisions.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TermsOfService;