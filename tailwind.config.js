/* eslint-disable no-unused-vars */
/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xlg: "1200px",
        xmd: "992px",
      },
      container: {
        padding: "1rem",
        center: true,
        backgroundImage: {
          hero: "url('./src/imgs/HeroLanding/hero.jpg')",
          footer: "url('/img/footer-texture.png')",
        },
      },
      colors: {
        "main-blue": "#0300ff",
        "sec-blue": "#2a354c",
        "main-grey": "#949aa6",
      },
    },
  },

  plugins: [],
};
