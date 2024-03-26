/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      keyframes: {
        intro: {
          from: { transform: "rotateY(0deg)" },
          to: { transform: "rotateY(180deg)" },
        },
      },
      animation: {
        intro: "intro 2s ease-in-out",
      },
    },
  },
  plugins: [],
}

