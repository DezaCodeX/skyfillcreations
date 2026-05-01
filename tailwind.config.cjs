/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "rgb(var(--bg))",
        surface: "rgb(var(--surface))",
        "surface-2": "rgb(var(--surface-2))",
        brand: {
          DEFAULT: "rgb(var(--brand-1))",
          soft: "rgb(var(--brand-2))",
        },
        gold: "rgb(var(--brand-1))",
        platinum: "rgb(var(--platinum))",
        muted: "rgb(var(--muted))",
      },
      fontFamily: {
        display: ["Inter", "system-ui", "-apple-system", "sans-serif"],
        body: ["Inter", "system-ui", "-apple-system", "sans-serif"],
        luxury: ["Inter", "system-ui", "-apple-system", "sans-serif"],
      },
      boxShadow: {
        glow: "0 25px 70px rgba(201, 161, 74, 0.35)",
        soft: "0 16px 40px rgba(0, 0, 0, 0.6)",
      },

    },
  },
  plugins: [],
};
