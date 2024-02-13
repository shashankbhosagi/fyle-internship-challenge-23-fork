/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      width: {
        1186: "1186px",
        1080: "1080px",
      },
      animation: {
        "float-space": "float-space 18s infinite",
      },
      keyframes: {
        "float-space": {
          "0%": { transform: "translateY(30px)" },
          "50%": { transform: "translateY(80px)" },
          "100%": { transform: "translateY(30px)" },
        },
      },
    },
  },
  plugins: [],
};
