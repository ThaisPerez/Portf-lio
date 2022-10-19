/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{ 
        blackopecity:"rgba(0, 0, 0, 0.2)"
      },
      fontFamily:{
        sans:"'Inter', sans-serif"
      }
    },
  },
  plugins: [],
}
