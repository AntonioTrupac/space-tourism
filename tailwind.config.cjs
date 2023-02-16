/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "hsl(230,35%,7%)",
        secondary: "hsl(231,77%,90%)",
        tertiary: "hsl(0,0%,100%)",
        "transparent-nav": "hsl(0 0% 59% / 0.3)",
        test: "hsl(0 0% 100% / 0.1)",
      },
      backgroundImage: {
        menu: "url('/icon-hamburger.svg')",
        close: "url('/icon-close.svg')",
      },
      fontFamily: {
        "barlow-condensed": ["Barlow Condensed", "sans-serif"],
        bellefair: ["Bellefair", "serif"],
      },
    },
  },
  plugins: [],
};
