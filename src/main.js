import Vue from 'vue'
import App from './App.vue'
import { store } from './store/store'
import router from './routes/index'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

new Vue({
  el: '#app',
  store,
  Vuetify,
  render: h => h(App),
  router,
}).$mount('#app');
