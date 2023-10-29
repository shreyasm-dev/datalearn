/** @type {import('tailwindcss').Config}*/
const config = {
  content: [
    './src/**/*.{html,js,svelte,ts}',
    './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}',
  ],
  plugins: [require('flowbite/plugin')],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#aec0ff',
          100: '#9eb3fe',
          200: '#8ea6fe',
          300: '#7d99fe',
          400: '#6d8dfe',
          500: '#5d80fe',
          600: '#5473e5',
          700: '#4a66cb',
          800: '#415ab2',
          900: '#384d98',
        },
      },
    },
  },
};

module.exports = config;
