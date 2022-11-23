/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'br-orange': {
          DEFAULT: '#EA9937',
          '50': '#FBEEDD',
          '100': '#FAE4CB',
          '200': '#F6D1A6',
          '300': '#F2BF81',
          '400': '#EEAC5C',
          '500': '#EA9937',
          '600': '#D37D16',
          '700': '#A05F11',
          '800': '#6D410B',
          '900': '#3A2306'
        },
        // 'br-black': '#0D1821',
        // "br-green":"#0D1821",
        "br-green": {
          "DEFAULT": "#657153",
          "light": "#B3BEA1",
          "medium": "#899675",
        },
        // "br-green":"#012622",
        "br-l-blush":{
          'light': "#FFFBFB",
          'DEFAULT': "#f8e9e9"
        },
        "br-l-twilight": {  DEFAULT: '#7B506F',
          '50': '#CEB4C7',
          '100': '#C6A8BE',
          '200': '#B68FAB',
          '300': '#A67699',
          '400': '#946085',
          '500': '#7B506F',
          '600': '#593A50',
          '700': '#372432',
          '800': '#150E13',
          '900': '#000000'
        },
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
