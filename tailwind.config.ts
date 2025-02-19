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
      lineHeight: {
        "7.53": "30.12px",
      },
    },
  },
  plugins: [],
} satisfies Config;
