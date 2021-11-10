### install

add dev deps

`"neat-configs": "git://github.com/NeatTech-io/Neat-Configs.git#main",`

```js
// .eslintrc.js

const eslint = require("neat-configs/native/eslint")
// or
const eslint = require("neat-configs/backend/eslint")
// of
const eslint = require("neat-configs/frontend/eslint")

module.exports = {
  ...eslint,
  parserOptions: {
    ...eslint.parserOptions,
    project: ["./tsconfig.json"],
  },
  rules: {
    ...eslint.rules,
    // if you need add custom riles
  },
}
```

```json
// tsconfig.json

{
  "extends": "neat-configs/native/tsconfig.json",
  // or
  "extends": "neat-configs/backend/tsconfig.json",
  // or
  "extends": "neat-configs/frontend/tsconfig.json",

  ...
}

```

```js
// .prettierrc.js

module.exports = require("neat-configs/native/prettier")
// or
module.exports = require("neat-configs/backend/prettier")
// or
module.exports = require("neat-configs/frontend/prettier")
```

### rules

```js
    'import/order': [
      'error',
      {
        alphabetize: { order: 'asc' },
        'newlines-between': 'always',
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'unknown'],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
          { pattern: '~/**', group: 'internal' },
          { pattern: './**', group: 'sibling' },
        ],
      },
    ],

        'no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: '@react-navigation/core',
            importNames: ['useRoute'],
            message: 'Please import useNavigation / useRoute from ~/navigation instead.',
          },
          {
            name: '@react-navigation/native',
            importNames: ['useTheme'],
            message: "Please don't use",
          },
        ],
      },
    ],
```
