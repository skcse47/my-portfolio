/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class", // enable dark mode via .dark class
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      colors: {
        primary: "#1c1c22",
        accent: "#00ff99",
        accentHover: "#00e187",
        brand: "#6366f1",
        brandDark: "#4f46e5",
        brandLight: "#a5b4fc",
        background: "#ffffff",
        foreground: "#1c1c22",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrainsMono)", "monospace"],
      },
    },
  },
  plugins: [],
};
