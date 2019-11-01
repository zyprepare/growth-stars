import Vue from 'vue';
import App from './App.vue';
// import router from './router';
import store from './store';
import Log from '@common/plugins/log';

// 打印日志
Vue.use(Log);

new Vue({
  // router,
  store,
  render: h => h(App)
}).$mount('#app_block');
