/**
 * @description MPA webpack 配置
 * @author 双越老师
 */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  // 多入口
  entry: {
    home: './src/home/index.js',
    product: './src/product/index.js',
    about: './src/about/index.js'
  },
  output: {
    filename: 'js/[name].[contentHash].js', // name 即 entry 的 key
    path: path.resolve(__dirname, './dist')
  }
}