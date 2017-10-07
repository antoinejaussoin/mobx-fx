const rewireMobX = require('react-app-rewire-mobx');
const { injectBabelPlugin } = require('react-app-rewired');
const rewireCssModule = require('./rewire/enable-css-modules');

/* config-overrides.js */
module.exports = function override(config, env) {
  config = injectBabelPlugin('mobx-deep-action', config);
  config = rewireMobX(config, env);
  config = rewireCssModule(config);
  return config;
}