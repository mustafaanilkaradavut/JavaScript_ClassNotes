const { defineConfig } = require("cypress");

module.exports = defineConfig({
  watchForFileChanges: false,
  defaultCommandTimeout: 30000,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

