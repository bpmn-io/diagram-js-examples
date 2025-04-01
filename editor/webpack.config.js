const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    bundle: ['./src/index.js']
  },
  output: {
    library: 'Editor',
    libraryExport: 'default',
    libraryTarget: 'umd',
    path: __dirname + '/public',
    filename: 'vendor/editor.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          "css-loader"
        ],
      },
    ],
  },
  mode: 'development',
  devtool: 'source-map'
};
