/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionTimingFunction: {
        'test': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
      }
    },
  },
  plugins: [],
}

