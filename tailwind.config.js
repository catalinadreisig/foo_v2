/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],

  theme: {
    extend: {
      fontSize: {
        mini: ["10px", "12px"], //mobile
        headers: ["50px", "60px"], //overskrifter
        breads: ["16px", "20px"], //brødtekst
        links: ["25px", "30px"], //links
      },

      colors: {
        fooBlue: "#151eff",
        textWhite: "#ffffff",
      },
    },
  },
  plugins: [],
};
