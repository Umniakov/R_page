/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/*.js", "./src/*.html"],
  theme: {
    extend: {
      backgroundImage: {},
      margin: {
        "40vw": "40vw",
        "20vw": "20vw",
      },
    },
  },
  plugins: [],
};
