/**
 * 路由配置
 */
import HomePage from '@/container/home';
const HandleRouter = [
  {
    name: '首页',
    path: '/',
    exact: true,
    component: HomePage
  }
];
export default HandleRouter;
