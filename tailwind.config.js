/** @type {import('tailwindcss').Config} */
export default {
  isLightMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        caprasimo: ["Caprasimo", "sans-serif"],
        nunito: ["Nunito", "sans-serif"],
        oswald: ["Oswald", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
      },
      colors: {
        snow: "#F0F8FF",
        darkBlue: "#1E293B",
      },
    },
  },
  plugins: [],
};
