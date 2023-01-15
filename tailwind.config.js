/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      margin : {
        '72' : '28rem',
        '80': '43rem',
        '96' : '45rem'
      },
    },
  },
  plugins: [],
}
