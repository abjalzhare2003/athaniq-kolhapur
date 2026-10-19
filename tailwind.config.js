/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        leather: { 950: '#24160f', 900: '#382318', 800: '#563522', 700: '#754a2e', 600: '#94623b' },
        cream: { 50: '#fffdf9', 100: '#f8f3eb', 200: '#efe4d4', 300: '#dfc8ac' },
        gold: { 400: '#c8a46b', 500: '#a77e43' }
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        display: ['Playfair Display', 'serif']
      }
    }
  },
  plugins: [],
}
