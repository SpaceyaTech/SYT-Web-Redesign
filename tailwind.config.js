/* eslint-disable no-undef */

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        spaceGrotesk: ["Space Grotesk", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        sora: ["Sora", "sans-serif"],
      },
      backgroundImage: {
        landingPageBg: "url('/landing-bg.png')",
        eventRSVPDesktop: "url('/event-RSVP-desktop.png')",
        eventRSVPMobile: "url('/event-RSVP-mobile.png')",
      },
      colors: {
        primary: "#009975",
        secondary: "#252533",
        green: {
          dark: "#00664E",
          light: "#E5EFEC",
          header: "#1F7964",
          footer: "#00FFC3",
        },
        grey: {
          neutral: "#656767",
        },
      },
      maxWidth: {
        1440: "1440px",
        1216: "1216px",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
