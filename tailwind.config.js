/** @type {import('tailwindcss').Config} */

// set primary color
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-color": 'var(--primary-color)',
        "secondary-color": 'var(--secondary-color)',
        "tertiary-color": 'var(--tertiary-color)',
        "quaternary-color": 'var(--quaternary-color)',
        "primary-text": 'var(--primary-text)',
        "secondary-text": 'var(--secondary-text)',
        "tertiary-text": 'var(--tertiary-text)',
        "primary-bg": 'var(--primary-bg)',
        "secondary-bg": 'var(--secondary-bg)',
        "tertiary-bg": 'var(--tertiary-bg)',
        "primary-button": 'var(--primary-button)',
        "secondary-button": 'var(--secondary-button)',
        "tertiary-button": 'var(--tertiary-button)',
      }
      // colors: {
      //   "primary-color": "#3A86FF", // Electric Blue
      //   "secondary-color": "#1E1E1E", // Dark Charcoal
      //   "tertiary-color": "#2C2C2C", // Charcoal Gray
      //   "quaternary-color": "#FFD700", // Gold
      //   "primary-text": "#FFFFFF", // White
      //   "secondary-text": "#B0B0B0", // Light Gray
      //   "tertiary-text": "#808080", // Medium Gray
      //   "primary-bg": "#000000", // Black
      //   "secondary-bg": "#1E1E1E", // Dark Charcoal
      //   "tertiary-bg": "#2C2C2C", // Charcoal Gray
      //   "primary-button": "#00C2FF", // Cyan Blue
      //   "secondary-button": "#FF5E5E", // Red
      //   "tertiary-button": "#00FF00", // Neon Green
      // }
      
    },
  },
  plugins: [],
}

