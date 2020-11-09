/**
 * webpack 打包基本配置
 */
const path = require('path');
const modulePlugins = require('./module/modulePlugins'); // 插件
const moduleRules = require('./module/moduleRules'); // 代码和资源模块化
const optimization = require('./module/optimization'); // 提升打包性能

module.exports = {
  entry: [path.resolve(__dirname,'../src','index.js')],
  output:{
    filename:'./static/js/[name]-bundle.js',
    path:path.resolve(__dirname,'../dist')
  },
  optimization: optimization,
  module:{
    rules: moduleRules
  },
  plugins: modulePlugins,
  resolve: {
    extensions: ['.js'], // 自动解析确定的扩展
    alias: { // 创建别名
      '@': path.join(__dirname,'..','src'), // '@/common/。。'
      static: path.join(__dirname, '..', '/src/static') // 指向静态资源目录
    }
  }
}