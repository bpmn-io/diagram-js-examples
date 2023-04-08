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
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: 'node_modules/diagram-js/assets/**/*', to: 'vendor' }
      ]
    })
  ],
  mode: 'development',
  devtool: 'source-map'
};
