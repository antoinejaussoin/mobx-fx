module.exports = (config, env) => {
  // console.log(JSON.stringify(config))
  const options = getPath(config, env);
  options.plugins = () => [
    require('postcss-cssnext'),
    require('postcss-flexbugs-fixes')
  ];
  return config;
}

const getPath = (config, env) => {
  const css = config.module.rules[1].oneOf[2]

  if (env === 'production') {
    return css.loader[3].options;  
  }
  return css.use[2].options;  
}