import type { FC } from 'react';
import Header from './components/Header';
import InputSection from './components/InputSection';
import OutputSection from './components/OutputSection';
import { useContentOptimizer } from './hooks/useContentOptimizer';

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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white font-sans p-4 sm:p-6 md:p-8 w-full max-w-full overflow-x-hidden">
      <style>{`
        /* Load Inter font from Google Fonts */
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        body { font-family: 'Inter', sans-serif; }
        
        /* Animated gradient background */
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .animated-gradient-bg {
          background: linear-gradient(-45deg, #1a2a6c, #b21f1f, #1a2a6c, #b21f1f);
          background-size: 400% 400%;
          animation: gradientShift 20s ease infinite;
        }
        
        /* Custom styles for modern aesthetic */
        .glass-card {
          background: rgba(30, 30, 40, 0.6);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
          border-radius: 16px;
          width: 100%;
          max-width: 100%;
        }
        
        .gradient-button {
            background: linear-gradient(90deg, #8b5cf6, #6366f1, #8b5cf6);
            background-size: 200% 200%;
            transition: all 0.3s ease;
            animation: gradientShift 3s ease infinite;
        }
        .gradient-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(139, 92, 246, 0.5);
            background-size: 200% 200%;
        }
        .gradient-button:disabled {
            opacity: 0.7;
            transform: none;
            box-shadow: none;
        }
        
        .section-title {
          position: relative;
          display: inline-block;
        }
        
        .section-title::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 100%;
          height: 3px;
          background: linear-gradient(90deg, #8b5cf6, #6366f1);
          border-radius: 2px;
        }
        
        .floating-animation {
          animation: float 6s ease-in-out infinite;
        }
        
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        
        .pulse-animation {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        /* Ensure consistent layout */
        .app-container {
          width: 100%;
          max-width: 100%;
          margin: 0 auto;
          padding: 0;
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
        
        /* Modern card hover effect */
        .modern-card {
          transition: all 0.3s ease;
          transform: translateY(0);
        }
        
        .modern-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2);
        }
        
        /* Smooth fade in animation */
        .fade-in {
          animation: fadeIn 0.5s ease-out forwards;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <div className="app-container max-w-full w-full mx-auto">
        <Header />
        
        <main className="main-content grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mt-6 w-full max-w-full">
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
      </div>
    </div>
  );
};

export default App;