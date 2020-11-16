# hqs_framework
自己搭建的开发环境框架

# react项目框架
## 技术点
- html、 css 、 less 、react 、 webpack 、 webpack-cli 、 babel 、 eslint 
 react-router、react-router-dom、react-router-config、redux、react-redux 

## 搭建步骤
 - 1. npm init  ---产生package.json文件
 - 2. npm install -D webpack webpack-cli --下载webpack对应的包
 - 3. npm install -D babel-loader @babel/core @babel/cli @babel/preset-env @babel/preset-react @babel/plugin-proposal-class-properties  -- 下载babel插件进行编译
 - 4. 配置eslint代码规范化


## 项目结构
- src
  - common
    - tools
  - container
    - home.js
  - redux
    - action.js
    - actionType.js
    - reducer.js
    - store.js
  - router
    - handle
      - handleRouter.js
    - index.js
  - index.html
  - index.js
- .babelrc
- .eslintrc.js
- .prettierrc.js
- webpackConfig
  - module
    - optimization.js
    - modulePlugins.js
    - moduleRules.js
  - webpack.config.base.js
  - webpack.config.dev.js
  - webpack.config.prod.js

## 项目运行
- 1. npm install --->安装依赖
- 2. npm run dev --->开发环境运行
- 3. npm run build --->打包

## 搭建框架遇到的问题
   - 1. 打包入口的问题 --  npm install -D cross-env 配置package.json文件中的开发环境入口和打包入口
