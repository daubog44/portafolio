/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

const rotateY = plugin(function ({ addUtilities }) {
  addUtilities({
    ".rotate-y": {
      transform: "rotateY(180deg)",
    },
    ".rotate-y-0": {
      transform: "rotateY(0deg)",
    },
    ".rotate-y-back": {
      transform: "rotateY(-180deg)",
    },
    ".rotate-y-90-back": {
      transform: "rotateY(00deg)",
    },
  });
});

const perspective = plugin(function ({ addUtilities }) {
  addUtilities({
    ".perspective-1500px": {
      perspective: "1500px",
    },
    ".perspective-inherit": {
      perspective: "inherit",
    },
  });
});

const backfaceVisibility = plugin(function ({ addUtilities }) {
  addUtilities({
    ".backfaceVisibilityhidden-hidden": {
      backfaceVisibility: "hidden",
    },
  });
});

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      crimson: "Crimson Pro",
    },
    extend: {
      backgroundImage: {
        "first-section-bg": "url('/layered-waves-haikei.svg')",
        "first-section-bg-md": "url('/layered-waves-haikei-md.svg')",
        "first-section-bg-lg": "url('/layered-waves-haikei-lg.svg')",
        "first-section-bg-2-lg": "url('/layered-waves-haikei-2-lg.svg')",
      },
    },
  },
  plugins: [rotateY, perspective, backfaceVisibility],
};
