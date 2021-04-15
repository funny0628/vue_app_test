import Vue from 'vue'
import App from './App.vue'
import {router} from './router/index.js'
import MyPlugin  from './utils/plugin.js'
Vue.config.productionTip = false

Vue.use(MyPlugin);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
