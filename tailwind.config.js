/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'javier': "url('../assets/yo.jpeg')",
        }
    },
  },
  plugins: [],
}

