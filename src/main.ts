import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// iview组件库按需引入
import '@/plugin/iview'

// 清楚样式css
import '@/assets/css/base.css'

// 过滤器
import '@/filter'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
