'use strict'

const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.config.js')
const path = require('path')

const devWebpackConfig = merge(baseWebpackConfig, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, '../src'),
    historyApiFallback:false,
    host: false,
    host: '0.0.0.0',
    port: 3030
  }
})

module.exports = devWebpackConfig
