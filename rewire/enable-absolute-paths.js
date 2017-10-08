const path = require('path');

module.exports = (config) => {
  const moduleResolve = config.resolve.modules;
  moduleResolve.push(path.resolve('./src'));
  return config;
}