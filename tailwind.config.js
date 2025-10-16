/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#E9EBEC",
        bgAlt: "#F2F3EF",
        footer: "#DADDDD",
        text: "#1A1A1A",
        textMuted: "#5C5F61", // 👈 this line enables text-textMuted
        accent: "#7A8CA8",
        card: "#F8F9F9",
        border: "rgba(0,0,0,0.05)",
      },
      fontFamily: {
        serif: ["Canela", "Times New Roman", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 4px 20px rgba(0,0,0,0.04)",
      },
    },
  },
  plugins: [],
};
