/**
 * 路由入口
 */
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Switch } from 'react-router';
import { renderRoutes } from 'react-router-config';
import HandleRouter from './handle/handleRouter'; // 路由
const routes = [...HandleRouter]; // 路由合并

const RouterComponent = () => <Switch>{renderRoutes(routes)}</Switch>;

const RootRouter = () => (
  <BrowserRouter>
    <RouterComponent />
  </BrowserRouter>
);

export default RootRouter;
