const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = {
  // 开发环境
  mode: "development",
  
  // 入口
  entry: {
    main: "./src/index.js",
    print: "./src/print.js"
  },

  // 输出
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  
  // 插件
  plugins: [
    // 每次打包之前将dist 文件下清空
    new CleanWebpackPlugin(),
    // 自动生成 html 文件， 并把我们需要的js 引用上
    new HtmlWebpackPlugin({
      title: "资源管理",
    }),
    
  ],
}