/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background-color)",
        text: "var(--text-color)",
        accent: "var(--accent-color)",
        secondary: "var(--secondary-color)",
      },
    },
  },
  plugins: [],
};
