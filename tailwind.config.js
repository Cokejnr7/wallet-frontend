/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        // Your custom font family
        dystopian: ['"Dystopian"', "ui-sans-serif", "system-ui", "sans-serif"],

        // Optional: make Inter your default “sans”
        sans: ['"InterVariable"', "ui-sans-serif", "system-ui", "sans-serif"],
        inter: ['"InterVariable"', "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
