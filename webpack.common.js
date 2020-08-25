const path = require('path');
const webpack = require('webpack');
const BookmarkletWrapperPlugin = require('bookmarklet-wrapper-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV,
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              attributes: {
                id: `${process.env.npm_package_name}-styles`,
              },
              injectType: 'lazySingletonStyleTag',
            },
          },
          { loader: 'css-loader' },
          { loader: 'postcss-loader' },
          { loader: 'sass-loader' },
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  resolve: {
    roots: [path.resolve(__dirname, 'src')],
  },
  plugins: [
    new webpack.DefinePlugin({
      NAME: JSON.stringify(process.env.npm_package_name),
      VERSION: JSON.stringify(process.env.npm_package_version),
    }),
    new BookmarkletWrapperPlugin(),
  ],
};
