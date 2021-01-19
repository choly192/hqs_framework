/**
 * 封装的公共方法
 */

/**
 * 截取指定字符前后的内容
 * str----字符串 num----指定截取指定字符前还是后 aim---指定字符
 * 0---返回截取的指定字符前的内容
 * 1---返回截取的指定字符后的内容
 */
export const interceptionStr = (str, num, aim) => {
  const newStr = str.toString();
  const index = newStr.lastIndexOf(aim);
  switch (num) {
    case 0:
      const beforeValue = newStr.substring(0, index);
      return beforeValue;
    case 1:
      const afterValue = newStr.substring(index + 1, newStr.length);
      return afterValue;
    default:
      break;
  }
};

/**
 * 计算剩余时间
 */
export const getTimeRemaining = endtime => {
  // Date.parse()将时间字符串转换未毫秒值
  const total = Date.parse(endtime) - Date.parse(new Date());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 24);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  return {
    total,
    days,
    hours,
    minutes,
    seconds
  };
};
