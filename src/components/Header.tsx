import type { FC } from 'react';
import LogoIcon from './LogoIcon';

const Header: FC = () => {
  return (
    <header className="text-center py-10 md:py-12 fade-in">
      <div className="flex flex-col items-center justify-center">
        <div className="relative mb-6">
          <div className="absolute -inset-4 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-2xl blur-lg opacity-20 animate-pulse"></div>
          <div className="relative flex items-center justify-center">
            <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-4 rounded-2xl shadow-xl mr-5">
              <LogoIcon className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              TextFlow AI
            </h1>
          </div>
        </div>
      </div>
      
      <div className="max-w-3xl mx-auto px-4">
        <p className="mt-4 text-gray-600 text-lg sm:text-xl md:text-2xl leading-relaxed">
          Transform your content with intelligent <span className="font-semibold text-indigo-600">AI-powered</span> optimization
        </p>
        
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <span className="inline-flex items-center px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
            AI-Powered
          </span>
          <span className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            Instant Results
          </span>
          <span className="inline-flex items-center px-4 py-2 bg-pink-100 text-pink-800 rounded-full text-sm font-medium">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
            </svg>
            Secure & Private
          </span>
        </div>
      </div>
   
    </header>
  );
};

export default Header;