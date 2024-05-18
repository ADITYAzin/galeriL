const { addDynamicIconSelectors } = require('@iconify/tailwind');

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/flowbite/**/*.js" ,

],
  darkMode: 'class',
  theme: {
    extend: {
      
      fontFamily: {
        'chillax': ['chillax'],
        'satoshi': ['satoshi'],
        'montserrat': ['Montserrat', 'sans-serif'],
      }
    },
  },
  plugins: [
    // Iconify plugin
    addDynamicIconSelectors(),
],
}