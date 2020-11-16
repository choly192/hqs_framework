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
    "no-debugger": "off",
    'react/no-string-refs': 'off', // 关闭react的ref属性使用字符形式报警
    'react/prop-types': 'off' ,
    'default-param-last': 'off'
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
