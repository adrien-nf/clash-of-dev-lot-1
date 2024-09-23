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
          dark: "#5B7B9F",
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
        "cod-beige": "#F3F3F1",
      },
      fontSize: { xs: ["12px", "20px"] },
      animation: {
        shake: "shake 0.82s cubic-bezier(.36,.07,.19,.97) both",
        "turn-off":
          "turn-off 0.15s ease 0s 1, turned-off 1s ease 0.15s 1, white-dot 0.35s ease 0.15s 1",
      },
      keyframes: {
        shake: {
          "10%, 90%": {
            transform: "translate3d(-1px, 0, 0)",
          },
          "20%, 80%": {
            transform: "translate3d(2px, 0, 0)",
          },
          "30%, 50%, 70%": {
            transform: "translate3d(-4px, 0, 0)",
          },
          "40%, 60%": {
            transform: "translate3d(4px, 0, 0)",
          },
        },
        "turn-off": {
          "0%": {
            borderWidth: "0vh",
            borderLeftWidth: "0vw",
            borderRightWidth: "0vw",
          },
          "50%": {
            borderWidth: "19.65vw",
            borderLeftWidth: "10vw",
            borderRightWidth: "10vw",
          },
          "100%": {
            borderWidth: "19.65vw",
            borderLeftWidth: "35.1vw",
            borderRightWidth: "35.1vw",
          },
        },
        "turned-off": {
          "0%": {
            borderWidth: "19.65vw",
            borderLeftWidth: "35.1vw",
            borderRightWidth: "35.1vw",
            backgroundColor: "#111111",
          },
          "100%": {
            borderWidth: "100vw",
            borderLeftWidth: "35.1vw",
            borderRightWidth: "35.1vw",
            backgroundColor: "#111111",
          },
        },
        "white-dot": {
          "0%": { backgroundColor: "#ffffff80" },
          "100%": { backgroundColor: "#111111" },
        },
      },
    },
  },
  plugins: [],
};
