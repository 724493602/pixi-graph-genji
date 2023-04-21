module.exports = {
  env: {
    browser: true,
    // es2021: true
  },
  extends: ['prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'no-console': 'on', //['error', { allow: ['warn', 'error'] }],
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'import/prefer-default-export': 'off',
    'consistent-return': 'off',
    'max-classes-per-file': 'off',
    'no-restricted-syntax': 'off',
    'require-jsdoc': 'off',
    'key-spacing': 'off'
  }
};
