const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require('webpack');
module.exports = {
  // 开发环境
  mode: "development",
  
  // 入口
  entry: {
    app: "./src/index.js",
  },
  // module: {
  //   rules: [
  //     {
  //       test: /\.css$/,
  //       use: ['style-loader',, 'css-loader']
  //     }
  //   ]
  // },
  
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
         test: /\.(png|svg|jpg|gif)$/,
         use: [
           'file-loader'
         ]
      }
    ]
  },

  // 输出
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  
  // 控制是否生成或以及如何生成 source map
  devtool: "inline-source-map",

  // dev serve
  devServer: {
    // 将目录下的文件到serve 到 我们的端口下面
    contentBase: "./dist",
    hot: true,
    hotOnly: true
  },
  
  // 插件
  plugins: [
    // 每次打包之前将dist 文件下清空
    new CleanWebpackPlugin(),
    // 自动生成 html 文件， 并把我们需要的js 引用上
    new HtmlWebpackPlugin({
      title: 'Development',
      template: "./src/template.html"
    }),
    new webpack.HotModuleReplacementPlugin()
    
  ],
}