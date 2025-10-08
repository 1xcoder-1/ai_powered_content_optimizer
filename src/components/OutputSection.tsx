import type { FC } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

interface OutputSectionProps {
  optimizedContent: string;
  isLoading: boolean;
  inputContent?: string;
}

// const OutputSection: FC<OutputSectionProps> = ({ optimizedContent, isLoading, inputContent = '' }) => {
//   // Function to download content as TXT
//   const downloadAsTXT = () => {
//     try {
//       const blob = new Blob([optimizedContent], { type: 'text/plain' });
//       const url = URL.createObjectURL(blob);
//       const a = document.createElement('a');
//       a.href = url;
//       a.download = `optimized-content-${new Date().toISOString().slice(0, 19).replace(/:/g, '-')}.txt`;
//       document.body.appendChild(a);
//       a.click();
//       document.body.removeChild(a);
//       URL.revokeObjectURL(url);
//     } catch (error) {
//       console.error('Error downloading TXT:', error);
//       alert('Failed to download TXT. Please try again.');
//     }
//   };

//   // Function to download content as PDF
//   const downloadAsPDF = async () => {
//     try {
//       // Create a temporary element for PDF generation with better formatting
//       const tempElement = document.createElement('div');
//       tempElement.style.padding = '30px';
//       tempElement.style.fontFamily = 'Helvetica, Arial, sans-serif';
//       tempElement.style.fontSize = '12pt';
//       tempElement.style.lineHeight = '1.6';
//       tempElement.style.width = '700px';
//       tempElement.style.backgroundColor = 'white';
//       tempElement.style.color = '#333';
//       tempElement.style.whiteSpace = 'pre-wrap';
//       tempElement.style.wordBreak = 'break-word';
      
//       // Format the content for better PDF readability
//       const formattedContent = optimizedContent
//         .replace(/&/g, '&amp;')
//         .replace(/</g, '&lt;')
//         .replace(/>/g, '&gt;')
//         .replace(/\n/g, '<br>');
      
//       tempElement.innerHTML = `<div style="white-space: pre-wrap; word-break: break-word;">${formattedContent}</div>`;
      
//       // Add to document to measure
//       document.body.appendChild(tempElement);
      
//       // Generate canvas from the element with better quality
//       const canvas = await html2canvas(tempElement, {
//         scale: 2.5,
//         useCORS: true,
//         backgroundColor: '#ffffff',
//         logging: false,
//         allowTaint: true
//       });
      
//       // Remove temporary element
//       document.body.removeChild(tempElement);
      
//       // Create PDF with proper dimensions
//       const imgWidth = 210; // A4 width in mm
//       const imgHeight = (canvas.height * imgWidth) / canvas.width;
//       const pdf = new jsPDF({
//         orientation: 'portrait',
//         unit: 'mm',
//         format: 'a4'
//       });
      
