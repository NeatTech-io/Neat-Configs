module.exports = {
  'fontend/native': {
    'react/prop-types': ['off'],
    'react/no-set-state': ['off'],
    'react/no-array-index-key': ['warn'],
    'react/no-deprecated': ['warn'],
    'react/jsx-key': ['error'],
    'react/jsx-fragments': ['error'],
    'react/jsx-pascal-case': ['error'],
    'react/jsx-no-useless-fragment': ['off'],
    'react/jsx-curly-brace-presence': ['error', 'never'],
    'react/jsx-boolean-value': ['error', 'never'],
    'react/self-closing-comp': ['error', { component: true, html: true }],
    'react/no-string-refs': ['error'],
    'react/prefer-stateless-function': ['warn', { ignorePureComponents: true }],
    'react/jsx-closing-bracket-location': ['warn', 'tag-aligned'],
    'react/jsx-props-no-spreading': ['off'],
    'react/display-name': ['off'],
    'react/no-children-prop': ['off'],
    'react/jsx-sort-props': ['error', { shorthandFirst: true, callbacksLast: true }],
    'react/jsx-filename-extension': [2, { 'extensions': ['.js', '.jsx', '.ts', '.tsx'] }]
  },
  'common': {
    'import/no-extraneous-dependencies': ['off'],
    'import/no-unused-modules': ['off'],
    'import/no-cycle': ['warn'],
    'import/no-useless-path-segments': ['error'],
    'import/no-unused-modules': ['error'],
    'import/extensions': ['off'],
    'import/export': ['off'],
    'import/prefer-default-export': ['off'],
    'indent': ['error', 2],
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
    'arrow-parens': ['warn', 'as-needed'],
    'import/no-cycle': ['warn'],
    'import/no-useless-path-segments': ['error'],
    'import/no-unused-modules': ['error'],
    'import/extensions': ['off'],
    'import/export': ['off'],
    'import/prefer-default-export': ['off'],
    'import/no-unresolved': ['off'],
    // ts
    '@typescript-eslint/no-explicit-any': ['error'],
    '@typescript-eslint/array-type': ['error', { default: "array-simple" }],
    '@typescript-eslint/ban-ts-comment': ['off'],
    '@typescript-eslint/ban-types': ['off'],
    '@typescript-eslint/no-var-requires': ['off'],
    '@typescript-eslint/no-unused-vars': ['off'],
    '@typescript-eslint/ban-ts-ignore': ['off'],
    '@typescript-eslint/no-empty-interface': ['off'],
    '@typescript-eslint/adjacent-overload-signatures': ['error'],
    '@typescript-eslint/consistent-type-definitions': ['off'],
    '@typescript-eslint/member-ordering': ['off'],
    '@typescript-eslint/no-extra-non-null-assertion': ['error'],
    '@typescript-eslint/no-floating-promises': ['error', { ignoreVoid: true }],
    '@typescript-eslint/no-for-in-array': ['error'],
    '@typescript-eslint/no-misused-new': ['error'],
    '@typescript-eslint/no-misused-promises': ['error'],
    '@typescript-eslint/no-non-null-asserted-optional-chain': ['error'],
    '@typescript-eslint/no-require-imports': ['off'],
    '@typescript-eslint/no-throw-literal': ['error'],
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': ['error'],
    '@typescript-eslint/no-unnecessary-type-arguments': ['error'],
    '@typescript-eslint/prefer-as-const': ['error'],
    '@typescript-eslint/prefer-for-of': ['error'],
    '@typescript-eslint/prefer-includes': ['error'],
    '@typescript-eslint/no-extraneous-class': ['off'],
    '@typescript-eslint/no-this-alias': ['error'],
    '@typescript-eslint/prefer-optional-chain': ['error'],
    '@typescript-eslint/prefer-regexp-exec': ['warn'],
    '@typescript-eslint/prefer-string-starts-ends-with': ['error'],
    '@typescript-eslint/promise-function-async': ['error'],
    '@typescript-eslint/switch-exhaustiveness-check': ['error'],
    '@typescript-eslint/restrict-plus-operands': ['warn'],
    '@typescript-eslint/explicit-function-return-type': ['off'],
    '@typescript-eslint/no-empty-function': ['off'],
    '@typescript-eslint/no-use-before-define': ['off'],
    'no-use-before-define': ['off'],
  }
}
