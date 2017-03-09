var path = require('path');
var webpack = require('webpack');
var webpack_dev_server = require('webpack-dev-server');
var HtmlWebpackPlugin = require('html-webpack-plugin');
//const ENV = process.env.NODE_ENV = process.env.ENV = 'production';
//const ENV = process.env.NODE_ENV = process.env.ENV = 'test';
const ENV = process.env.NODE_ENV = process.env.ENV = 'development';

module.exports = {
  entry:  {
    index: "./dev/boot.ts",
  },
  output: {
    publicPath: '/app/bundle/',
    path: './app/bundle',
    filename: '[name].min.js',
    chunkFilename: '[id].chunk.js'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.ts'],
  },

  module: {
    rules: [
        {
            test: /\.ts$/,
            loaders: ['awesome-typescript-loader','angular2-template-loader','angular-router-loader'],
            exclude: [/\.(spec|e2e|d)\.ts$/]
        },
        {
            test: /\.html$/,
            loader: 'raw-loader'
        },
        {
            test: /\.css$/,
            loader: 'raw-loader'
        }
    ],
  },
  plugins: [
    new webpack.ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
      __dirname
    ),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      mangle: false,
      sourceMap: true,
      compress: { warnings: false },
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'ENV': JSON.stringify(ENV)
      }
    })
  ],
  node: {
      net: 'empty'
  }
};
