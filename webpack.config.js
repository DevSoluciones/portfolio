const path = require('path');
const webpack = require('webpack');
const fs = require('fs');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry:{
          app:['./assets/js/vendor/what-input.js','./assets/js/vendor/foundation.min.js','./assets/js/app.js','./assets/css/app.scss']
         },
  output: {
    path: path.resolve(__dirname,'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { // sass / scss loader for webpack 'style-loader'
        test: /\.(sass|scss)$/,
        loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
      }, 
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: false,
            },
          },
        ],
      },
      {
        test: /\.js$/, 
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {presets:['es2015']}
      }
    ]
  },
  devtool: 'eval-source-map',
  performance: {
    hints: false
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss']
  },
  plugins: [
    new ExtractTextPlugin({ // define where to save the file
      filename: '[name].css',
      allChunks: true,
    }),
    new UglifyJsPlugin({
      cache: true,
      parallel: true,
      uglifyOptions:{
        compress: false,
        ecma: 6,
        mangle: true
      },
      sourceMap: true
    })
  ],
  devServer: {
    host: "dev.devsoluciones.github.io",
    port: 8000,
    https: {
      key: fs.readFileSync('privateKey.key'),
      cert: fs.readFileSync('certificate.crt')
    }
  }
};
