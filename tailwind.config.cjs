/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        bigelow: ["Bigelow Rules", "cursive"],
        rubik: ["Rubik", "sans-serif"],
      },
    },
  },
  plugins: [],
};
