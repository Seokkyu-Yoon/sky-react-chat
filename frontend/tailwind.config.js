const path = require('path');

module.exports = {
  // purge: [],
  purge: [
    path.join(__dirname, '**', '*.{js,jsx,ts,tsx}'),
    path.join(__dirname, 'public', 'index.html'),
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
