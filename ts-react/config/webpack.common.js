const webpack = require('webpack');
const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, '..', 'src'),
  entry: {
    app: './index',
    vendor: ['react', 'react-dom', 'react-router-dom', 'react-helmet']
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'runtime'
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
        test: /\.(gif|jpe?g|png)$/i,
        use: {
          loader: 'file-loader',
          options: { emitFile: false }
        }
      }
    ]
  },
  resolve: {
    plugins: [new TsconfigPathsPlugin({ configFile: path.resolve(__dirname, '..', 'tsconfig.json') })],
    extensions: ['.ts', '.tsx', '.js', '.json'],
    modules: ['node_modules', path.resolve(__dirname, '..', 'src')]
  }
};
