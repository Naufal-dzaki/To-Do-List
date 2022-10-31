/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'default': '#0f3040',
        'second': '#264653',
        'txt': '#dbeeec',
        'warning': '#e9c46a',
        'danger': '#e76f51',
        'success': '#8ab17d',
      },
    },
  },
  plugins: [],
}
