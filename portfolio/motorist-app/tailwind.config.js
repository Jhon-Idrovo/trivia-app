const colors = require("tailwindcss/colors");
module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      base: colors.black,
      primary: colors.yellow[300],
      "txt-base": colors.white,
      "txt-primary": colors.black,
      secondary: colors.white,
      "txt-primary": colors.black,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
