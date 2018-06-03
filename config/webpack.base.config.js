/**
 * @description webpack的基本配置
 */
"use strict"

const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require("path")

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
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        query: {
          presets: ["es2015", "react"]
        },
        exclude: /node_modules/
      },
      {
        test: /\.html$/,
        loader: "html-loader"
      },
      {
        test: /\.css$/,
        loader: 'css-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "index.html",
      inject: true
    })
  ]
}

function resolve(dir) {
  return path.join(__dirname, "..", dir)
}
