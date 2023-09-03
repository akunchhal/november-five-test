const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://main--nove-movie-reviews.netlify.app",
    // Added this because site is taking time to load after login
    defaultCommandTimeout: 10000,
  },
});
