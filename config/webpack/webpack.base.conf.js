/**
 * @description webpack的基本配置
 */
"use strict"

const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require("path")
const ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = {
  entry: resolve("src/main.js"),
  output: {
    path: resolve("dist"),
    filename: "[name].[hash:4].js"
  },
  resolve: {
    extensions: [".js"],
    alias: {
      "@": resolve("src"),
      "@components": resolve("@/components"),
      "@lib": resolve("@components/lib"),
      "@mock": resolve("@components/mock"),
      "@api": resolve("@/api")
    }
  },
  resolveLoader: {
    moduleExtensions: ["-loader"]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel",
        query: {
          presets: ["es2015", "react"]
        },
        exclude: /node_modules/
      },
      {
        test: /\.html$/,
        loader: "html"
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style",
          use: [{ loader: "css", options: { sourceMap: true } }]
        })
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: "style",
          use: [
            { loader: "css", options: { sourceMap: true } },
            {
              loader: "less",
              options: { sourceMap: true, javascriptEnabled: true }
            }
          ]
        })
      }
    ]
  },
  plugins: [
    // 提取css
    new ExtractTextPlugin("style.[hash:4].css"),
    // 将打包后的资源注入到html文件内
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "index.html",
      inject: true
    })
  ]
}

function resolve(dir) {
  return path.join(__dirname, "../..", dir)
}
