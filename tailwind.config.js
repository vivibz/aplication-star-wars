/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      margin : {
        '80': '43rem',
        '96' : '45rem'
      },
    },
  },
  plugins: [],
}
