module.exports = {
  parser: "@babel/eslint-parser",
  extends: [
    "eslint:recommended",
    "standard",
    "standard-jsx",
    "plugin:import/errors",
    "plugin:import/warnings",
    "prettier",
  ],
  env: {
    browser: true,
    es6: true,
  },
  rules: {},
  globals: {
    Marionette: false,
    Backbone: false,
    jQuery: false,
    VideomailClient: false,
    nfRadio: false,
  },
};
