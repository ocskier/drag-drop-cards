const path = require("path");

module.exports = function override(config, env) {
  //do stuff with the webpack config...
  config.resolve.alias = {
    "@components": path.resolve(__dirname, "./src/components"),
    "@data": path.resolve(__dirname, "./src/data"),
  };
  return config;
};
