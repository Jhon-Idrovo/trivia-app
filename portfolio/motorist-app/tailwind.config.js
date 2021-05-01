const colors = require("tailwindcss/colors");
module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    colors: {
      base: colors.gray[100],
      "base-dark": colors.black,
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
