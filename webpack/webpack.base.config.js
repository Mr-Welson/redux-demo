'use strict'
/*
   webapck 基础配置
*/
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 根据模板生成 HTML
const packageConfig = require('../package.json');
const config = require('./config');
const utils = require('./utils');
const resolve = utils.resolve(__dirname, '../');
const common = config.common;
const current = utils.getEnvAndConf(config); // 得到当前的 NODE_ENV 环境变量和对应的配置
const namedAssets = utils.resolve(current.conf.assetsSubDirectory); // 二级资源路径拼接函数
// 引入
// const Jarvis = require('webpack-jarvis');

module.exports = {
	context: common.context,
	entry: utils.computeEntry(config, packageConfig),
	output: utils.computeOutput(config),
	cache: true,
	resolve: {
		extensions: [
			'.js', '.json', '.jsx', '.css', 'scss'
		],
		modules: ['node_modules', common.sourceCode],
		alias: {
			'src': common.sourceCode,
			'public': common.publicCode,
			'mock': utils.resolve(common.publicCode)('/mock')
		}
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				loader: 'eslint-loader',
				enforce: 'pre',
        include: utils.resolve(common.sourceCode)('/view'),
				options: {
					formatter: require('eslint-friendly-formatter')
				}
			}, {
				test: /\.(js|jsx)$/,
				loader: 'babel-loader',
				include: common.sourceCode
			}, {
				test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
				loader: 'url-loader',
				options: {
					limit: 10000,
					name: namedAssets(
						current.env !== 'production'
						? 'imgs/[name].[ext]'
						: 'imgs/[name].[hash:10].[ext]')
				}
			}, {
				test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
				loader: 'url-loader',
				options: {
					limit: 10000,
					name: namedAssets(
						current.env !== 'production'
						? 'media/[name].[ext]'
						: 'media/[name].[hash:10].[ext]')
				}
			}, {
				test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
				loader: 'url-loader',
				options: {
					limit: 10000,
					name: namedAssets(
						current.env !== 'production'
						? 'fonts/[name].[ext]'
						: 'fonts/[name].[hash:10].[ext]')
				}
			}, 
			// {
   //        test: require.resolve(common.requestModule),
   //        loader: 'imports-loader',
   //        options: {
   //          basicRequestLink: JSON.stringify(current.conf.basicRequestLink)
   //        }
   //     }
		]
	},
  plugins: [
    new HtmlWebpackPlugin({
      template: utils.resolve(common.publicCode)('index.html'),
      filename: 'index.html',
      inject: 'body',
      minify: false,
      xhtml: true,
      cache: false,
      favicon: utils.resolve(common.publicCode)('favicon.ico')
		}),
		// new Jarvis({
    //   port: 1337 // optional: set a port
    // })
  ]
}
