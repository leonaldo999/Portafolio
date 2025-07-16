/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class", // 👈 Activamos modo oscuro por clase
  theme: {
    extend: {
      colors: {
        primary: "#2563eb",
        secondary: "#1e40af",
        neutral: "#f9fafb",
      },
    },
  },
  plugins: [],
};
