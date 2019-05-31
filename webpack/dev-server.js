'use strict'
/*
   开发环境启动
*/
const config = require('./config');
const devConfig = config.development;

// 设置环境变量
if (!process.env.NODE_ENV) {
   process.env.NODE_ENV = JSON.parse(devConfig.env.NODE_ENV)
}

const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const opn = require('opn'); // 一个 node 插件，在浏览器中打开指定链接
const chalk = require('chalk'); // 命令行输出美化插件
const webpackConfig = require('./webpack.dev.config');
const utils = require('./utils');

const common = config.common;
const resolve = utils.resolve(common.context);

const devServerOptions = {
  contentBase: resolve('public'),
  publicPath: devConfig.assetsPublicPath,
  historyApiFallback: true,
  // (inline mode)时,在开发工具(DevTools)的控制台(console)将显示消息
  clientLogLevel: 'none',
  hot: true,
  inline: true,
  compress: true,
  openPage: 'index.html',
  disableHostCheck: true,
  stats: {
    colors: true,
    errors: true, // 添加错误信息
    warnings: true,
    modules: false,
    chunks: false
  },
  proxy: {
    //代理配置，此处是将所有/service/*请求通过 nginx代理，具体代理规则可以通过nginx配置设置
    '/service/*': {
      target: 'http://127.0.0.1:8891' //代理服务器地址
    },
    // '/mock/*': {
    //   target: 'http://127.0.0.1:8890/mock/'
    // },
    '/api/*': {
      target: 'http://127.0.0.1:8892/'
    },
    '/test/*': {
      target: 'http://127.0.0.1:8892/test/'
    },
    // '/socket.io/*': {
    //   target: 'http://127.0.0.1:8892'
    // }
  }
};

const compiler = webpack(webpackConfig);
const server = new WebpackDevServer(compiler, devServerOptions);
const { port, devServerIp } = devConfig;

server.listen(port, devServerIp, () => {
   const link = `http://${devServerIp}:${port}`;
   console.log(chalk.cyan(`Starting server on ${link}`));
   // 成功后打开指定链接
   opn(link).then(() => {
      console.log(chalk.cyan('success open ...'));
   }).catch(err => {
      console.log(chalk.red(err));
   })
})
