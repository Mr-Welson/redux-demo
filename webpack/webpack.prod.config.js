'use strict';
/*
   production 环境下 webpack 配置文件，安装 plugins
*/
const webpack = require('webpack');
const merge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin'); // 文件抽离插件
const CleanWebpackPlugin = require('clean-webpack-plugin');
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin');
const baseWebpackConfig = require('./webpack.base.config');
const utils = require('./utils');
const config = require('./config');
const common = config.common;
const current = utils.getEnvAndConf(config);
const isProduction = true;

let reportPlugin = [];

if (current.conf.bundleAnalyzerReport) {
   const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
      .BundleAnalyzerPlugin;
   reportPlugin.push(new BundleAnalyzerPlugin());
}

module.exports = merge(baseWebpackConfig, {
   devtool: current.conf.productionSourceMap ? '#source-map' : false,
   module: {
      rules: [
         {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
               fallback: 'style-loader',
               use: utils.computeStyleLoader(isProduction, [
                  'css-loader',
                  'postcss-loader'
               ])
            })
         }, {
            test: /\.scss$/,
            include: common.sourceCode,
            exclude: /node_modules/,
            use: ExtractTextPlugin.extract({
               fallback: 'style-loader',
               use: utils.computeStyleLoader(isProduction, [
                  'css-loader',
                  'postcss-loader',
                  'sass-loader'
               ])
            })
         }
      ]
   },
   plugins: [
      new CleanWebpackPlugin(['dist'], { root: common.context }),
      new webpack.HashedModuleIdsPlugin(),
      // 作用域提升插件
      new webpack.optimize.ModuleConcatenationPlugin(),
      // 设置生产环境变量
      new webpack.DefinePlugin({
         'process.env.NODE_ENV': current.conf.env.NODE_ENV
      }),
      // 将css单独抽离出来
      new ExtractTextPlugin({
         filename: utils.resolve(current.conf.assetsSubDirectory)(
            'css/[name].[contenthash:10].css'
         ),
         disable: false,
         allChunks: true
      }),
      new OptimizeCSSPlugin({
         cssProcessorOptions: { safe: true }
      }),
      new webpack.optimize.UglifyJsPlugin({
         compress: {
            warnings: false,
            'drop_debugger': true,
            'drop_console': true
         },
         comments: false,
         'space_colon': false
      }),
      new webpack.optimize.CommonsChunkPlugin({
         name: 'vendor'
      }),
      new webpack.optimize.CommonsChunkPlugin({
         name: 'runtime'
      }),
      ...reportPlugin
   ]
});
