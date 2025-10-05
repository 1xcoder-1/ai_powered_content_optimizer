import type { FC } from 'react';

interface OutputSectionProps {
  optimizedContent: string;
  isLoading: boolean;
  inputContent?: string;
}

const OutputSection: FC<OutputSectionProps> = ({ optimizedContent, isLoading, inputContent = '' }) => {
  // Function to download content as TXT
  const downloadAsTXT = () => {
    try {
      const blob = new Blob([optimizedContent], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `optimized-content-${new Date().toISOString().slice(0, 19).replace(/:/g, '-')}.txt`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading TXT:', error);
      alert('Failed to download TXT. Please try again.');
    }
  };

  return (
    <section className="glass-card p-6 md:p-8 rounded-2xl transition-all duration-300 hover:shadow-2xl h-full flex flex-col w-full max-w-full modern-card">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mr-4 flex-shrink-0">
            <span className="text-white font-bold text-lg">3</span>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-purple-300 section-title">Optimized Result</h2>
            {optimizedContent && (
              <p className="text-gray-400 text-sm mt-1">{optimizedContent.length} characters</p>
            )}
          </div>
        </div>
        
        {optimizedContent && (
          <div className="flex space-x-2">
            <button 
              onClick={downloadAsTXT}
              className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors flex items-center"
              title="Download as TXT"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
              </svg>
            </button>
          </div>
        )}
      </div>
      
      <div className="flex-grow overflow-hidden flex flex-col w-full max-w-full">
        <div 
          id="optimized-content"
          className="w-full flex-grow overflow-y-auto p-4 bg-gray-800/50 border border-gray-700 rounded-xl text-gray-200 text-sm relative scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800/50 scrollbar-thumb-rounded-full scrollbar-track-rounded-full max-w-full"
        >
          {optimizedContent ? (
            <div className="prose prose-invert max-w-none break-words">
              {optimizedContent}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-center p-8 w-full max-w-full">
              {isLoading ? (
                <>
                  <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mb-4"></div>
                  <p className="text-gray-400 text-lg">AI is working its magic...</p>
                  <p className="text-gray-500 text-sm mt-2">This usually takes 5-10 seconds</p>
                  <div className="mt-4 w-full max-w-md">
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="mb-4 p-3 bg-gray-700/50 rounded-full">
                    <svg className="w-12 h-12 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-300 mb-2">Awaiting Content</h3>
                  <p className="text-gray-500 max-w-md">
                    The optimized content will appear here after you click 'Optimize Content'.
                    Enter your text and optimization goal to get started.
                  </p>
                  <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-md">
                    <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                      <h4 className="font-semibold text-indigo-300 mb-2">Original Length</h4>
                      <p className="text-2xl font-bold">{inputContent.length} chars</p>
                    </div>
                    <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                      <h4 className="font-semibold text-purple-300 mb-2">Status</h4>
                      <p className="text-2xl font-bold">Ready</p>
                    </div>
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </div>
      
      {optimizedContent && (
        <div className="mt-6 pt-4 border-t border-gray-700">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-400">
              {optimizedContent.length} characters
            </div>
            <div className="flex space-x-3">
              <button 
                onClick={downloadAsTXT}
                className="flex items-center text-sm text-gray-300 hover:text-white transition-colors px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg font-medium"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                </svg>
                Download TXT
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default OutputSection;