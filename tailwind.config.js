/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#fbf8f3",
        linen: "#f3ede4",
        stone: "#e1d6c7",
        taupe: "#c2b3a1",
        sage: "#7f8f7a",
        eucalyptus: "#9aa792",
        walnut: "#6c5040",
        roseclay: "#c7a89e",
        charcoal: "#3f3933",
        dusty: "#7f8f7a",
        lilac: "#d6c8b7",
        blush: "#c7a89e",
        lavender: "#e8dece",
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "Georgia", "serif"],
        sans: ["DM Sans", "Segoe UI", "sans-serif"],
      },
      boxShadow: {
        soft: "0 16px 34px rgba(70, 54, 44, 0.08)",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.8s ease-out both",
      },
    },
  },
  plugins: [],
};
