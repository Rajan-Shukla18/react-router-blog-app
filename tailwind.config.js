/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#fafaf9",
        surface: "#ffffff",
        border: "#e5e4df",
        text: "#1a1a18",
        muted: "#6b6b66",
        accent: "#1f5e3d",
        "accent-hover": "#174a30",
      },

      fontFamily: {
        serif: ["Fraunces", "Georgia", "serif"],
        sans: ["Inter", "sans-serif"],
      },

      maxWidth: {
        article: "680px",
        nav: "960px",
      },
    },
  },
  plugins: [],
};