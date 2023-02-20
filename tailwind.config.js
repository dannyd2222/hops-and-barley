/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      transitionDuration: {
        '1500': '1500ms'
      }
    },
    fontFamily: {
      sans: ['Work Sans', 'sans-serif']
    }
  },
  plugins: [],
}
