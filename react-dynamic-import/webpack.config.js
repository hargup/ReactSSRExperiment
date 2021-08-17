const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ["@babel/plugin-syntax-dynamic-import", "@babel/plugin-transform-react-jsx"]

          }
          
        }
      }
    ],
  },
    entry: {
      index: './src/index.js',
    },
    output: {
      clean: true,
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
    new HtmlWebpackPlugin({
      title: 'Dynamic Import',
    }),
  ],
};
