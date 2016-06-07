"use strict";
const webpack = require("webpack");

module.exports = {
  entry: {
    app: "./src/js/index.js",
    vendor: [
      "angular",
      "angular-animate",
      "angular-material",
      "angular-aria",
      "angular-messages"
    ]
  },
  output: {
    path: __dirname + '/public/js/',
    filename: "bundle.js"
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /(node_modules\/|bower_components\/)/,
      loader: 'babel?presets[]=es2015'
    }]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.bundle.js"),
    new webpack.optimize.UglifyJsPlugin({minimize: true})
  ]
};
