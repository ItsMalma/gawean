import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      white: "#ffffff",
      primary: "#2563EB",
      neutral: {
        1: "#F8F8FD",
        2: "#D6DDEB",
        3: "#A8ADB7",
        4: "#7C8493",
        5: "#515B6F",
        6: "#25324B",
        7: "#202430",
      },
      blue: "#26A4FF",
      yellow: "#EB8533",
      green: "#56CDAD",
      purple: "#7B61FF",
      red: "#FF6550",
    },
    fontFamily: {
      "red-hat-display": "var(--red-hat-display)",
      epilogue: "var(--epilogue)",
      geist: "var(--font-geist-sans)",
      "geist-mono": "var(--font-geist-mono)",
    },
  },
  plugins: [],
};
export default config;
