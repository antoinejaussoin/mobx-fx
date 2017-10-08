module.exports = (config, env) => {
  const options = getPath(config, env);
  options.modules = true;
  options.localIdentName = "[name]__[local]___[hash:base64:5]";
  return config;
}

const getPath = (config, env) => {
  const css = config.module.rules[1].oneOf[2]

  if (env === 'production') {
    return css.loader[2].options;  
  }
  return css.use[1].options;  
}