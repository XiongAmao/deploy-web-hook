module.exports = {
  extends: 'eslint:recommended',
  env: {
    commonjs: true,
    es6: true,
    node: true
  },
  parserOptions: {
    ecmaVersion: '2018'
  },
  rules: {
    semi: ['error', 'always'],
    'no-multiple-empty-lines': ['off']
  }
}
