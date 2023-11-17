import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primgreen: "#014E56;",
      primcoral: "#F67E7E",
      primwhite: "#ffff",
      secrapblue: "#70c8c7",
      secpolblue: "#2c6269",
      secdeepjunggreen: "#004047",
      secsacramgreen: "#012f34",
      secdarkgreen: "#002529",
    },
    screens: {
      sm: "320px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      backgroundImage: {
        quote: "url('./icon-quotes.svg')",
        aboutMobileNav: "url('./bg-pattern-about-1-mobile-nav-1.svg')",
        aboutContact: "url('./bg-pattern-about-2-contact-1.svg')",
        about: "url('./bg-pattern-about-4.svg')",
        contact: "url('./bg-pattern-contact-2.svg')",
        home1: "url('./bg-pattern-home-1.svg')",
        home2: "url('./bg-pattern-home-2.svg')",
        home3: "url('./bg-pattern-home-3.svg')",
        home4: "url('./bg-pattern-home-4-about-3.svg')",
        home5: "url('./bg-pattern-home-5.svg')",
        home6: "url('./bg-pattern-home-6-about-5.svg')",
      },
    },
  },
  plugins: [],
};
export default config;
