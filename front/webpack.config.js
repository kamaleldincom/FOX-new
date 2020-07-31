var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, '/static/front'),
    publicPath: '/static/front/',
    filename: 'main.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: '../../templates/front/index_test_output3.html',
    })
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'templates/front'),
    publicPath: '/static/front/',
    proxy: {
      '/api': 'http://localhost:8000'
    }
  },
  devtool: 'inline-source-map'
};