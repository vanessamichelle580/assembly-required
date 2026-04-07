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
          espresso: '#2C1F14',   // primary dark background
          cream: '#F5F0E8',      // primary light background
          gold: '#C9A84C',       // gold accent
          taupe: '#C4B5A5',      // warm taupe
          brown: '#5C4A3E',      // deep warm brown
          teal: '#4A8B8B',       // dusty teal
          rose: '#C4848A',       // dusty rose
        }
      },
      fontFamily: {
        cormorant: ['var(--font-cormorant)', 'serif'],
        lora: ['var(--font-lora)', 'serif'],
        raleway: ['var(--font-raleway)', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
