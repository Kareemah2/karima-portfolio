/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#F4F0EA",
        ink: "#2B2522",
        accent: "#A87878",
        "accent-ink": "#8A5656",
        muted: "#6B615B",
        sand: "#E9E1D9",
        stone: "#DED3C8",
      },
    },
  },
  plugins: [],
};