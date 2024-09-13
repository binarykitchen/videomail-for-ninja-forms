module.exports = {
  parser: "@babel/eslint-parser",
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "prettier",
  ],
  env: {
    browser: true,
    node: true,
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
