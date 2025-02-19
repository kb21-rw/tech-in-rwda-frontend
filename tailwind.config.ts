import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        avenir: ["Avenir", "sans-serif"],
        comfortaa: ["comfortaa", "sans-serif"],
        mulish: ["mulish", "sans-serif"],
        arvo: ["arvo", "sans-serif"],
        roboto: ["roboto", "sans-serif"],
      },
      colors: {
        "blue-150": "#13446B",
        primary: "#757575",
        secondary: "#1A85C7",
      },
      spacing: {
        "7.2": "7.246%",
        "7.5": "30px",
        "16.75": "67px",
        "12.5": "50px",
        27: "108px",
      },
      fontSize: {
        "2.5xl": "28px",
      },
    },
  },
  plugins: [],
} satisfies Config;
