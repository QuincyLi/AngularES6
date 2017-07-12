var path = require('path');

module.exports = {
  entry: './app/entry.js',

  output: {
    filename: 'bundle.js',
    publicPath: "public"
  },

//   devtool: 'source-map',

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=stage-3' }
    ]
  }
}
  console.log(module.exports.output);