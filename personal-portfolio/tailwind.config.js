/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ], plugins: [
    require("flowbite/plugin")
  ],
  theme: {
    colors: {
      "portfolio-green": "#4EE1A0",
      "portfolio-gray": "#d9d9d9",
      "portfolio-darkgray": "#242424",
      "portfolio-tomato": "#FF6F5B",
      
    },

    fontSize: {
      normal: ["18px", "28px"],
      XL: ["88px", "88px"],
      L: ["48px", "56px"],
      M: ["24px", "32px"],
    },

    fontFamily: {
      Grotesk: ["Grotesk", "sans-serif"],
    },
  },
  extend: {
    backgroundImage: {
      "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      "gradient-conic":
        "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
    },
  },
  plugins: [],
};
