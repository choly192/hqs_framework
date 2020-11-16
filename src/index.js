import React from 'react';
import ReactDOM from 'react-dom';
import RootRouter from '@/router/index';
import store from '@/redux/store';
import { Provider } from 'react-redux';
import './index.less';

ReactDOM.render(
  <Provider store={store}>
    <RootRouter />
  </Provider>,
  document.getElementById('root')
);
