const path = require("path");

module.exports = function override(config, env) {
  //do stuff with the webpack config...
  config.resolve.alias = {
    "@components": path.resolve(__dirname, "./components"),
  };
  return config;
};
