const path = require('path');

module.exports = (_) => [{
  entry: './build/client.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
},
{
  entry: './build/test_script.js',
  output: {
    filename: 'test_script.js',
    path: path.resolve(__dirname, 'public'),
  },
}];
