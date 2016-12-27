
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  debug: false,
  hasServer: false,
  modifyWebpackConfig: (config, options) => {
    if (options.type === 'client') {
      config.plugins.push(new HtmlWebpackPlugin({
        template: 'src/index.ejs'
      }));
    }

    return config;
  }
};
