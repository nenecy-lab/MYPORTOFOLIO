import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

interface PrivacyPolicyProps {
  onBack: () => void;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onBack }) => {
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
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">Privacy Policy</h1>
          <p className="text-slate-500 dark:text-slate-400 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="prose prose-lg dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 space-y-6">
            <p>
              At Néné's Portfolio, accessible from this website, one of our main priorities is the privacy of our visitors. 
              This Privacy Policy document contains types of information that is collected and recorded by us and how we use it.
            </p>

            <h3 className="text-xl font-semibold text-slate-800 dark:text-white mt-8 mb-3">Information We Collect</h3>
            <p>
              The personal information that you are asked to provide, and the reasons why you are asked to provide it, 
              will be made clear to you at the point we ask you to provide your personal information.
            </p>
            <p>
              If you contact us directly via the contact form, we may receive additional information about you such as your name, 
              email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.
            </p>

            <h3 className="text-xl font-semibold text-slate-800 dark:text-white mt-8 mb-3">How We Use Your Information</h3>
            <p>We use the information we collect in various ways, including to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide, operate, and maintain our website</li>
              <li>Improve, personalize, and expand our website</li>
              <li>Understand and analyze how you use our website</li>
              <li>Communicate with you, either directly or through one of our partners</li>
              <li>Send you emails</li>
              <li>Find and prevent fraud</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-800 dark:text-white mt-8 mb-3">Log Files</h3>
            <p>
              Néné's Portfolio follows a standard procedure of using log files. These files log visitors when they visit websites. 
              All hosting companies do this and a part of hosting services' analytics. The information collected by log files include 
              internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, 
              and possibly the number of clicks. These are not linked to any information that is personally identifiable.
            </p>

            <h3 className="text-xl font-semibold text-slate-800 dark:text-white mt-8 mb-3">Third Party Privacy Policies</h3>
            <p>
              Néné's Portfolio's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult 
              the respective Privacy Policies of these third-party ad servers for more detailed information.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PrivacyPolicy;