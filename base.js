module.exports = {
  extends: ['airbnb-base', 'prettier'],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  rules: {
    'no-prototype-builtins': 'off',
    'prettier/prettier': 'error',
  },
  env: {
    node: true,
    es6: true,
  },
};
