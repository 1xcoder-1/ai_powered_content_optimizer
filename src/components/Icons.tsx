import type { FC } from 'react';

// Magic Wand Icon component
export const MagicWandIcon: FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 4V2"></path>
    <path d="M15 14V12"></path>
    <path d="M18 4h-2"></path>
    <path d="M18 14h-2"></path>
    <path d="m19 12-5.5 5.5"></path>
    <path d="m14 10.5 5.5 5.5"></path>
    <path d="M10.5 5.5 16 11"></path>
    <path d="M8 10V2"></path>
    <path d="M2 18h2"></path>
    <path d="M14 20v2"></path>
    <path d="M22 18h-2"></path>
    <path d="M2 6h2"></path>
    <path d="M10 22v-2"></path>
    <path d="M20 6v-2"></path>
    <path d="M4 18v2"></path>
    <path d="M6 10H2"></path>
    <path d="M22 10H18"></path>
    <path d="M12 2v-2"></path>
    <path d="M12 22v-2"></path>
  </svg>
);

// Loader component
export const Loader: FC = () => (
  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
  </svg>
);