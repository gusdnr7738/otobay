/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#E8342F',
        dark: '#171717',
      },
      fontFamily: {
        sans: ['Pretendard', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 16px 50px rgba(17, 24, 39, 0.08)',
        card: '0 10px 24px rgba(17, 24, 39, 0.08)',
      },
    },
  },
  plugins: [],
};
