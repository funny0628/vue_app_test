import Vue from 'vue'
import App from './App.vue'
import {router} from './router/index.js'
import MyPlugin  from './utils/plugin.js'
import './assets/css/base.css'
Vue.config.productionTip = false

import Vconsole from "vconsole";
new Vconsole();

Vue.use(MyPlugin);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
