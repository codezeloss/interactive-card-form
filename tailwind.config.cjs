/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      white: "hsl(0, 0%, 100%)",
      "light-violet": "hsl(270, 3%, 87%)",
      "dark-violet": "hsl(279, 6%, 55%)",
      "very-dark-violet": "hsl(278, 68%, 11%)",
    },
    fontFamily: {
      space: ["Space Grotesk", "sans-serif"],
    },
    screens: {
      br1: { max: "1152px" },
      br2: { max: "1038px" },
      br3: { max: "576px" },
      br4: { max: "522px" },
    },
  },
  plugins: [],
};
