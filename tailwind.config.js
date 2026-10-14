/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // ألوان مأخوذة من اللوجو
        navy: {
          50: '#eef2f8',
          100: '#d9e2ef',
          200: '#b3c4de',
          700: '#12326a',
          800: '#0d2757',
          900: '#0a2147',
          950: '#06142e',
        },
        gold: {
          100: '#faf0d9',
          300: '#e6bb62',
          400: '#dba740',
          500: '#d39a2a',
          600: '#b57f1c',
        },
        paper: '#f5f7fa',
      },
      fontFamily: {
        display: ['"Reem Kufi"', '"IBM Plex Sans Arabic"', 'sans-serif'],
        sans: ['"IBM Plex Sans Arabic"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
