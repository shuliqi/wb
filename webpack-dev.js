const webpack = require("webpack");
const { merge } = require('webpack-merge');
const common = require('./webpack-common.js');
module.exports = merge(common, {
   // 开发环境
  mode: "development",

  // 使用 souce map，将编译之后的文件映射到源代码
  devtool: "inline-source-map", 

  // 使用wathc 模式的话， 会自动编译， 但是需要我们手动刷新页面
  // 使用 webpack-dev-server，代码变动， 自动编译并且重新加载
  devServer: {
    contentBase: "./dist/",
    // 开启模块热替换
    hot: true
  },

  plugins: [
    // 模块热替换
    new webpack.HotModuleReplacementPlugin(),
  ]
  
})