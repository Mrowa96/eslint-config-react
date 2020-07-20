module.exports = {
  extends: ['airbnb-base', 'prettier'],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  rules: {
    'no-prototype-builtins': 'off',
    'no-console': ['error', { allow: ['warn', 'error', 'info'] }],
    'prettier/prettier': 'error',
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        assert: 'either',
      },
    ],
  },
  env: {
    node: true,
    es6: true,
  },
};
