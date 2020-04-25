import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import ElementUI from 'element-ui'; // 组件库
import 'element-ui/lib/theme-chalk/index.css'; // 样式
Vue.use(ElementUI)

Vue.config.productionTip = process.env.NODE_ENV ==='production';
console.log(process.env.VUE_APP_SERVICE_URL)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
