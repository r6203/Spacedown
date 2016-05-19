var path = require('path');

var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var htmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: path.join(__dirname, 'src/index.html'),
  filename: 'index.html',
  inject: true,
});

module.exports = {
  devtool: 'source-map',
  entry: [
    path.join(__dirname, 'src/js/main.jsx'),
    path.join(__dirname, 'src/css/main.scss'),
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'src/js'),
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        loader: 'style!css!sass',
      },
      {
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        loader: 'file-loader',
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    htmlWebpackPluginConfig,
    new webpack.NoErrorsPlugin(),

  ],
  resolve: {
    root: path.join(__dirname, ''),
    modulesDirectories: [
      'node_modules',
      'src/js',
    ],
    extensions: ['', '.js', '.jsx'],
  },
  devServer: {
    hot: true,
    port: 3000,
    historyApiFallback: true,
  },
};
