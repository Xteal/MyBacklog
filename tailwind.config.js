/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/pages/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/components/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        myGray: '#0a0a0a',
        myPink: '#FF3F60'
      },
    },
  },
  plugins: [],
}
