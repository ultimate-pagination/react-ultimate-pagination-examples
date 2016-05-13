var CopyWebpackPlugin = require('copy-webpack-plugin').default;
var path = require('path');

module.exports = {
  entry: './src/main.js',
  output: {
    path: './build',
    publicPath: '/build/',
    filename: 'bundle.js',
  },
  devtool: 'source-map',
  devServer: {
    contentBase: './build',
    outputPath: path.join(__dirname, 'build')
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      {from: './src/index.html'},
    ])
  ]
};
