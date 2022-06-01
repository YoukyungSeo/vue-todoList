import Vue from 'vue';
import VueRouter from 'vue-router';
import TodoPage from '../views/TodoPage.vue';
import SignupPage from '../views/SignupPage';
import LoginPage from '../views/LoginPage';
import NotFoundPage from '../views/NotFoundPage';
import MyPage from '../views/MyPage'
import { EventBus } from '../utils/EventBus';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/web/todo',
    },
    {
      path: '/web/todo',
      component: TodoPage,
      // component: () => import('../todo.vue'),
    },
    {
      path: '/web/signup',
      component: SignupPage,
    },
    {
      path: '/web/login',
      component: LoginPage,
    },
    {
      path: '/web/mypage',
      component: MyPage,
    },
    {
      path: '*',
      component: NotFoundPage,
    },
  ]
});

router.beforeEach((to, from, next) => {
  console.log('router.beforEach', to, from, next)
  next();
  EventBus.$emit('PageChange')
})

export default router;