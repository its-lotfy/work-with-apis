/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      flex: {
        0: "0 0 240px",
      },
      animation: {
        skelton: "skelton 3s linear infinite",
      },
      keyframes: {
        skelton: {
          "0%": {
            backgroundColor: "hsl(200, 20%, 80%)",
          },
          "100%": {
            backgroundColor: "hsl(200, 20%, 95%)",
          },
        },
      },
    },
  },
  plugins: [],
};
