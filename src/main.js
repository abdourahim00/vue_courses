import Vue from 'vue'
import { createPinia, PiniaVuePlugin } from 'pinia'

import App from './App.vue'
import router from './router'
import axios from 'axios'
import './assets/css/tailwind.css'
import './assets/css/style.css'
// import setAuthHeader from '../src/utils/setAuthHeader'

axios.defaults.baseURL = 'http://127.0.0.1:8000/api';

// if(localStorage.getItem){
//   setAuthHeader(localStorage.)
// }else {
//   setAuthHeader(false)
// }
// import './assets/main.css'
Vue.prototype.$axios = axios


Vue.use(PiniaVuePlugin)

new Vue({
  router,
  pinia: createPinia(),
  render: (h) => h(App)
}).$mount('#app')
