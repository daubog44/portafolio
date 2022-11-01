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

const textShadow = plugin(function ({ addUtilities }) {
  addUtilities({
    ".text-shadow": {
      textShadow:
        "0px 0px 5px #b393d3, 0px 0px 10px #b393d3, 0px 0px 10px #b393d3, 0px 0px 20px #b393d3",
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
      Imbue: "Imbue",
    },
    extend: {
      animation: {
        bouncing: "rubberband 800ms alternate ease-out 250ms",
      },
      keyframes: {
        rubberband: {
          "0%": { transform: "scaleX(1)" },
          "40%": { transform: "scaleX(1.12) scaleY(0.75)" },
          "55%": { transform: "scaleX(0.85) scaleY(1)" },
          "65%": { transform: "scaleX(1.09) scaleY(0.85)" },
          "75%": { transform: "scaleX(0.9) scaleY(1)" },
          "90%": { transform: "scaleX(1.05) scaleY(0.95)" },
          "100%": { transform: "scaleX(1) scaleY(1)" },
        },
      },
      backgroundImage: {
        "first-section-bg": "url('/layered-waves-haikei.svg')",
        "first-section-bg-md": "url('/layered-waves-haikei-md.svg')",
        "first-section-bg-lg": "url('/layered-waves-haikei-lg.svg')",
        "first-section-bg-2-lg": "url('/layered-waves-haikei-2-lg.svg')",
        waves: "url('/waves.svg')",
      },
    },
  },
  plugins: [rotateY, perspective, backfaceVisibility, textShadow],
};
