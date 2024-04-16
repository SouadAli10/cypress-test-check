const { defineConfig } = require("cypress");
const { cypressBrowserPermissionsPlugin } = require('cypress-browser-permissions')

module.exports = defineConfig({
  e2e: {
    env: {
      browserPermissions: {
        notifications: "allow",
        geolocation: "allow",
      },
    },
    defaultCommandTimeout: 6000,
    chromeWebSecurity: false,
    // add default view port to make sure we have a consistent test but usually we can override this in the specific test
    viewportHeight: 720, 
    viewportWidth: 1280,
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/results',
      overwrite: false,
      html: true,
      json: false,
    },
    baseUrl: 'https://www.astonmartin.com/en', // adding the link to the base url with the language
    setupNodeEvents(on, config) {
      // implement node event listeners here
      config = cypressBrowserPermissionsPlugin(on, config)
      return config
    },
  },
});
