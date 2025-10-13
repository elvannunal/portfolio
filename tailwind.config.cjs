/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", 
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Light mode colors
        lightBg: "#fdf7f0",
        lightText: "#1a1a1a",
        
        // Dark mode colors
        darkBg: "#1e1e2f",
        darkText: "#f0f0f5",
        
        // Primary color
        primary: "#9b5de5",
      },
      backgroundColor: {
        darkBg: "#1e1e2f",
        lightBg: "#fdf7f0",
      },
      textColor: {
        darkText: "#f0f0f5",
        lightText: "#1a1a1a",
      },
    },
  },
  plugins: [],
};