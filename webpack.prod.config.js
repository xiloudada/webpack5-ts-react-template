const { merge } = require('webpack-merge')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const common = require('./webpack.config')

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  // 在生产环境压缩css代码
  plugins: [
    new OptimizeCssAssetsPlugin(),
  ],
})
