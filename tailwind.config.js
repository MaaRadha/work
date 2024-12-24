/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      background: {
        "hero-pattern": "url('/public/bg.jpg",
        "hero-pattern2": "url('/src/assets/heropic.png')",
      },
      fontFamily: {
        redhat: ["Bebas Neue", "sans-serif"],
      },
    },
  },
  plugins: [],
};
