/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    '*.html',
    '_layouts/**/*.html',
    '_includes/**/*.html'
  ],
  theme: {
    fontFamily: {
      'sans': ['Raleway'],
      'mulish': ["Mulish"]
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      colors: {
        customblue: {
          400: '#00a6e2', // Custom blue color
        },
      },
    },
  },
  safelist: [
    'text-customblue-400',
  ],
  plugins: [
    require('@tailwindcss/typography')
  ],
}


