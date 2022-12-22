/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "p-bg": "rgb(21,21,21)",
        "p-txt": "rgb(255,255,255)",
        "s-txt": "rgb(148,148,149)",
      },
    },
  },
  plugins: [],
};
