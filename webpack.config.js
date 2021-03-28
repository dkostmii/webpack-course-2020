const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  mode: 'development',
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      title: "Webpack Course 2020",
      scriptLoading: 'defer',
      meta: {
        viewport: 'width=device-width,initial-scale=1',
      },
      template: 'src/assets/index.html',
      inject: 'body'
    }),
  ],

  entry: {
    App: './src/main.js',
    Analytics: './src/analytics.js'
  },
  output: {
    publicPath: '/',
    filename: '[name].bundle.js',

    /* Provide libraries for browser */
    library: {
      name: 'My[name]',
      type: 'window',
    }
  },
  // just for web
  target: 'web',

  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      include: [path.resolve(__dirname, 'src')],
      loader: 'babel-loader'
    }, {
      test: /.css$/,

      use: [{
        loader: "style-loader"
      }, {
        loader: "css-loader",

        options: {
          sourceMap: true
        }
      }]
    }]
  },

  devServer: {
    open: true,
    host: 'localhost',
    injectClient: false,
  }
}