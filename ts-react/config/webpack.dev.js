const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const common = require('./webpack.common.js');

module.exports = merge(common, {
  target: 'web',
  output: {
    filename: '[name].js'
  },
  devtool: 'source-map',
  devServer: {
    contentBase: path.resolve(__dirname, '..', 'src'),
    historyApiFallback: true,
    host: process.env.HOST || 'localhost',
    overlay: {
      errors: true,
      warnings: true
    },
    port: process.env.PORT || '3000'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    new HtmlWebpackPlugin({
      inject: false,
      template: 'index.ejs',
      appMountId: 'app',
      lang: 'en',
      meta: [{ name: 'viewport', content: 'width=device-width,initial-scale=1' }, { charset: 'utf-8' }],
      title: 'Dev Site'
    })
  ]
});
