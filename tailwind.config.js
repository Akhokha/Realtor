module.exports = {
  mode: "jit", //just in time compiler
  content: [
    // Example content paths...
    "./public/**/*.html",
    "./src/**/*.{js,jsx,ts,tsx,vue}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  // darkMode: media, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      body: ["Montserrat", "sans-serif"],
    }, // provide font family.
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    require('@tailwindcss/forms'),
    // ...
  ],
};