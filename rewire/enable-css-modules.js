module.exports = (config) => {
  // console.log(JSON.stringify(config))
  const css = config.module.rules[1].oneOf[2];
  const options = css.use[1].options;
  options.modules = true;
  options.localIdentName = "[name]__[local]___[hash:base64:5]";
  return config;
}