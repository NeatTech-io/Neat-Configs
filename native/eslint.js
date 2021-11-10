const plugins = require('../core/plugins');
const overrides = require('../core/overrides');
const extendsOptions = require('../core/extends');
const commonRules = require('../core/rules');

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  "extends": [
    ...extendsOptions,
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  "plugins": [
    ...plugins,
  ],
  settings: {
    'react': {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        paths: ['src'],
      },
    },
  },
  overrides: [
    ...overrides,
  ],
  rules: {
    ...commonRules['fontend/native'],
    ...commonRules['common'],
  }
}
