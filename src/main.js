import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/style/communal.less'
import { Pagination } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false

Vue.use(Pagination)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
