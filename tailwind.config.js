/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        "custom-primary": "#97CBFA",
        "custom-black": "#14140F",
        "custom-grey-3": "#616366",
        "custom-grey-2": "#C6C6CA",
        "custom-grey-1": "#C2C2C2",
        "custom-white-1": "#F5F5F5",
      },
    },
  },
  plugins: [],
};
