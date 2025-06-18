/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        snow: "#F0F8FF",
        darkBlue: "#1E293B",
      },
    },
  },
  plugins: [],
};
