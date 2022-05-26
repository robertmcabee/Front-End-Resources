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
      animation: {
        fadein: "fadein 500ms ease-in-out",
      },
      keyframes: {
        fadein: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
