import Vue from 'vue'
import App from './App.vue'
import { store } from './store/store'
import '@babel/polyfill'

new Vue({
  el: '#app',
  store,
  render: h => h(App),
})
