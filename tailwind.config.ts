import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'white': "#ffffff",
        'primaryColor': "#FF5900",
      },
      zIndex: {
        '1': '1',
      },
      gridColumn: {
        '1': '1',
      },
      gridRow: {
        '1': '1',
      }
    },
  },
  plugins: [],
};
export default config;
