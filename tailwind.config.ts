import type { Config } from "tailwindcss";
import daisyui from "daisyui";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
    },
  },
  plugins: [
    daisyui,
  ],
  daisyui: {
    themes: ["light"], // Aquí defines el tema que quieres usar, solo "light"
  },
};
export default config;
