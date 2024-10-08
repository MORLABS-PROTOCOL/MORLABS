import type { Config } from "tailwindcss";
import daisyui from "daisyui"
const config: Config = {
  content: [
    "./src/pages//*.{js,ts,jsx,tsx,mdx}",
    "./src/components//*.{js,ts,jsx,tsx,mdx}",
    "./src/styles//*.css",
  ],
  theme: {},
  plugins: [
    daisyui,
  ],
};

export default config;