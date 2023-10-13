/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      mono: [
        [
          "ui-monospace",
          "Cascadia Code",
          "Source Code Pro",
          "Menlo",
          "Consolas",
          "DejaVu Sans Mono",
          "monospace",
        ],
      ],
    },
    extend: {
      animation: {
        flip: "flip 60ms linear forwards",
        "flip-back": "flipBack 60ms linear forwards",
      },
      keyframes: {
        flip: {
          "0%": { transform: "rotatex(0deg)" },
          "100%": { transform: "rotatex(-180deg)" },
        },
        flipBack: {
          "0%": { transform: "rotatex(180deg)" },
          "100%": { transform: "rotatex(0deg)" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-3d")],
};
