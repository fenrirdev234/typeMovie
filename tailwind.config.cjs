/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        proyectRed: '#ff4655',
        proyectWhite: '#f9f9f9',
        proyectSilver: '#ece8e1',
        projectligthGrey: '#dbd8d2',
        projectGrey: '#908e8a',
        projectDarkGrey: '#292929',
        proyectDarkBlue: '#0f1923'

      }
    }
  },
  plugins: []
}
