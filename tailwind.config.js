/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#DE9D4B',
      },
      typography: {
        DEFAULT: {
          css: {
            // color: '#000',

            h1: {
              'font-weight': 'text-4xl',
            },
            h2: {
              'font-weight': 'text-2xl',
            },
            h3: {
              'font-weight': 'text-xl',
            },
            h4: {
              'font-weight': 'text-l',
            },
            a: {
              color: '#3182ce',
              '&:hover': {
                color: '#2c5282',
              },
            },
          },
        },
      },
    },
  },
  plugins: [],
}
