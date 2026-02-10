/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
        blush:'#F5FEB6',
        peach: '#D85985',
        cream: '#EFFFE9',
        gold: '#D4AF37',
        warmGray: 'F5F0E8',
        darkBrown: '#3D2817'
      }
    },
  },
},
  plugins: [],
}

