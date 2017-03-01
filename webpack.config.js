const join = require('path').join;
const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');

const PATHS = {
  app: join(__dirname, 'src'),
  build: join(__dirname, 'build')
}

module.exports = {
  entry: {
    app: PATHS.app
  },
  output: {
    path: PATHS.build,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  plugins: [
    new HtmlPlugin({
      filename: 'index.html',
      template: './src/index.html',
      inject: true
    })
  ]
};