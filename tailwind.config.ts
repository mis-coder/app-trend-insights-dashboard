import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        blue: "#36a2eb",
        red: "#ff6384",
        orange: "#ff9f40",
        yellow: "#ffcd56",
        green: "#4bc0c0",
        purple: "#9966ff",
        silver: "#c9cbcf",
        "silver-light": "#f2f3f7",
      },
    },
  },
  plugins: [],
};
export default config;
