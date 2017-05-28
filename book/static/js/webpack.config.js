module.exports = {
  // Entry
  entry: {
    index: './index.js'
  },
  // Output
  output: {
    path: './build',
    filename: 'bundle.js'
  },
  // Loaders
  module: {
    loaders: [{
      test: /\.js$/, loader: 'jsx-loader'
    }]
  }
};
