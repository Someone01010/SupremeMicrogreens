/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        shabby: ['Another Shabby', 'cursive'],
      },
      colors: {
        'supreme-green': '#2B432B',
      },
    },
  },
  plugins: [],
  safelist: [
    'group-hover:-translate-x-1',
    'hover:bg-green-100',
    'hover:text-green-600',
    'group-hover:translate-x-1',
    'group-hover:rotate-90',
    'group-hover:scale-105',
    'group-hover:scale-110'
  ]
};