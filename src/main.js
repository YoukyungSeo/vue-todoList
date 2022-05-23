import Vue from 'vue'
import App from './App.vue'
import { store } from './store/store'
import router from './routes/index'

new Vue({
  el: '#app',
  store,
  render: h => h(App),
  router,
}).$mount('#app');
