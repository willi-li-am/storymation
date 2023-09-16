/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors : 
      {
        bg:
        {
          400: '#0C134F',
          300: '#1D267D',
          200: '#5C469C',
          100: '#D4ADFC',
        }
      }
    },
  },
  plugins: [],
}