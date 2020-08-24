const merge = require('webpack-merge');
const path = require('path');

const common = require('./webpack.common');

module.exports = merge(common, {
  entry: {
    bookmarklet: './src/index.js',
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].js',
  },
  devServer: {
    contentBase: path.join(__dirname, 'build'),
    host: '127.0.0.1',
    port: 3010,
    inline: false,
  },
  devtool: 'eval-source-map',
});
