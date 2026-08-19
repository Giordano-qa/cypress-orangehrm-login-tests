const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    video: true, // Força a gravação
    videosFolder: "cypress/videos", // Define onde criar a pasta
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});