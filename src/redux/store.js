/**
 * 创建store仓库
 */
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; // 使action接收一个函数，函数接收两个参数state和dispatch，可用来处理异步任务
import rootReducer from './reducer';

export default createStore(rootReducer, applyMiddleware(thunk));