//       // Add image to PDF with better quality
//       pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 10, 10, imgWidth - 20, imgHeight - 20);
//       pdf.save(`optimized-content-${new Date().toISOString().slice(0, 19).replace(/:/g, '-')}.pdf`);
//     } catch (error) {
//       console.error('Error downloading PDF:', error);
//       alert('Failed to download PDF. Please try again.');
//     }
//   };

  // Function to copy content to clipboard
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(optimizedContent);
      // Show success feedback
      const button = document.activeElement as HTMLButtonElement;
      const originalText = button.innerHTML;
      button.innerHTML = `
        <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
        </svg>
      `;
      setTimeout(() => {
        button.innerHTML = originalText;
      }, 2000);
    } catch (error) {
      console.error('Error copying to clipboard:', error);
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = optimizedContent;
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand('copy');
        // Show success feedback
        const button = document.activeElement as HTMLButtonElement;
        const originalText = button.innerHTML;
        button.innerHTML = `
          <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
        `;
        setTimeout(() => {
          button.innerHTML = originalText;
        }, 2000);
      } catch (execError) {
        console.error('Fallback copy failed:', execError);
        alert('Failed to copy content. Please try again.');
      }
      document.body.removeChild(textArea);
    }
  };

  return (
    <section className="clean-card p-8 rounded-2xl transition-all duration-300 hover-card h-full flex flex-col w-full max-w-full">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center mr-5 flex-shrink-0 shadow-lg">
            <span className="text-white font-bold text-xl">3</span>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-indigo-700 section-title">Optimized Result</h2>
            {optimizedContent && (
              <p className="text-gray-500 text-base mt-2">{optimizedContent.length} characters</p>
            )}
          </div>
        </div>
        
        {optimizedContent && (
          <div className="flex space-x-3">
            <button 
              onClick={copyToClipboard}
              className="p-3 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors flex items-center shadow-sm hover:shadow-md"
              title="Copy to Clipboard"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
              </svg>
            </button>
            <button 
              onClick={downloadAsTXT}
              className="p-3 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors flex items-center shadow-sm hover:shadow-md"
              title="Download as TXT"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
              </svg>
            </button>
            <button 
              onClick={downloadAsPDF}
              className="p-3 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors flex items-center shadow-sm hover:shadow-md"
              title="Download as PDF"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
              </svg>
            </button>
          </div>
        )}
      </div>
      
      <div className="flex-grow overflow-hidden flex flex-col w-full max-w-full">
        <div 
          id="optimized-content"
          className="w-full flex-grow overflow-y-auto p-5 bg-white border border-gray-300 rounded-xl text-gray-800 text-lg relative scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 scrollbar-thumb-rounded-full scrollbar-track-rounded-full max-w-full shadow-sm"
        >
          {optimizedContent ? (
            <div className="prose max-w-none break-words">
              {optimizedContent}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-center p-10 w-full max-w-full">
              {isLoading ? (
                <>
                  <div className="w-20 h-20 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin mb-6"></div>
                  <h3 className="text-2xl font-bold text-gray-700 mb-3">AI is working its magic...</h3>
                  <p className="text-gray-500 text-lg">This usually takes 5-10 seconds</p>
                  <div className="mt-6 w-full max-w-md">
                    <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full animate-pulse" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="mb-6 p-5 bg-gray-100 rounded-2xl">
                    <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-700 mb-3">Awaiting Content</h3>
                  <p className="text-gray-500 max-w-md text-lg leading-relaxed">
                    The optimized content will appear here after you click 'Optimize Content'.
                    Enter your text and optimization goal to get started.
                  </p>
                  <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5 w-full max-w-md">
                    <div className="bg-gray-50 p-5 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-indigo-600 mb-2">Original Length</h4>
                      <p className="text-2xl font-bold text-gray-800">{inputContent.length} chars</p>
                    </div>
                    <div className="bg-gray-50 p-5 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-indigo-600 mb-2">Status</h4>
                      <p className="text-2xl font-bold text-gray-800">Ready</p>
                    </div>
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </div>
      
      {optimizedContent && (
        <div className="mt-8 pt-6 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-base text-gray-600">
              {optimizedContent.length} characters
            </div>
            <div className="flex flex-wrap gap-3">
              <button 
                onClick={copyToClipboard}
                className="flex items-center text-base text-gray-700 hover:text-gray-900 transition-colors px-5 py-3 bg-gray-100 hover:bg-gray-200 rounded-xl font-semibold shadow-sm hover:shadow-md"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                </svg>
                Copy
              </button>
              <button 
                onClick={downloadAsTXT}
                className="flex items-center text-base text-gray-700 hover:text-gray-900 transition-colors px-5 py-3 bg-gray-100 hover:bg-gray-200 rounded-xl font-semibold shadow-sm hover:shadow-md"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                </svg>
                Download TXT
              </button>
              <button 
                onClick={downloadAsPDF}
                className="flex items-center text-base text-gray-700 hover:text-gray-900 transition-colors px-5 py-3 bg-gray-100 hover:bg-gray-200 rounded-xl font-semibold shadow-sm hover:shadow-md"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                </svg>
                Download PDF
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default OutputSection;
