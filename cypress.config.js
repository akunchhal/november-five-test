const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://main--nove-movie-reviews.netlify.app",
  },
});
