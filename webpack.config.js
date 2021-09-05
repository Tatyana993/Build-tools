const {resolve} = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniExtracrPlugin = require("mini-css-extract-plugin")
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
module.exports = {
  entry: "./src/main.js",
  output: {
    path: resolve(__dirname, "build"),
    filename: "main.[contenthash].js"
  },
module: {
  rules: [
    {
      test: /\.css$/,
      use: [MiniExtracrPlugin.loader, "css-loader"]
    },
    {
      test: /\\.(png|jpe?g|gif|mp3)$/i, 
			use: ['file-loader']
    }
  ]
},
  plugins: [
     new HtmlWebpackPlugin({
       filename: 'index.html',
      template: './index.html'
    }),  
    
     new HtmlWebpackPlugin({
       filename: 'timer.html',
      template: './src/timer.html'
    }),
    new HtmlWebpackPlugin({
       filename: 'datecalc.html',
      template: './src/datecalc.html'
    }),
    new MiniExtracrPlugin({
      filename:"[name].[contenthash].css"
    }),
    new BundleAnalyzerPlugin(),   
  ]
}

