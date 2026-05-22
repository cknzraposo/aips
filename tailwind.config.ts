import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#f7f3ea",
        ink: "#17222d",
        steel: "#42536a",
        accent: "#ad7f2f",
        datum: "#234f45"
      },
      boxShadow: {
        brief: "0 16px 30px rgba(23,34,45,0.12)"
      }
    }
  },
  plugins: []
};

export default config;
