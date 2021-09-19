module.exports = {
  printWidth: 120, // 超过最大值换行
  semi: true, // P句末添加分号
  singleQuote: true, // 使用单引号代替双引号
  trailingComma: 'none', // 在对象或者数组最后一个元素后面加逗号
  bracketSpacing: true, // 在对象或者数组括号与元素之间加空格
  jsxBracketSameLine: true, // 在jsx中把'>'是否单独放一行
  jsxSingleQuote: false, // 在jsx中是否使用单引号代替双引号
  arrowParens: 'avoid', // (x) => {} 箭头函数参数只有一个时是否要有小括号；'aviod'省略括号
  insertPragma: false, //
  ignorePath: ".prettierignore",// 不使用prettier格式化的文件填写在 .prettierignore文件中
  tabWidth: 2, // 缩进的字节数
  useTabs: false, // 缩进不使用tab使用空格
  endOfLine: 'auto'
}
