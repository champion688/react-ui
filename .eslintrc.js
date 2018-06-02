module.exports = {
  root: true,
  parser: 'babel-eslint',
  extends: "standard",
  env: {
    browser: true,
    node: true
  },
  globals: {
    $: false,
    _: false,
    angular: false
  },
  rules: {
    "no-console": "error"
  }
};
