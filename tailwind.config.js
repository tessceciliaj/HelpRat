/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      neutral: {
        100: '#fff',
        200: '#fafafb',
        400: '#cdd5e0',
        700: '#677489',
        900: '#111827',
      },
      accent: '#3478f6',
    },
    fontFamily: {
      sans: ['var(--font-lexend)'],
    },
  },
  plugins: [],
}
