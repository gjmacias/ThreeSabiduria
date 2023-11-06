const path = require('path');

module.exports = {
  entry: './front-end/js/main.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'front-end/dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  // ... otras configuraciones como devServer si es necesario
};
