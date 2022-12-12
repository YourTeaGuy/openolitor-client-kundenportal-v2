/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      //custom colors and other stuff would come here
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
