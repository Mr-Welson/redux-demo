'use strict'
/*
   生产环境输出编译后文件
*/
const config = require('./config');
const prodConfig = config.production;

// 设置环境变量
process.env.NODE_ENV = JSON.parse(prodConfig.env.NODE_ENV)

const webpack = require('webpack');
const ora = require('ora'); // 一个命令行 loading 插件
const chalk = require('chalk');
const webpackConfig = require('./webpack.prod.config');
const path = require('path');
const fs = require('fs-extra');

// loading
const spinner = ora('building for production...');
spinner.start();

webpack(webpackConfig, function(err, stats) {
	spinner.stop();
	if (err) {
		throw err
	}
	process
		.stdout
		.write(stats.toString({colors: true, modules: false, children: false, chunks: false, chunkModules: false}) + '\n\n')

	//复制除了index.html外的静态文件，所以public文件夹不要放不使用的文件
  fs.copySync(config.common.publicCode, prodConfig.assetsRoot, {
    dereference: true,
    filter: file => {
    	console.log(file,35)
      if (file === path.resolve(config.common.publicCode, 'index.html')) {
        return false;
      }
      //public/mock目录不复制
      if (file === path.resolve(config.common.publicCode, 'mock')) {
        return false;
      }
      return true;
    },
  });

	if (stats.hasErrors()) {
		console.log(chalk.red('  Build failed with errors.\n'))
		process.exit(1)
	}
	console.log(chalk.cyan('  Build complete.\n'))
	console.log(chalk.yellow('  Tip: built files are meant to be served over an HTTP server.\n' + '  Opening index.html over file:// won\'t work.\n'))
})
