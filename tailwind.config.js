// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Add this line (and others if needed)
    "./public/index.html"        // Good to include this too
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}