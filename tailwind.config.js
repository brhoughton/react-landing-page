/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        blue: "#8BE9FD",
        red: "#FF79C6",
        yellow: "#F1FA8C",
        grey: "#282A36",
        green: "#50FA7B",
        purple: "#BD93F9",
        orange: "#FFB86C",
        dark: "#282A36",
        "deep-blue": "#010026",
        "dark-grey": "#757575",
        "opaque-black": "rgba(0,0,0,0.35",
      },
      backgroundImage: (theme) => ({
        "gradient-rainbow":
          "linear-gradient(81.66deg, #44475A 7.21%, #6272A4 45.05%, #8BE9FD 78.07%)",
        "gradient-rainblue":
          "linear-gradient(90deg, #50FA7B 14.53%, #8BE9FD 69.36%, #50FA7B 117.73%)",
      }),
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        opensans: ["Open Sans", "sans-serif"],
      },
      screens: {
        xs: "480px",
        sm: "768px",
        md: "1060px",
      },
    },
  },
  plugins: [],
};
