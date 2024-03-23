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
          header: "#1F7964",
        },
      },
      maxWidth: {
        1440: "1440px",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
