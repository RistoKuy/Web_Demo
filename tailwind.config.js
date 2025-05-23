/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary': '#4361ee',
        'primary-dark': '#4cc9f0',
        'bg-light': '#f5f7fa',
        'bg-light-end': '#e4e8f0',
        'bg-dark': '#2b2d42',
        'bg-dark-end': '#1a1a2e',
        'card-light': 'rgba(255, 255, 255, 0.7)',
        'card-dark': 'rgba(40, 42, 54, 0.7)'
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}
