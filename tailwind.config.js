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
      gridTemplateColumns: {
        "auto-fit": "repeat(auto-fit, minmax(380px, 1fr))",
        "auto-fit-contact": "repeat(auto-fit, minmax(430px, 1fr))",
      },
    },
  },
  plugins: [],
};
