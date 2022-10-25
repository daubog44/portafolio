/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        code: ['"Press Start 2P"', ...defaultTheme.fontFamily.sans],
        bungee: ['"Bungee Spice"', ...defaultTheme.fontFamily.sans],
        cabin: ['"Cabin Sketch"', ...defaultTheme.fontFamily.sans],
        gloria: ['"Gloria Hallelujah"', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        "first-section-bg": "url('/layered-waves-haikei.svg')",
        "first-section-bg-md": "url('/layered-waves-haikei-md.svg')",
        "first-section-bg-lg": "url('/layered-waves-haikei-lg.svg')",
        "first-section-bg-2-lg": "url('/layered-waves-haikei-2-lg.svg')",
      },
    },
  },
  plugins: [],
};
