/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        football: {
          primary: '#16a34a',
          light: '#dcfce7',
        },
        cricket: {
          primary: '#2563eb',
          light: '#dbeafe',
        },
        f1: {
          primary: '#dc2626',
          light: '#fee2e2',
        },
      },
    },
  },
  plugins: [],
}