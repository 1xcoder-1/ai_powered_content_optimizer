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
    <section className="clean-card p-8 rounded-2xl transition-all duration-300 hover-card h-full flex flex-col w-full max-w-full">
      <div className="flex items-center mb-8">
        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center mr-5 flex-shrink-0 shadow-lg">
          <span className="text-white font-bold text-xl">1</span>
        </div>
        <div>
          <h2 className="text-3xl font-bold text-indigo-700 section-title">Original Content</h2>
          <p className="text-gray-500 text-base mt-2">{inputContent.length} characters</p>
        </div>
      </div>
      
      <div className="relative flex-grow mb-8">
        <textarea
          className="w-full h-full min-h-[250px] p-5 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 resize-none text-gray-800 placeholder-gray-400 shadow-sm text-lg"
          placeholder="Paste the content you want to improve here..."
          value={inputContent}
          onChange={onInputContentChange}
        />
        <div className="absolute bottom-4 right-4 text-sm text-gray-400">
          {inputContent.length}/5000
        </div>
      </div>

      <div className="flex items-center mb-8">
        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center mr-5 flex-shrink-0 shadow-lg">
          <span className="text-white font-bold text-xl">2</span>
        </div>
        <div>
          <h2 className="text-3xl font-bold text-indigo-700 section-title">Optimization Goal</h2>
          <p className="text-gray-500 text-base mt-2">Tell AI how to improve your content</p>
        </div>
      </div>
      
      <div className="relative flex-grow mb-8">
        <textarea
          className="w-full h-full min-h-[180px] p-5 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 resize-none text-gray-800 placeholder-gray-400 shadow-sm text-lg"
          placeholder="E.g., 'Make it more persuasive and add strong calls-to-action.' or 'Simplify the language for a 5th-grade reading level.'"
          value={optimizationGoal}
          onChange={onGoalChange}
        />
        <div className="absolute bottom-4 right-4 text-sm text-gray-400">
          {optimizationGoal.length}/1000
        </div>
      </div>

      {error && (
        <div className="p-5 mb-8 text-base text-red-700 bg-red-50 rounded-xl border border-red-200 flex items-start" role="alert">
          <svg className="w-6 h-6 mr-3 flex-shrink-0 mt-0.5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          <div>
            <span className="font-semibold">Error:</span> {error}
          </div>
        </div>
      )}

      <button
        onClick={onOptimize}
        disabled={isLoading || !inputContent.trim()}
        className="w-full flex items-center justify-center modern-button text-white font-bold py-5 px-8 rounded-xl text-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-[1.02] flex-shrink-0 hover-card shadow-lg"
      >
        {isLoading ? (
          <>
            <div className="mr-4">
              <Loader />
            </div>
            <span>Optimizing...</span>
          </>
        ) : (
          <>
            <MagicWandIcon className="w-7 h-7 mr-4" />
            Optimize Content
          </>
        )}
      </button>
      
      <div className="mt-8 text-center text-gray-500 text-sm flex-shrink-0">
        <div className="flex items-center justify-center space-x-6">
          <span className="flex items-center">
            <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
            </svg>
            Secure & Private
          </span>
          <span className="flex items-center">
            <svg className="w-5 h-5 mr-2 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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