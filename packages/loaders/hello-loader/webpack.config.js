const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(md)$/,
        use: [
          {
            loader: path.resolve(__dirname, './loader.js')
          }
        ]
      }
    ]
  },
  optimization: {
    minimize: false
  }
};
