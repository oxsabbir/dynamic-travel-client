/** @type {import('tailwindcss').Config} */

const withMt = require("@material-tailwind/react/utils/withMT");

module.exports = withMt({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        xs: "480px", // Custom screen size for extra small devices
        sm: "640px", // Default small
        md: "768px", // Default medium
        lg: "1024px", // Default large
        xl: "1280px", // Default extra-large
        "2xl": "1536px", // New 2xl custom screen size
      },
      colors: {
        actionBlue: "#2986FE",
        textBlack: "#101010",
        plainWhite: "#FFFFFF",
        offWhite: "#F9F9FB",
        senseWhite: "rgb(242,242,242)",
        offGray: "#555555",
        shadeBlack: "#212121",
        offBlack: "#272728",
      },
    },
  },
  plugins: [],
});
