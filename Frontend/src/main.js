import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import axios from 'axios'

const base = axios.create ({
  baseURL : 'https://glacial-everglades-74306.herokuapp.com'
})

vue.prototype.$http = base;

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
