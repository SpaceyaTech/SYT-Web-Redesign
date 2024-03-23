/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        landingPageBg: "url('/landing-bg.png')",
      },
      colors: {
        primary: "#009975",
        green: {
          dark: "#00664E",
          light: "#E5EFEC",
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
