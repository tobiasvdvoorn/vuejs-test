import Vue from 'vue'
import App from './App.vue'
import home from './views/Home.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = true

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
