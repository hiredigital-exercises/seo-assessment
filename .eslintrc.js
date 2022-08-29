module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'react/jsx-key': 'off',
    'no-unused-vars': 'off',
    'react/jsx-no-target-blank': 'off',
    'no-unused-expressions': 'off',
    'react/display-name': 'off',
  },
};
