'use strict'
/*
   development 环境下 webpack 配置文件，安装 plugins
*/
const webpack = require('webpack')
const merge = require('webpack-merge')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const baseWebpackConfig = require('./webpack.base.config')
const utils = require('./utils')
const config = require('./config')
const common = config.common
const current = utils.getEnvAndConf(config)
const WebpackNotifierPlugin = require('webpack-notifier')
const isProduction = false;

module.exports = merge(baseWebpackConfig, {
  devtool: '#cheap-module-eval-source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: utils.computeStyleLoader(isProduction, [
          'style-loader', 'css-loader', 'postcss-loader'
        ])
      }, {
        test: /\.scss$/,
        include: common.sourceCode,
        exclude: /node_modules/,
        use: utils.computeStyleLoader(isProduction, [
          'style-loader', 'css-loader', 'postcss-loader', 'sass-loader'
        ])
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dev'], {root: common.context}),
    // 使用模块的路径，而不是数字标识符作为ID，避免解析顺序引起的 hash 变化
    new webpack.NamedModulesPlugin(),
    // 热模块替换插件
    new webpack.HotModuleReplacementPlugin(),
    // 定义process.env.NODE_ENV环境变量
    new webpack.DefinePlugin({'process.env.NODE_ENV': current.conf.env.NODE_ENV}),
    // 将引入的第三方库拆分出来
    new webpack.optimize.CommonsChunkPlugin({name: 'vendor'}),
    // 将运行时代码拆分出来，配合其他插件避免每次打包 hash 都变化
    new webpack.optimize.CommonsChunkPlugin({name: 'runtime'}),
    // 编译出现错误时,跳过输出阶段,确保输出资源不会包含错误
    new webpack.NoEmitOnErrorsPlugin(),
    // 优化错误提示插件
    new FriendlyErrorsPlugin(),
    new WebpackNotifierPlugin({alwaysNotify: true})
  ]
})
