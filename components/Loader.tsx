import React from 'react';

const Loader: React.FC = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="relative flex flex-col items-center">
        <div className="w-16 h-16 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></div>
        <span className="mt-4 text-primary font-bold text-lg animate-pulse">Loading...</span>
      </div>
    </div>
  );
};

export default Loader;