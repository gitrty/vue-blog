import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// iview组件库按需引入
import '@/plugin/iview'

// 清楚样式css
import '@/assets/css/base.css'

import filter from '@/filter'
import common from './common'
Vue.use(filter)
  .use(common)

Vue.config.productionTip = false

export const vue = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
