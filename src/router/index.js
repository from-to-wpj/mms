import Vue from "vue";
import VueRouter from "vue-router";

import Layout from '@/components/Layout.vue'
import Home from '../views/home'
Vue.use(VueRouter);

const routes = [
  {
    path: '/login',
    name: 'login', //路由名称
    component: () => import('@/views/login')//组件对象
  }, ,
  {
    path: '/',
    name: 'layout', //路由名称
    component: Layout, //组件对象
    redirect: '/home',
    children: [
      {
        path: '/home',
        component: Home,
        meta: { title: '首页' }
      },
    ]
  },
];

const router = new VueRouter({
  routes
});

export default router;
