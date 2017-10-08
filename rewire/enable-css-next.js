module.exports = (config) => {
  // console.log(JSON.stringify(config))
  const css = config.module.rules[1].oneOf[2];
  const options = css.use[2].options;
  options.plugins = () => [
    require('postcss-cssnext'),
    require('postcss-flexbugs-fixes')
  ];
  return config;
}