/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    letterSpacing: {
      widest: '0.25em'
    },
    extend: {
      colors: {
        'regal-blue': '#00494d',
        'back-blue': '#C5E4E7',
        'light-blue': '#F4FAFA'
      },
    },
  },
  plugins: [],
}

