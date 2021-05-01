const colors = require("tailwindcss/colors");
module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],

  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      base: colors.blueGray[200],
      "txt-base": colors.blueGray[900],
      primary: colors.blue[600],
      "txt-primary": colors.blueGray[50],
      secondary: colors.white,
      active: colors.green[900],
      blocked: colors.red[900],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
