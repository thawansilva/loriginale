/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      lato: ["Lato", "sans-serif"],
    },
    extend: {
      colors: {
        black: "#272727",
        blackDarkMode: "#353535",
        gray: "#EAEAEA",
        inputGray: "#B0BAC3",
        red: "#E54A40",
        green: "#40E684",
        orange: "#FFC039",
        yellow: "#ECF026",
      },
    },
  },
  plugins: [],
};
