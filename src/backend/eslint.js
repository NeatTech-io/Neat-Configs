module.exports = {
  env: {
    node: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
  ],
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
}
