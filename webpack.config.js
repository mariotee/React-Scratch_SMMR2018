const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

const htmlWebpackPlugin = new HtmlWebPackPlugin(
{
  template: './src/index.html',
  filename: './index.html'
});

module.exports =
{
  entry: ['babel-polyfill','./src/index.js'],
  devServer: {
    historyApiFallback: true,
  },
  resolve: {
    modules: [path.resolve(__dirname, 'node_modules'),path.resolve(__dirname, 'src')],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', 
          options: { 
            plugins: ['transform-object-rest-spread'],
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options:
            {
              modules: true,
              importLoaders: 1,
              localIdentName: '[name]_[local]_[hash:base64]',
              sourceMap: true,
              minimize: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [htmlWebpackPlugin],
};
