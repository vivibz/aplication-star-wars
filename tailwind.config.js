/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      spacing: {
        '96': '53rem',
      }
    },
  },
  plugins: [],
}
