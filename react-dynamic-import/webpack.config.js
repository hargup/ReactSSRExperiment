const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = [{
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
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
      libraryTarget: 'module'
    },
    experiments: {
      outputModule: true,
    },
    plugins: [
    new HtmlWebpackPlugin({
      title: 'Dynamic Import',
    }),
  ],
},
{
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
  entry: './src/fruits/apple.js',
  output: {
    filename: 'apple.js',
    path: path.resolve(__dirname, 'dist', 'fruits'),
    libraryTarget: 'module'
  },
  // externals: {
  //   react: 'react',
  // },
  experiments: {
    outputModule: true,
  },
}];
