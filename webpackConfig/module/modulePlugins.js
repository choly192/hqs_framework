/**
 * 打包所需的插件
 */
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // 更新之后要使用{}解构出来 否则会报错
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // 抽取css为单独的文件
const copyWebpackPlugin = require('copy-webpack-plugin'); // 从webpack中拷贝文件或者文件夹
const OptimizeCss = require('optimize-css-assets-webpack-plugin'); // 压缩css
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer'); // 可视化 打包体积和依赖关系的可视化
const ESLintPlugin = require('eslint-webpack-plugin');
const Webpackbar = require('webpackbar'); // 显示进度条 默认 绿色

let modulePlugins = [
  new CleanWebpackPlugin(), // 每一次重新打包都会清除之前的dist文件
  new HtmlWebpackPlugin({
    template: './src/index.html'
  }),
  new MiniCssExtractPlugin({
    filename: './static/css/[name]-[id].[chunkhash:8].bundle.css' // 指定打包后的css
  }),
  new Webpackbar({
    color: 'pink'
  }) 
];

if (process.env.NODE_ENV === 'development') {
  let devPlugins = [
    // 复制 static 文件到dist目录下
    new copyWebpackPlugin({
      patterns:[{
        from: path.join(__dirname, '../../src/static'), // 打包的静态资源目录地址
        to: './static' // 打包到dist下面的static
      }]
    }),
    new webpack.HotModuleReplacementPlugin(),
    new ESLintPlugin({cache:true})
  ];
  modulePlugins = [...modulePlugins, ...devPlugins];
} else if (process.env.NODE_ENV === 'production') {
  let proPlugins = [
    // 复制static 文件到dist目录下
    new copyWebpackPlugin({
      patterns:[{
        from: path.join(__dirname, '../../src/static'), // 打包的静态资源目录地址
        to: './static' // 打包到dist下面的static
      }]
    }),
    new OptimizeCss(), // 压缩css
    new BundleAnalyzerPlugin() // 打包体积和依赖关系的可视化分析
  ];
  modulePlugins = [...modulePlugins, ...proPlugins];
}

module.exports = modulePlugins;