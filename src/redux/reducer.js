/**
 * 定义reducers
 */
import { combineReducers } from 'redux';
import { TEST } from './actionType';

// 测试

const changTest = (state = null, action = {}) => {
  switch (action.type) {
    case TEST:
      return action.data;
    default:
      return state;
  }
};

/**
 * 状态集返回
 */
export default combineReducers({
  changTest
});
