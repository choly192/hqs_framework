/**
 * 定义数据操作层
 */
import { TEST } from './actionType';

// 测试
export const test = data => {
  return {
    type: TEST,
    data
  };
};
