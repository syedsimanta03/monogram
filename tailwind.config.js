
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "jm-orange": "var(--jm-orange)",
        "jm-black": "var(--jm-black)",
        "jm-background": "var(--jm-background)",
        "jm-color": "var(--jm-color)",
      },
    },
  },
  plugins: [],
};
