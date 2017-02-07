/* eslint-disable */

var path = require('path');
var webpack = require('webpack');

var root = path.join(process.cwd(), 'src');

module.exports = {
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index.js',
  ],

  output: {
    path: path.join(process.cwd(), 'dist'),
    publicPath: '/assets/',
    filename: 'bundle.js',
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader?importLoaders=1',
        ],
      },
      {
        test: /\.(eot|png|ttf|svg|woff|woff2|jpg)$/,
        loader: 'url-loader',
      }
    ],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],

  resolve: {
    extensions: ['', '.js', '.jsx'],
    root: root,
  },
};
