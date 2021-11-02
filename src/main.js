import Viewer from 'v-viewer'
import 'viewerjs/dist/viewer.css'
import Vue from 'vue'
import App from './App.vue'
import {router} from './router/index.js'
import MyPlugin  from './utils/plugin.js'
import './assets/css/base.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import {store} from './utils/store'

// import Viewer from 'v-viewer'
// import 'viewerjs/dist/viewer.css'

Vue.use(Viewer);
Viewer.setDefaults({
  Options: { 
  "inline": false, 
  "button": false, 
  "navbar": false, 
  "toolbar":false,
  "tooltip": false, 
  "movable": false, 
  "zoomable": false, 
  "keyboard": false, 
  "url": "https://www.pexels.com/zh-cn/photo/6869638/" }
});

Vue.use(ElementUI);

Vue.config.productionTip = false


import Vconsole from "vconsole";
new Vconsole();

Vue.use(MyPlugin);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
