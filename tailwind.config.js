/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        "custom-primary": "#97CBFA",
        "custom-black": "#14140F",
        "custom-grey-3": "#414345",
        "custom-grey-2": "#A6A6A6",
        "custom-grey-1": "#C6C6CA",
        "custom-white-1": "#F5F5F5",
      },
    },
  },
  plugins: [],
};
