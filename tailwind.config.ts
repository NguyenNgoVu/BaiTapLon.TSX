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
      screens: {
        pc: {
          raw: '(min-width: 1366px) and (min-height: 768px) and (hover: hover) and (pointer: fine)'
        },
        mobile: {
          raw: '(max-width: 1365px), (max-height: 767px), (hover: none), (pointer: coarse)'
        }
      },
    },
  },
  plugins: [],
};
export default config;
