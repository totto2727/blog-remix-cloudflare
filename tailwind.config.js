/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: '"Noto Sans JP", sans-serif',
        serif: '"Noto Serif JP", serif',
        mono: '"Fira Code", "Noto Sans JP", monospace',
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  // plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"],
  },
};
