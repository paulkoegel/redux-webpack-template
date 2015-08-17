var path = require('path');
var webpack = require('webpack');

module.exports = {
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/dev-server',
    path.resolve(__dirname, 'src/index.js')
  ],
  output: {
    path: path.resolve(__dirname, 'public/dist'),
    publicPath: 'dist/',
    filename: 'index.js'
  },
  module: {
    loaders: [
      // { test: /\.js$/, exclude: /node_modules/, loaders: ['react-hot', 'babel?optional[]=es7.functionBind'] },
      { test: /\.js$/, exclude: /node_modules/, loaders: ['react-hot', 'babel'] },
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.(png|jpg)$/, loader: 'url?limit=25000' },
      { test: /\.json$/, loader: 'json-loader' }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  devtool: 'source-map'
};
