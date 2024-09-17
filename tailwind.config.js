/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
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
          light: "#F9FAFB",
        },
      },
      maxWidth: {
        1440: "1440px",
        1216: "1216px",
      },
    },
  },
  // eslint-disable-next-line global-require, import/no-extraneous-dependencies
  plugins: [require("tailwind-scrollbar-hide"), require("tailwindcss-animate")],
};
