import type { FC } from 'react';
import Header from './components/Header';
import InputSection from './components/InputSection';
import OutputSection from './components/OutputSection';
import { useContentOptimizer } from './hooks/useContentOptimizer';
import LogoIcon from './components/LogoIcon';

const App: FC = () => {
  const {
    inputContent,
    optimizationGoal,
    optimizedContent,
    isLoading,
    error,
    handleInputContentChange,
    handleGoalChange,
    handleOptimize
  } = useContentOptimizer();

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans p-4 sm:p-6 md:p-8 w-full max-w-full overflow-x-hidden">
      <style>{`
        /* Load Inter font from Google Fonts */
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        body { font-family: 'Inter', sans-serif; }
        
        /* Solid background */
        .solid-bg {
          background-color: #f8fafc;
        }
        
        /* Clean card design */
        .clean-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
          border-radius: 16px;
          width: 100%;
          max-width: 100%;
        }
        
        /* Modern button styles */
        .modern-button {
          background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
          transition: all 0.3s ease;
          border-radius: 12px;
          font-weight: 600;
        }
        .modern-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(79, 70, 229, 0.3);
        }
        .modern-button:disabled {
          opacity: 0.6;
          transform: none;
          box-shadow: none;
        }
        
        .section-title {
          position: relative;
          display: inline-block;
          color: #1e1e1e;
          font-weight: 700;
        }
        
        .section-title::after {
          content: '';
          position: absolute;
          bottom: -6px;
          left: 0;
          width: 50px;
          height: 4px;
          background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
          border-radius: 2px;
        }
        
        /* Consistent spacing */
        .app-container {
          width: 100%;
          max-width: 100%;
          margin: 0 auto;
          padding: 0;
        }
        
        /* Improved spacing for better visual hierarchy */
        .content-section {
          margin-bottom: 2rem;
        }
        
        .section-spacing {
          margin-top: 1rem;
          margin-bottom: 1rem;
        }
        
        .main-content {
          width: 100%;
          max-width: 100%;
          margin: 0;
          padding: 0;
        }
        
        .section-container {
          width: 100%;
          max-width: 100%;
          margin: 0;
          padding: 0;
        }
        
        /* Prevent overflow on all child elements */
        * {
          max-width: 100%;
        }
        
        /* Card hover effect */
        .hover-card {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          transform: translateY(0);
        }
        
        .hover-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }
        
        /* Smooth fade in animation */
        .fade-in {
          animation: fadeIn 0.5s ease-out forwards;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        /* Enhanced Feature cards */
        .feature-card {
          background: #ffffff;
          border: none;
          border-radius: 24px;
          padding: 2.5rem;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 15px 35px -10px rgba(0, 0, 0, 0.1);
          position: relative;
          overflow: hidden;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border: 1px solid #e2e8f0;
        }
        
        .feature-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 6px;
          background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
        }
        
        .feature-card::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(79, 70, 229, 0.03) 0%, rgba(124, 58, 237, 0.03) 100%);
          z-index: -1;
        }
        
        .feature-card:hover {
          transform: translateY(-12px);
          box-shadow: 0 30px 40px -15px rgba(79, 70, 229, 0.25);
        }
        
        .feature-icon-container {
          width: 80px;
          height: 80px;
          border-radius: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
          box-shadow: 0 15px 30px rgba(79, 70, 229, 0.25);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          background: linear-gradient(135deg, #ede9fe 0%, #e0e7ff 100%);
          position: relative;
          overflow: hidden;
        }
        
        .feature-icon-container::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transform: rotate(45deg);
          transition: all 0.6s ease;
        }
        
        .feature-card:hover .feature-icon-container::before {
          transform: rotate(45deg) translate(20%, 20%);
        }
        
        .feature-card:hover .feature-icon-container {
          transform: scale(1.1) rotate(15deg);
          box-shadow: 0 20px 40px rgba(79, 70, 229, 0.35);
        }
        
        /* Modern decorative elements */
        .decorative-circle {
          position: absolute;
          border-radius: 50%;
          background: linear-gradient(135deg, #c7d2fe 0%, #ddd6fe 100%);
          opacity: 0.3;
          z-index: -1;
        }
        
        .decorative-circle-1 {
          width: 300px;
          height: 300px;
          top: 10%;
          right: 5%;
        }
        
        .decorative-circle-2 {
          width: 200px;
          height: 200px;
          bottom: 20%;
          left: 5%;
        }
        
        /* Additional decorative elements */
        .decorative-bubble {
          position: absolute;
          border-radius: 50%;
          background: linear-gradient(135deg, #a5b4fc 0%, #c7d2fe 100%);
          z-index: -1;
        }
        
        /* How it works section */
        .step-card {
          background: #ffffff;
          border: none;
          border-radius: 20px;
          padding: 2rem;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 10px 25px -10px rgba(0, 0, 0, 0.1);
          position: relative;
          overflow: hidden;
          border: 1px solid #e2e8f0;
        }
        
        .step-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
        }
        
        .step-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 30px -10px rgba(79, 70, 229, 0.2);
        }
        
        .step-number {
          width: 64px;
          height: 64px;
          border-radius: 20px;
          background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
          box-shadow: 0 10px 20px rgba(79, 70, 229, 0.3);
          transition: all 0.3s ease;
        }
        
        .step-number:hover {
          transform: scale(1.1) rotate(5deg);
          box-shadow: 0 15px 25px rgba(79, 70, 229, 0.4);
        }
        
        /* Modern footer */
        .footer-section {
          background: linear-gradient(135deg, #f0f4ff 0%, #e6f0ff 100%);
          border-radius: 24px;
          padding: 3rem 2rem;
          margin: 2rem 0;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
          position: relative;
          overflow: hidden;
        }
        
        .footer-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 6px;
          background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
        }
        
        .footer-section:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }
      `}</style>

      <div className="app-container max-w-full w-full mx-auto relative">
        {/* Decorative elements */}
        <div className="decorative-circle decorative-circle-1"></div>
        <div className="decorative-circle decorative-circle-2"></div>
        
        {/* Additional decorative elements for footer */}
        <div className="decorative-bubble w-24 h-24 top-1/3 right-10 opacity-20 blur-xl"></div>
        <div className="decorative-bubble w-32 h-32 bottom-1/4 left-10 opacity-20 blur-xl"></div>
        
        <Header />
        
        {/* Feature Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 mb-16 max-w-6xl mx-auto px-4">
          <div className="feature-card rounded-2xl p-6 hover-card fade-in">
            <div className="feature-icon-container">
              <svg className="w-10 h-10 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">AI-Powered</h3>
            <p className="text-gray-600 leading-relaxed">
              Leverage cutting-edge AI to transform your content with intelligent optimization.
            </p>
          </div>
          
          <div className="feature-card rounded-2xl p-6 hover-card fade-in">
            <div className="feature-icon-container">
              <svg className="w-10 h-10 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Custom Goals</h3>
            <p className="text-gray-600 leading-relaxed">
              Define your own optimization goals for personalized content refinement.
            </p>
          </div>
          
          <div className="feature-card rounded-2xl p-6 hover-card fade-in">
            <div className="feature-icon-container">
              <svg className="w-10 h-10 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Export Ready</h3>
            <p className="text-gray-600 leading-relaxed">
              Download your optimized content in multiple formats for immediate use.
            </p>
          </div>
        </div>
        
        <main className="main-content grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 max-w-6xl mx-auto px-4">
          <div className="section-container w-full max-w-full">
            <InputSection
              inputContent={inputContent}
              optimizationGoal={optimizationGoal}
              isLoading={isLoading}
              error={error}
              onInputContentChange={handleInputContentChange}
              onGoalChange={handleGoalChange}
              onOptimize={handleOptimize}
            />
          </div>
          
          <div className="section-container w-full max-w-full output-container">
            <OutputSection
              optimizedContent={optimizedContent}
              isLoading={isLoading}
              inputContent={inputContent}
            />
          </div>
        </main>
      
        
        {/* Modern Footer */}
        <footer className="mt-10 py-12 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-3xl shadow-xl">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              {/* Logo and Title - Left Column */}
              <div className="flex flex-col items-center lg:items-start">
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-3 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-110">
                    <LogoIcon className="w-7 h-7 text-white" />
                  </div>
                  <span className="ml-3 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">TextFlow AI</span>
                </div>
                <p className="text-gray-600 text-sm max-w-xs text-center lg:text-left">
                  Transform your content with intelligent AI-powered optimization.
                </p>
              </div>
              
              {/* Social Links - Center Column */}
              <div className="flex justify-center">
                <div className="flex space-x-6">
                  <a href="https://x.com/11xcoder" className="text-gray-500 hover:text-indigo-600 transition-colors duration-300 transform hover:-translate-y-1">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </a>
                  <a href="https://www.instagram.com/1x.coder/" className="text-gray-500 hover:text-indigo-600 transition-colors duration-300 transform hover:-translate-y-1">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.2-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.205-.012 3.584-.07 4.849.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a href="https://www.linkedin.com/in/1xcoder/" className="text-gray-500 hover:text-indigo-600 transition-colors duration-300 transform hover:-translate-y-1">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.645-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                </div>
              </div>
              
              {/* Copyright and Links - Right Column */}
              <div className="flex flex-col items-center lg:items-end">
                <div className="flex flex-wrap justify-center lg:justify-end gap-4 mb-4">
                  <a href="#" className="text-gray-600 hover:text-indigo-600 text-sm transition-colors duration-300">Privacy Policy</a>
                  <a href="#" className="text-gray-600 hover:text-indigo-600 text-sm transition-colors duration-300">Terms of Service</a>
                  <a href="#" className="text-gray-600 hover:text-indigo-600 text-sm transition-colors duration-300">Contact</a>
                </div>
                <p className="text-gray-500 text-sm text-center lg:text-right">
                  © {new Date().getFullYear()} TextFlow AI. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;