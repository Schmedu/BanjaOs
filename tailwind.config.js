/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'br-orange': '#EA9937',
        // 'br-black': '#0D1821',
        "br-green":"#0D1821",
        // "br-green":"#012622",
        "br-l-blush":{
          'light': "#FFFBFB",
          'DEFAULT': "#f8e9e9"
        },
        "br-l-twilight":"#7b506f",
        "br-brown":"#735F3D",
        "br-black": {
          "50": "#3f4a53",
          "100": "#354049",
          "200": "#2b363f",
          "300": "#212c35",
          "400": "#17222b",
          "DEFAULT": "#0d1821",
          "600": "#030e17",
          "700": "#00040d",
          "800": "#000003",
          "900": "#000000"
        },
        "br-gray": '#F3F7F0',


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
