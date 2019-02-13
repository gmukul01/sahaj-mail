const webpack = require('webpack'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  path = require('path');

const SRC = path.resolve(__dirname, 'src'),
  NODE_MODULES = path.resolve(__dirname, 'node_modules'),
  JS = path.resolve(__dirname, 'src/js'),
  BUILD = path.resolve(__dirname, 'build');

module.exports = {
  context: path.resolve(__dirname),
  devtool: 'source-map',
  entry: './src/js/index.js',
  output: {
    pathinfo: true,
    filename: '[name][hash].js',
    publicPath: '/',
    path: BUILD,
  },
  resolve: {
    extensions: ['.jsx', '.js', '.json'],
    modules: [SRC, NODE_MODULES, JS],
  },
  plugins: [
    new HtmlWebpackPlugin({
      minify: {
        collapseWhitespace: true,
        removeComments: true,
      },
      favicon: './public/favicon.ico',
      inject: false,
      template: './public/index.html',
    }),
  ],
  devServer: {
    contentBase: './build',
  },
};
