module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media', // false or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        archives: {
          light: '#be2272',
          DEFAULT: '#A81E65',
          dark: '#7d164b'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
