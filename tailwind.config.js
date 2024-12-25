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
        text: ["Afacad Flux", "serif"],
      },
      boxShadow: {
        "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
        myStyle:
          "[-5px_-5px_10px_rgba(255,_255,_255,_0.8),_5px_5px_10px_rgba(0,_0,_0,_0.25)]",
        myStyleHover:
          "[-1px_-1px_5px_rgba(255,_255,_255,_0.6),_1px_1px_5px_rgba(0,_0,_0,_0.3),_inset_-2px_-2px_5px_rgba(255,_255,_255,_1),_inset_2px_2px_4px_rgba(0,_0,_0,_0.3)]",
      },
    },
  },
  plugins: [],
};
