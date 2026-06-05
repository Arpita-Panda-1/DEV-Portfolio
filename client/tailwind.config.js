/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00ffff",
        dark: "#050505",
        card: "#111111",
      },
    },
  },
  plugins: [],
}