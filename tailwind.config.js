module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#1d3557',
        secondary: '#e63946',
        background: '#a8dadc',
        span: '#f1faee',
        extra: '#457b9d',

      },
      backgroundImage: (theme) => ({
        filled: "url('/img/black.svg')",
        notfilled: "url('/img/hearthover.svg')",

      }),
      fontFamily: {
        primary: ['Roboto', 'sans-serif'],
        secondary: ['Poppins', 'sans-serif'],
      },

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
