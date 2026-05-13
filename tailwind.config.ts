import type { Config } from "tailwindcss";

// Tailwind v4: theme customizations are done via CSS @theme.
// This config file is kept for content scanning only.
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: { extend: {} },
  plugins: [],
};

export default config;
