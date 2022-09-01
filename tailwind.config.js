module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        header: "url('/images/bg-header.webp')",
        about: "url('/images/bg-about.png')"
      }
    },
  },
  plugins: [],
}
