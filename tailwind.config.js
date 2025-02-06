/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        dancing: ["Dancing Script", "cursive"],
        raleway: ["Raleway", "sans-serif"],
      },
      colors: {
        primary: "#f8f9fa",
        secondary: "#c0c0c0",
        text: "#212529",
        highlight: "#6c757d",
      },
    },
  },
  plugins: [],
};
