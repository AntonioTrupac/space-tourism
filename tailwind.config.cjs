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
        "home-mobile": "url('/home/background-home-mobile.jpg')",
        "home-tablet": "url('/home/background-home-tablet.jpg')",
        "home-desktop": "url('/home/background-home-desktop.jpg')",
        "destination-mobile":
          "url('/destination/background-destination-mobile.jpg')",
        "destination-tablet":
          "url('/destination/background-destination-tablet.jpg')",
        "destination-desktop":
          "url('/destination/background-destination-desktop.jpg')",
        "crew-mobile": "url('/crew/background-crew-mobile.jpg')",
        "crew-tablet": "url('/crew/background-crew-tablet.jpg')",
        "crew-desktop": "url('/crew/background-crew-desktop.jpg')",
        "technology-mobile":
          "url('/technology/background-technology-mobile.jpg')",
        "technology-tablet":
          "url('/technology/background-technology-tablet.jpg')",
        "technology-desktop":
          "url('/technology/background-technology-desktop.jpg')",
      },
      fontFamily: {
        "barlow-condensed": ["Barlow Condensed", "sans-serif"],
        bellefair: ["Bellefair", "serif"],
        barlow: ["Barlow", "sans-serif"],
      },
      transitionProperty: {
        explore: "opacity, transform",
      },
      letterSpacing: {
        "barlow-condensed-lg": "4.72px",
        "barlow-condensed-md": "3.84px",
        "barlow-condensed-sm": "2.7px",
      },
      fontSize: {
        "10xl": ["150px", "172px", "0px"],
      },
      gridTemplateColumns: {
        container:
          "minmax(2rem, 1fr) repeat(2, minmax(0, 600px)) minmax(2rem, 1fr)",
        crew: "minmax(1.5rem, 1fr) minmax(0, 490px) minmax(0, 620px) minmax(1.5rem, 1fr)",
        technology: "minmax(1.5rem, 1fr) minmax(0, 630px) minmax(0, 645px)",
        "technlogy-xl":
          "minmax(1.5rem, 1fr) minmax(0, 630px) minmax(0, 600px) minmax(1.5rem, 1fr)",
      },
      padding: {
        grid: "max(6rem, 20vh)",
        navClamp: "clamp(6rem, 10vw, 9rem)",
        "destination-title": "clamp(2.5rem, 10vw, 3rem)",
        "destination-body": "clamp(2.5rem, 13vw, 7rem)",
      },
    },
  },
  plugins: [],
};
