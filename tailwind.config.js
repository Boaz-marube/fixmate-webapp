/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customBrown: "#8C3D24",
        "ethiopian-red": "#8c3a24",
        "ethiopian-dark": "#26100A"
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        playfair: ['"Playfair Display"', "serif"],
      },
    },
  },
  plugins: [],
};