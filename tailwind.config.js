/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        basecolor: '#1E293B',
        customWhite: '#F8FAFC'
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        playfair: ['"Playfair Display"', "serif"],
        poppins: ['Poppins','sans-serif'],
      },
    },
  },
  plugins: [],
};