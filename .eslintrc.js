module.exports = {
  root: true,
  parser: "babel-eslint", // 解析器
  env: {
    browser: true,
    node:true,
    es6: true,
    amd:true
  },
  globals: {
    environment: "readonly"
  },
  plugins:["react","babel"],
  rules: {
    "no-debugger": "off"
  },
  extends: [
    'standard', // npm install --save-dev eslint-config-standard eslint-plugin-promise eslint-plugin-import eslint-plugin-node
    'plugin:react/recommended',
    'plugin:prettier/recommended', // integrate eslint-plugin-prettier with eslint-config-prettier
    'prettier/babel',
    'prettier/react',
    'prettier/standard'
  ]
}
// {
//   "root" :true,
//   "parser":"babel-eslint",
//   "env": {
//     "browser": true,
//     "node": true,
//     "es6": true,
//     "amd": true
//   },
//   "globals": {
//     "environment": "readonly"
//   },
//   "plugins":["react"],
//   "rules":{
//     "indent": ["error",2], // 缩进2空格
//     "semi": [2,"always"], // 语句结尾需要分号
//     "no-console": "off",
//     "no-debugger": "off"
//   }
// }