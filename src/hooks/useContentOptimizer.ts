import { useState, useCallback } from 'react';
import type { ChangeEvent } from 'react';

interface UseContentOptimizerProps {
  initialContent?: string;
  initialGoal?: string;
}

interface UseContentOptimizerReturn {
  inputContent: string;
  optimizationGoal: string;
  optimizedContent: string;
  isLoading: boolean;
  error: string | null;
  handleInputContentChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  handleGoalChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  handleOptimize: () => Promise<void>;
  resetContent: () => void;
}

export const useContentOptimizer = ({
  initialContent = '',
  initialGoal = 'Improve clarity and flow, focusing on a professional business tone.'
}: UseContentOptimizerProps = {}): UseContentOptimizerReturn => {
  const [inputContent, setInputContent] = useState<string>(initialContent);
  const [optimizationGoal, setOptimizationGoal] = useState<string>(initialGoal);
  const [optimizedContent, setOptimizedContent] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleOptimize = useCallback(async () => {
    if (!inputContent.trim()) {
      setError('Please enter the content you wish to optimize.');
      return;
    }

    setIsLoading(true);
    setError(null);
    setOptimizedContent('');

    const systemPrompt: string = "You are a world-class content optimization AI. Your task is to take the user's provided 'Original Content' and rewrite/refine it according to the specified 'Optimization Goal'. Focus on clarity, engagement, and fulfilling the goal precisely. Output only the optimized content, without any commentary or introduction. Ensure the output is well-formatted and easy to read.";

    const userQuery: string = `Original Content:

---
${inputContent}
---

Optimization Goal:

---
${optimizationGoal}`;
    
    // API setup (using empty API key as required by the environment)
    const apiKey: string = "AIzaSyCmzbZ-ksWGc3hg4BYmAZ9FKe-XD9si_qs";
    const model: string = 'gemini-2.5-flash-preview-05-20';
    const apiUrl: string = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

    const payload = {
        contents: [{ parts: [{ text: userQuery }] }],
        systemInstruction: { parts: [{ text: systemPrompt }] },
    };

    const maxRetries: number = 5;
    let attempt: number = 0;

    while (attempt < maxRetries) {
      try {
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });

        if (!response.ok) {
          throw new Error(`API returned status ${response.status}`);
        }

        const result = await response.json();
        const text: string | undefined = result.candidates?.[0]?.content?.parts?.[0]?.text;

        if (text) {
          setOptimizedContent(text);
          break; // Success
        } else {
          throw new Error('API response was malformed or empty.');
        }

      } catch (err) {
        attempt++;
        if (attempt >= maxRetries) {
          console.error("Failed to fetch optimized content after multiple retries:", err);
          // err might be an object, so we handle it gracefully
          setError(`Optimization failed: ${err instanceof Error ? err.message : 'Unknown error'}. Please check your content and try again.`);
        } else {
          const delay: number = Math.pow(2, attempt) * 1000; // Exponential backoff (2s, 4s, 8s, ...)
          await new Promise(resolve => setTimeout(resolve, delay));
        }
      }
    }

    setIsLoading(false);
  }, [inputContent, optimizationGoal]);

  const handleInputContentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInputContent(e.target.value);
  };
  
  const handleGoalChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setOptimizationGoal(e.target.value);
  };

  const resetContent = () => {
    setInputContent('');
    setOptimizationGoal('Improve clarity and flow, focusing on a professional business tone.');
    setOptimizedContent('');
    setError(null);
  };

  return {
    inputContent,
    optimizationGoal,
    optimizedContent,
    isLoading,
    error,
    handleInputContentChange,
    handleGoalChange,
    handleOptimize,
    resetContent
  };
};