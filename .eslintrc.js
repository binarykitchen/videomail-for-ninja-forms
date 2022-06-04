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
  root: true,
  env: {
    browser: true,
    es6: true
  },
  rules: {
    'no-debugger': 0,
    'import/no-named-as-default': 0,
    'no-else-return': 1,
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
