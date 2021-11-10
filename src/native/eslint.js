module.exports = {
  env: {
    browser: true,
    es2021: true,
    'jest/globals': true,
  },
  "extends": [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb',
    'plugin:import/typescript'
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
    "react",
    "@typescript-eslint"
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
    {
      files: ["*.js", "*.jsx"],
      'rules': {
        '@typescript-eslint/*': ['off']
      }
    },
    {
      files: [
        '*.spec.ts',
        '*.spec.tsx',
        '*.spec.js',
        '*.spec.jsx',
        '*.test.ts',
        '*.test.tsx',
        '*.test.js',
        '*.test.jsx',
      ],
      rules: {
        '@typescript-eslint/no-explicit-any': 0,
      },
    },
  ],
  rules: {
    'indent': ['error', 2],
    '@typescript-eslint/no-explicit-any': ['error'],
    '@typescript-eslint/no-use-before-define': ['off'],
    'react/jsx-sort-props': ['error', { shorthandFirst: true, callbacksLast: true }],
    'max-len': [
      'warn',
      {
        code: 90,
        ignoreComments: true,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
    'no-console': ['warn'],
    // 'jsx-quotes': ['error', 'prefer-single'],
  }
}
