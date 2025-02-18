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
        "6.75": "27px",
        "7.5": "30px",
        "11.25": "45px",
      },
      fontSize: {
        15: "60px",
      },
    },
  },
  plugins: [],
} satisfies Config;
