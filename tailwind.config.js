/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: "#b02c2d",
          "red-dark": "#8c2122",
          "red-light": "#e0605f",
        },
        ink: "#14212b",
        "ink-soft": "#1e2f3c",
        steel: "#55646e",
        mist: "#a9b6bd",
        line: "#d3dadd",
        paper: "#f2f4f3",
      },
      fontFamily: {
        sans: ["var(--font-archivo)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
