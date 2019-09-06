const path = require('path');

module.exports = {
  entry: './app.js',
  output: {
    filename: 'bundle.min.js',
    path: path.resolve(__dirname, 'build')
  }
};
