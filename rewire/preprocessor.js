const babel = require('babel-core');
const jestPreset = require('babel-preset-jest');
const path = require('path');
//const mobxDeepAction = require('babel-plugin')

// module.exports = {
//   process: function (src) {
//     console.log('hello')
//     const transformCfg = {
//       babelrc: false,
//       presets: ['babel-preset-react-app' ],
//       compact: true,
//       plugins: ['transform-decorators-legacy', 'mobx-deep-action']
//     }
//     return babel.transform(src, transformCfg).code
//   }
// }


const babelJest = require('babel-jest');

module.exports = babelJest.createTransformer({
  presets: [require.resolve('babel-preset-react-app')],
  plugins: ['transform-decorators-legacy', 'mobx-deep-action'],
  babelrc: false,
});