/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
        sm: '480px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
    },
    extend: {
      fontFamily: {
        Mulish : ['Roboto, sans-serif'],
      }
    },
  },
  plugins: [],
}
