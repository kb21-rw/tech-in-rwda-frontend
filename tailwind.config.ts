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
        "blue-250": "#0F446B",
        primary: "#757575",
        secondary: "#1A85C7",
      },
      spacing: {
        "7.2": "7.246%",
        "7.5": "30px",
        "16.75": "67px",
        "12.5": "50px",
        27: "108px",
        "28.5": "114px",
        "11.5": "46px",
        45: "180px",
        34: "136px",
      },
      fontSize: {
        "2.5xl": "28px",
        xxs: "10px",
      },
      lineHeight: {
        "4.3925": "17.57px",
        "7.53": "30.12px",
      },
    },
  },
  plugins: [],
} satisfies Config;
