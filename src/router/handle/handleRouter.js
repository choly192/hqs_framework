/**
 * 路由配置
 */
import asyncComponent from '@/common/tools/asyncComponent';
const HandleRouter = [
  {
    name: '首页',
    path: '/',
    exact: true,
    component: asyncComponent(() => import('@/container/home'))
  }
];
export default HandleRouter;
