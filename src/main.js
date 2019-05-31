import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// import 'ant-design-vue/dist/antd.css'
// import Antd from 'ant-design-vue'
// Vue.use(Antd)

import cyccui from "../components";
Vue.use(cyccui);


new Vue({
  render: h => h(App),
}).$mount('#app')
