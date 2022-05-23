import Vue from 'vue';
import VueRouter from 'vue-router';
import todo from '../todo.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/todo',
    },
    {
        path: '/todo',
        component: todo,
        // component: () => import('../todo.vue'),
    }
  ]
});

export default router;