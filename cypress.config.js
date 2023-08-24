const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight:900,
  viewportWidth:1600,
  watchForFileChanges:false,
  e2e: {
    baseUrl:'https://test.urbanicfarm.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
