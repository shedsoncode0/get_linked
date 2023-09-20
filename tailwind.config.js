/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBlue: "#150E28",
        purple: "#D434FE",
        pink: "#FE34B9",
        blue: "#903AFF",
      },
      fontFamily: {
        clashDisplay: ["ClashDisplay"],
        montserrat: ["Montserrat"],
        unicaOne: ["Unica One"],
      },
    },
  },
  plugins: [],
};
