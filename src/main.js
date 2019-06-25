import Vue from 'vue'
import App from './App.vue'
import router from '@/router/index'
import store from '@/store/index'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import * as ajax from '@/request'

import { Tab, Tabs } from 'vant';
import 'vant/lib/index.css';
Vue.use(Tab).use(Tabs);
 
Vue.use(Mint)
//全局混入
Vue.mixin({
  filters: {
    toFixed (value) {
      return value.toFixed(2)
    },
    count99 (value) {
      return value > 99? '99+' : value
    }
  }
})
Vue.prototype.$http = ajax
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

