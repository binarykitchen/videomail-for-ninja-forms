module.exports = {
  parser: '@babel/eslint-parser',
  plugins: [],
  extends: [
    'eslint:recommended',
    'standard',
    'standard-jsx',
    'plugin:import/errors',
    'plugin:import/warnings'
  ],
  env: {
    browser: true,
    es6: true
  },
  rules: {
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'ignore',
        named: 'ignore',
        asyncArrow: 'ignore'
      }
    ]
  },
  globals: {
    Marionette: false,
    Backbone: false,
    jQuery: false,
    VideomailClient: false,
    nfRadio: false
  }
}
