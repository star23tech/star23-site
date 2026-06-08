import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50:  "#e8edf5",
          100: "#c5d0e6",
          500: "#1a3a6b",
          600: "#142e57",
          700: "#0e2244",
          800: "#091830",
          900: "#05101f",
          DEFAULT: "#1a3a6b",
        },
        brand: {
          red: "#c8102e",
          navy: "#1a3a6b",
          white: "#ffffff",
        },
      },
      fontFamily: {
        display: ["'Barlow Condensed'", "sans-serif"],
        body: ["'DM Sans'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
