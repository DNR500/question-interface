const path = require('path');

const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/public',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist/public'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/public/index.html',
      filename: 'index.html',
    }),
  ],
  devServer: {
    contentBase: path.join(process.cwd(), '/dist/public'),
    publicPath: '/',
    port: 9000,
    historyApiFallback: true,
    overlay: {
      warnings: true,
      errors: true,
    },
  },
};
