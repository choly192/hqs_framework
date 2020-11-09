/**
 * 提升打包性能
 */

 module.exports = optimization = {
   splitChunks : {
     cacheGroups: {
        vendors: { // 抽离第三方插件
          test: /node_modules/,
          chunks: 'initial',
          name: 'vendor', // 自定义命名
          priority: 10 // 设置优先级 防止自定义公共组件打包时被覆盖
        },
        utils :{ // 抽离自己封装的方法 是一个基础类库
          chunks: 'initial',
          name : 'utils',
          minSize: 0 // 只要超出0字节就单独打包生成一个新包
        }
     }
   }
 }