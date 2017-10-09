const babelJest = require('babel-jest');

module.exports = babelJest.createTransformer({
  presets: [require.resolve('babel-preset-react-app')],
  plugins: ['transform-decorators-legacy', 'mobx-deep-action'],
  babelrc: false,
});