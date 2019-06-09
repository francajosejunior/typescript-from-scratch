const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')
const WebpackNotifierPlugin = require('webpack-notifier')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

module.exports = {
  devServer: {
    inline: true,
    port: 3334
  },
  devtool: 'source-map',
  mode: 'development',
  entry: __dirname + '/src/index.tsx',
  output: {
    path: __dirname + '/dist',
    filename: '[name].[contenthash].js'
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
    new WebpackNotifierPlugin({
      title: 'REACT-APP',
      skipFirstNotification: true,
      alwaysNotify: false
    }),
    new webpack.DefinePlugin({
      PRODUCTION: JSON.stringify(false)
    }),
    new ForkTsCheckerWebpackPlugin()
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx|mjs)$/,
        exclude: /node_modules/,
        include: /src/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true
          }
        }
      },
      {
        test: /\.(scss|css)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              localIdentName: '[local]--[name].[hash:base64:5]'
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.(jpe?g|png|gif|eot|woff2?|ttf|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: { name: 'assets/[name].[hash].[ext]' }
          }
        ]
      }
    ]
  }
}
