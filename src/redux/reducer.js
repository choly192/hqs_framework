/**
 * 定义reducers
 */
import { combineReducers } from 'redux';
import { TEST } from './actionType';

// 测试

const changTest = (state = 0, action) => {
  switch (action.type) {
    case TEST:
      return action.data;
    default:
      return state;
  }
};

export default combineReducers({
  changTest
});
