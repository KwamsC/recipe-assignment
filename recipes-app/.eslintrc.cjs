/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')
const createAliasSetting = require('@vue/eslint-config-airbnb/createAliasSetting')
const path = require('node:path')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-airbnb',
    // '@vue/eslint-config-prettier/skip-formatting',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    semi: [2, 'never'],
    'import/no-unresolved': 'error',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'no-use-before-define': ['error', { variables: false }],
  },
  settings: {
    ...createAliasSetting({
      '@': `${path.resolve(__dirname, './src')}`,
      '@services': `${path.resolve(__dirname, './src/services')}`,
      '@utils': `${path.resolve(__dirname, './src/utils')}`,
    }),
  },
}
