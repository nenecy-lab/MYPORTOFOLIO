import React from 'react';

interface FooterProps {
  onNavigate: (view: 'privacy' | 'terms') => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-white dark:bg-slate-950 py-8 border-t border-gray-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p className="text-slate-600 dark:text-slate-400 text-sm">
            © {new Date().getFullYear()} <span className="font-bold text-primary">Néné</span>. All rights reserved.
          </p>
        </div>
        <div className="flex space-x-6">
          <button 
            onClick={() => onNavigate('privacy')} 
            className="text-slate-500 hover:text-primary text-sm transition-colors focus:outline-none"
          >
            Privacy Policy
          </button>
          <button 
            onClick={() => onNavigate('terms')} 
            className="text-slate-500 hover:text-primary text-sm transition-colors focus:outline-none"
          >
            Terms of Service
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;