import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import 'ant-design-vue/dist/antd.css'
import Antd from 'ant-design-vue'
Vue.use(Antd)

import cyccui from "../components";
Vue.use(cyccui);

import VueRouter from 'vue-router'
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: []
});


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')