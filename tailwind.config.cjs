/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Plus Jakarta Sans Variable", "sans-serif"],
        bigelow: ["Bigelow Rules", "cursive"],
      },
    },
  },
  plugins: [],
};
