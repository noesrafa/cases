/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      transitionTimingFunction: {
        "expo": "cubic-bezier(0,.69,.16,1.01)",
        "spring": "cubic-bezier(0.26,0,0,1.01);",
      },
    },
  },
  plugins: [],
};
