// Import diperlukan module dari Tailwind CSS
const { addDynamicIconSelectors } = require('@iconify/tailwind');

// Ekspor konfigurasi Tailwind CSS
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/flowbite/**/*.js",
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
    // Menggunakan plugin Iconify
    addDynamicIconSelectors(),
  ],
};
