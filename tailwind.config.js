/** @type {import('tailwindcss').Config} */
/* eslint-disable max-len */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        content: '#3e4650',
        'button-text': '#FFEBEA',
        'button-background': '#5F7083',
      }
    },
  },
  plugins: [],
}


