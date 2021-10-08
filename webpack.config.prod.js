const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'assets/scripts/'
  },
  devServer: {
    contentBase: './src'
  },
  devtool: 'cheap-source-map',

}