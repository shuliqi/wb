const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
module.exports = {
  // 入口
  entry: {
    app: "./src/index.js",
  },

  // 出口
  output: {
    filename: "[name].js",
    path:path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      { 
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],

        // css 是不做 tree shaking
        sideEffects: true,
      },
      { 
        test: /\.(png|jpg|gif)$/,
        use: ['file-loader', 'url-loader']
      }
    ]
  },
  // 插件
  plugins: [
    // 每次打包之前清楚dist文件下面的文件
    new  CleanWebpackPlugin(),
    
    // 自动生成html。并且引入我们的bundle js
    new HtmlWebpackPlugin({
      // title: "生产环境"
    }),
  ]

}