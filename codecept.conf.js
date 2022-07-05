/* eslint-disable linebreak-style */
/* eslint-disable import/no-unresolved */
const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

exports.config = {
  tests: 'e2e/**/*.spec.js',
  output: 'e2e/outputs',
  helpers: {
    Puppeteer: {
      url: 'http://127.0.0.1:8080',
      show: true,
      windowSize: '1200x900',
      waitForNavigation: ['domcontentloaded', 'networkidle0'],
      waitForAction: 500,
    },
  },
  include: {
    I: './steps_file.js',
  },
  bootstrap: null,
  mocha: {},
  name: 'restaurant-apps-ihsanularifinm',
};
