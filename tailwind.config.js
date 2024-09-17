/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: {
          light: "#EBEDFF",
          main: "#9FA8FE",
          dark: "#8A92E3",
        },
        pink: {
          light: "#FFEDF5",
          main: "#F588B9",
          dark: "#D6699A",
        },
        green: {
          light: "#ECFFCE",
          main: "#A2B87E",
          dark: "#95AE6D",
        },
        blue: {
          light: "#BADAFF",
          main: "#6B93C0",
          dark: "#6B93C0",
        },
        yellow: {
          light: "#FFFAC2",
          main: "#CAC48E",
          dark: "#C2BB82",
        },
        orange: {
          light: "#FFBCAB",
          main: "#F28164",
          dark: "#D46F55",
        },
        "cod-dark": "#262625",
        "cod-white": "#FEFEFE",
      },
      fontSize: { xs: ["12px", "20px"] },
    },
  },
  plugins: [],
};
