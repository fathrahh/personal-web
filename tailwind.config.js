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
      height: {
        screenWithoutNav: "calc(100vh - 4rem)",
      },
      colors: {
        custom: {
          orange: "#FF774C",
          blue: "#242F65",
          slate: "#525665",
          neutral: "#2F2F2F",
          dark: "#2A2C32",
          outline: "#E7E7E7",
          "blue-accent": "#7390F9",
        },
      },
    },
  },
  plugins: [],
};
