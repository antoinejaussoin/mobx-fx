const rewireMobX = require('react-app-rewire-mobx');
const { injectBabelPlugin } = require('react-app-rewired');
const rewireCssModule = require('./rewire/enable-css-modules');
const rewireCssNext = require('./rewire/enable-css-next');

/* config-overrides.js */
module.exports = function override(config, env) {
  config = injectBabelPlugin('mobx-deep-action', config);
  config = rewireMobX(config, env);
  config = rewireCssModule(config);
  config = rewireCssNext(config);
  return config;
}