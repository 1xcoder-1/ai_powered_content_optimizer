# AI Content Optimizer

A modern React-based web application that leverages Google's Gemini AI to optimize and refine text content based on user-defined goals. The application provides a clean, professional interface for content enhancement with real-time optimization capabilities.

## Features

- **AI-Powered Content Optimization**: Uses Google's Gemini AI to rewrite and refine text content
- **Customizable Optimization Goals**: Specify exactly how you want your content improved (e.g., "make it more persuasive," "simplify language," etc.)
- **Real-time Processing**: Instant optimization with loading states and progress indicators
- **Download Capabilities**: Export optimized content as TXT files
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Modern UI**: Glass-morphism design with smooth animations and gradient effects
- **Error Handling**: Comprehensive error handling with retry mechanisms

## Tech Stack

- **Frontend**: React 19 with TypeScript
- **Build Tool**: Vite with Rolldown
- **Styling**: Tailwind CSS v4 with custom animations
- **AI Integration**: Google Gemini API (gemini-2.5-flash-preview-05-20)
- **Code Quality**: ESLint with React hooks and TypeScript support

## Installation

bash
# Clone the repository
git clone <repository-url>
cd ai_powered_content_optimizer

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Lint code
npm run lint

# Preview production build
npm run preview


## Dependencies

### Runtime Dependencies
- `react`: ^19.1.1
- `react-dom`: ^19.1.1
- `html2canvas`: ^1.4.1 (for potential future screenshot functionality)
- `jspdf`: ^3.0.3 (for potential future PDF export functionality)

### Development Dependencies
- `@eslint/js`: ^9.36.0
- `@tailwindcss/postcss`: ^4.1.14
- `@types/node`: ^24.6.0
- `@types/react`: ^19.1.16
- `@types/react-dom`: ^19.1.9
- `@vitejs/plugin-react`: ^5.0.4
- `autoprefixer`: ^10.4.21
- `eslint`: ^9.36.0
- `eslint-plugin-react-hooks`: ^5.2.0
- `eslint-plugin-react-refresh`: ^0.4.22
- `globals`: ^16.4.0
- `postcss`: ^8.5.6
- `tailwindcss`: ^4.1.14
- `typescript`: ~5.9.3
- `typescript-eslint`: ^8.45.0
- `vite`: npm:rolldown-vite@7.1.14

## Usage

1. **Enter Content**: Paste your original text into the "Original Content" textarea
2. **Set Goal**: Specify your optimization goal (e.g., "Make it more professional," "Simplify for clarity")
3. **Optimize**: Click the "Optimize Content" button to process your text
4. **Review**: View the AI-optimized result in the output section
5. **Download**: Export the optimized content as a TXT file

## API Integration

The application integrates with Google's Gemini AI API using a hardcoded API key. The optimization process includes:
- Exponential backoff retry mechanism (5 attempts)
- Comprehensive error handling
- System prompts for consistent optimization quality
- Real-time processing feedback

## Project Structure


src/
├── components/          # React components
│   ├── Header.tsx      # Application header
│   ├── InputSection.tsx # Input area and controls
│   ├── OutputSection.tsx # Results display and download
│   └── Icons.tsx       # SVG icons and loader
├── hooks/
│   └── useContentOptimizer.ts # Main optimization logic
├── App.tsx             # Main application component
├── main.tsx           # React entry point
└── index.css          # Global styles and Tailwind imports


## Configuration

The application uses:
- **TypeScript** for type safety
- **Tailwind CSS** for styling with custom configurations
- **ESLint** for code quality with React-specific rules
- **PostCSS** for CSS processing

## Browser Support

The application supports modern browsers with ES2022+ compatibility. It uses CSS Grid, Flexbox, and modern JavaScript features.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run `npm run lint` to ensure code quality
5. Submit a pull request

## License

This project is proprietary and not currently licensed for public use.

## Notes

- The application includes a hardcoded Google Gemini API key for demonstration purposes
- Error handling includes comprehensive user feedback and retry mechanisms
- The UI features modern design patterns including glass-morphism, smooth animations, and responsive layouts
- Content processing includes character limits (5000 for input, 1000 for optimization goals)
