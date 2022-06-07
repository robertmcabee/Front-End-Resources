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
    extend: {
      screens: {
        "3xl": "1800px",
      },
      animation: {
        fadein: "fadein 500ms ease-in-out",
      },
      keyframes: {
        fadein: {
          "0%": {
            opacity: "0",
            transform: "translate3d(0, -5%, 0)",
          },
          "100%": {
            opacity: "1",
            transform: "none",
          },
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
