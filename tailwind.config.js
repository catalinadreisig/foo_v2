/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],

  theme: {
    extend: {
      fontSize: {
        headers: ["20px", "26px"],
        breads: ["16px", "20px"],
      },

      colors: {
        fooBlue: "#151eff",
        textWhite: "#ffffff",
      },
    },
  },
  plugins: [],
};
