import type { FC, ChangeEvent } from 'react';
import { MagicWandIcon, Loader } from './Icons';

interface InputSectionProps {
  inputContent: string;
  optimizationGoal: string;
  isLoading: boolean;
  error: string | null;
  onInputContentChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  onGoalChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  onOptimize: () => void;
}

const InputSection: FC<InputSectionProps> = ({
  inputContent,
  optimizationGoal,
  isLoading,
  error,
  onInputContentChange,
  onGoalChange,
  onOptimize
}) => {
  return (
    <section className="glass-card p-6 md:p-8 rounded-2xl transition-all duration-300 hover:shadow-2xl h-full flex flex-col w-full max-w-full modern-card">
      <div className="flex items-center mb-6">
        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center mr-4 flex-shrink-0">
          <span className="text-white font-bold text-lg">1</span>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-indigo-300 section-title">Original Content</h2>
          <p className="text-gray-400 text-sm mt-1">{inputContent.length} characters</p>
        </div>
      </div>
      
      <div className="relative flex-grow mb-6">
        <textarea
          className="w-full h-full min-h-[200px] p-4 bg-gray-800/50 border border-gray-700 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-none text-white placeholder-gray-500"
          placeholder="Paste the content you want to improve here..."
          value={inputContent}
          onChange={onInputContentChange}
        />
        <div className="absolute bottom-3 right-3 text-xs text-gray-500">
          {inputContent.length}/5000
        </div>
      </div>

      <div className="flex items-center mb-6">
        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center mr-4 flex-shrink-0">
          <span className="text-white font-bold text-lg">2</span>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-indigo-300 section-title">Optimization Goal</h2>
          <p className="text-gray-400 text-sm mt-1">Tell AI how to improve your content</p>
        </div>
      </div>
      
      <div className="relative flex-grow mb-6">
        <textarea
          className="w-full h-full min-h-[150px] p-4 bg-gray-800/50 border border-gray-700 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-none text-white placeholder-gray-500"
          placeholder="E.g., 'Make it more persuasive and add strong calls-to-action.' or 'Simplify the language for a 5th-grade reading level.'"
          value={optimizationGoal}
          onChange={onGoalChange}
        />
        <div className="absolute bottom-3 right-3 text-xs text-gray-500">
          {optimizationGoal.length}/1000
        </div>
      </div>

      {error && (
        <div className="p-4 mb-6 text-sm text-red-300 bg-red-900/30 rounded-xl border border-red-700/50 backdrop-blur-sm animate-pulse" role="alert">
          <div className="flex items-start">
            <svg className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            <div>
              <span className="font-medium">Error:</span> {error}
            </div>
          </div>
        </div>
      )}

      <button
        onClick={onOptimize}
        disabled={isLoading || !inputContent.trim()}
        className="w-full flex items-center justify-center gradient-button text-white font-bold py-4 px-6 rounded-xl text-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-[1.02] flex-shrink-0 modern-card"
      >
        {isLoading ? (
          <>
            <Loader />
            <span className="ml-3">Optimizing...</span>
          </>
        ) : (
          <>
            <MagicWandIcon className="w-6 h-6 mr-3" />
            Optimize Content
          </>
        )}
      </button>
      
      <div className="mt-6 text-center text-gray-400 text-xs flex-shrink-0">
        <div className="flex items-center justify-center space-x-4">
          <span className="flex items-center">
            <svg className="w-4 h-4 mr-1 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
            </svg>
            Secure & Private
          </span>
          <span className="flex items-center">
            <svg className="w-4 h-4 mr-1 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
            Powered by Gemini AI
          </span>
        </div>
      </div>
    </section>
  );
};

export default InputSection;