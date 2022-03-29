const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: true, // or 'media' or 'class'
  theme: {
    extend: {
      height: theme => ({
        '112': '28rem',
        '120': '30rem',
        '140': '35rem',
        '160': '40rem',
      }),      
      colors: {
        palette: {
          lighter: '#414F64',
          light: '#414F64',
          primary: '#26e73a',
          dark: '#22D634',
          gray: '#2b2b2b',
          slate: '#1a1a1a',
        },
        gray: colors.coolGray,
      },
      borderRadius: {
        extraLarge: '12rem',
      },
      fontFamily: {
        primary: ['Poppins'],
        secondary: ['"Open Sans"'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
