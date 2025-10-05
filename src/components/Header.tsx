import type { FC } from 'react';

const Header: FC = () => {
  return (
    <header className="text-center py-8 md:py-12 fade-in">
      <div className="inline-block relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg blur opacity-75"></div>
        <h1 className="relative text-4xl sm:text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-indigo-200">
          AI Content Optimizer
        </h1>
      </div>
      <p className="mt-4 text-gray-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
        Refine your text instantly for clarity, tone, and impact using Gemini AI
      </p>
      <div className="mt-6 flex justify-center">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-indigo-500 rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-3 h-3 bg-pink-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>
    </header>
  );
};

export default Header;