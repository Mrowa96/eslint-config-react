# ESLint config for React based projects

## What is included?

### Configuration for JavaScript files e.g. webpack.config.js etc.

Based on `airbnb-base` with additional prettier rules

### Configuration for TypeScript source files

Based on `airbnb-typescript` with `@typescript-eslint`, `import` and `prettier`

### Separate configuration for TypeScript tests files

Based on previous config, but with some rules disabled for easier testing

## How to use it?

You can configure your `.eslintrc` for example in this way:

```js
module.exports = {
  extends: ['@mrowa96/eslint-config-react/base'],
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      extends: ['@mrowa96/eslint-config-react/typescript'],
    },
    {
      files: ['**/*.test.ts', '**/*.test.tsx'],
      extends: ['@mrowa96/eslint-config-react/typescript-test'],
    },
  ],
};
```
