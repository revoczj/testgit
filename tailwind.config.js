const plugin = require("tailwindcss/plugin");

module.exports = {
  mode: "jit",
  purge: {
    enabled: process.env.NODE_ENV === "production",
    content: ["./index.html", "./src/**/*.{vue,ts}"],
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
  ],
};
