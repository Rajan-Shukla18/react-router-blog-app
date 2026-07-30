/** @type {import('tailwindcss').Config} */
export default {

  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],

  theme: {
    extend: {
      colors: {
        // ---------- Light Theme ----------
        bg: "#FAF8F5",
        surface: "#FFFFFF",
        border: "#E5E0D8",
        text: "#1A1A18",
        muted: "#6B6B66",
        accent: "#1F5E3D",
        "accent-hover": "#174A30",    
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