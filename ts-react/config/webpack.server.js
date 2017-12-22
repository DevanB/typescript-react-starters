const path = require('path');
const webpack = require('webpack');
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');

const files = require('../build/manifest.json');

const routes = ['/', '/about', '/team'];

module.exports = {
  context: path.resolve(__dirname, '..', 'src'),
  target: 'node',
  entry: {
    server: './server.ts'
  },
  output: {
    path: path.resolve(__dirname, '..', 'dist'),
    publicPath: '/',
    filename: '[name].[chunkhash].js',
    libraryTarget: 'umd'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new StaticSiteGeneratorPlugin({
      paths: routes
    })
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/i,
        use: ['ts-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.ejs$/i,
        use: ['raw-loader']
      },
      {
        test: /\.(gif|jpe?g|png)$/i,
        use: {
          loader: 'file-loader',
          options: { emitFile: false }
        }
      },
      {
        test: /\.(ico|mp4|svg|woff2?)$/i,
        use: {
          loader: 'file-loader',
          options: {
            name: filename => '[name].[ext]',
            emitFile: false
          }
        }
      }
    ]
  },
  resolve: {
    modules: [path.resolve(__dirname, '..', 'src'), 'node_modules']
  }
};
