/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      colors: {
        white: "#ffffff",
        "white-05": "rgba(255,255,255,0.05)",
        "white-07": "rgba(255,255,255,0.07)",
        "white-10": "rgba(255,255,255,0.1)",
        "white-20": "rgba(255,255,255,0.2)",
        "white-30": "rgba(255,255,255,0.3)",
        "white-40": "rgba(255,255,255,0.4)",
        "white-50": "rgba(255,255,255,0.5)",
        "white-60": "rgba(255,255,255,0.6)",
        "white-70": "rgba(255,255,255,0.7)",
        "white-80": "rgba(255,255,255,0.8)",

        "black-40": "rgba(0,0,0,0.4)",
      },
    },
  },
  plugins: [],
};
