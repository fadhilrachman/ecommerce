/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        main: ["Open Sans", " sans-serif"],
        roboto: ["Roboto Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
