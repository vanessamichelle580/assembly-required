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
          blush: '#F5FEB6',
          peach: '#D85985',
          cream: '#EFFFE9',
          gold: '#C8922A',         // updated to A+C gold
          warmGray: '#F5F0E8',     // fixed missing #
          darkBrown: '#3D2817',
          charcoal: '#1E2432',     // new - A+C deep charcoal
          teal: '#3D8C8C',         // new - A+C muted teal
          amber: '#C8922A',        // new - A+C accent
        }
      },
      fontFamily: {
        playfair: ['var(--font-playfair)', 'serif'],
        inter: ['var(--font-inter)', 'sans-serif'],  // add Inter for body
      }
    },
  },
  plugins: [],
}


