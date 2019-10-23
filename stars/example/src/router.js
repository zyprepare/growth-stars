import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/home.vue';
import CommonComponents from './views/commonComponents.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/common',
      name: 'common',
      component: CommonComponents
    }
  ]
});
