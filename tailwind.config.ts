import type { Config } from "tailwindcss";
import { basePath } from "./next.config";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "bg-xl-hero": `url(${basePath}/assets/original.jpg)`,
        "bg-lg-hero": `url(${basePath}/assets/original-3200x1320.jpg)`,
        "bg-xs-hero": `url(${basePath}/assets/original-656x1140.jpg)`,
        "bg-md-hero": `url(${basePath}/assets/original-1140x980.jpg)`,
        "tab-1": `url(${basePath}/assets/tab-1.jpg)`,
        "tab-1-sm": `url(${basePath}/assets/tab-1-sm.jpg)`,
        "tab-2": `url(${basePath}/assets/tab-2.jpg)`,
        "tab-2-sm": `url(${basePath}/assets/tab-2-sm.jpg)`,
        "tab-3": `url(${basePath}/assets/tab-3.jpg)`,
        "tab-3-sm": `url(${basePath}/assets/tab-3-sm.jpg)`,
      },
      screens: {
        "xs": "540px",
      },
      colors: {
        "green-primary": "#1ce783",
      },
      content: {
        'menu': `url(${basePath}/assets/icon-menu.svg")`,
        'logo': `url("${basePath}/assets/logo.png")`,
        'disney': `url(${basePath}/assets/icon-disney.svg)`,
        'arrow': `url(${basePath}/assets/icon-arrow-down.svg")`,
      },
      backgroundPosition: {
        "tab-sm": "center"
      }
    },
  },
  plugins: [],
};
export default config;
