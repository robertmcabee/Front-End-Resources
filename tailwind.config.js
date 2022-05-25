module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['"IBM Plex Sans Thai Looped"', "sans-serif"],
      mono: ['"SF Mono"', "monospace"],
    },
  },
  plugins: [require("daisyui")],
};
