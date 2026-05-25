const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "r3t8xp",
  allowCypressEnv: false,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
