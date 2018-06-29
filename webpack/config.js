'use strict'
/*
   开发配置文件
*/
// ip 模块用来获取本机 ip
const ip = require('ip').address();
// 自定义的一组工具函数
const utils = require('./utils');
const resolve = utils.resolve(__dirname, '../');
module.exports = {
   common: {
      context: resolve(''), // 定义根目录路径
      sourceCode: resolve('src'), // 源码目录路径
      publicCode: resolve('public'), // dev server静态资源访问目录
      // 封装的请求模块位置，用于注入请求与服务器地址
      // requestModule: resolve('src/api/request.js')
   },
   development: {
      env: {NODE_ENV: JSON.stringify('development')},
      port: process.env.PORT || 9000, // 设置开发时端口号
      devServerIp: 'localhost',
      // devServerIp: ip,
      // disableHostCheck: true,
      // basicRequestLink: `http://${ip}:3167`,
      entryPath: null, // 默认为 './src/index.js'
      assetsRoot: resolve('public'), // 内存和开发时编译后的文件路径，不会显示
      assetsSubDirectory: 'static', // 二级资源路径
      assetsPublicPath: '/', // 编译发布的根目录
   },
   production: {
      env: {NODE_ENV: JSON.stringify('production')},
      // basicRequestLink: `http://${ip}:3167`, // 生产时设置为服务器地址
      entryPath: null, // 默认为 './src/index.js'
      assetsRoot: resolve('dist'), // 编译后的静态资源路径
      assetsSubDirectory: 'static',
      assetsPublicPath: '/', // 编译发布的根目录
      productionSourceMap: false, // js sourceMap
      bundleAnalyzerReport: utils.shouldReport(), // 是否显示report页面，也就是各个模块的打包细节
   }
}
