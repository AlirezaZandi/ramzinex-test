/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Vazirmatn", "sans-serif"],
      },

      colors: {
        neutral: "var(--neutral-light)",
        "text-low": "var(--text-low)",
        "text-high": "var(--text-high)",
        "text-medium": "var(--text-medium)",
        "text-placeholder": "var(--text-placeholder)",
        "text-button": "var(--text-button)",
        background: "var(--background)",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
