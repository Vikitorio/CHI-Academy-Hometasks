const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, args) => {
  const isProduction = args.mode === "production";
  console.log("Production mod: ", isProduction);
  return {
    entry: './index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].[contenthash].js',
      publicPath: isProduction ? './' : "/"
    },
    mode: isProduction ? "production" : "development",
    devServer: {
      compress: true,
      port: 9000,
      hot: true,
      historyApiFallback: true,
    },
    plugins: [
      new HtmlWebpackPlugin({ template: './src/index.html' })
    ],
    optimization: {
      splitChunks: {
        chunks: "all",
      },
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: 'babel-loader'
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        },
        {
          test: /\.(png|jpe?g|gif)$/i,
          use: [
            {
              loader: 'file-loader',
            },
          ],
        },
      ]
    }
  }
};
