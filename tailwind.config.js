module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media', // false or 'media' or 'class'
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        archives: {
          light: '#be2272',
          DEFAULT: '#A81E65',
          dark: '#7d164b'
        },
        success: {
          DEFAULT:'#198754'
        },
        danger: {
          DEFAULT: '#dc3545'
        },
        info: {
          DEFAULT: '#0dcaf0'
        },
        warning: {
          DEFAULT: '#ffc107'
        },
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
