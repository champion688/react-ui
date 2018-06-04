/**
 * @description webpack的开发配置
 */

'use strict'

const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const path = require('path')

const devWebpackConfig = merge(baseWebpackConfig, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, '../dist'),
    historyApiFallback:false,
    host: '0.0.0.0',
    port: 3030
  }
})

module.exports = devWebpackConfig
