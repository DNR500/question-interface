module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier'],
  plugins: ['react', 'jsx-a11y', 'import'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/jsx-props-no-spreading': 0,
    'react/require-default-props': 0,
    'react/jsx-one-expression-per-line': 0,
    'no-nested-ternary': 0,
    'import/prefer-default-export': 0,
    'no-console': ['error', { allow: ['info', 'warn', 'error'] }],
  },
  env: {
    browser: true,
    jest: true,
  },
};
